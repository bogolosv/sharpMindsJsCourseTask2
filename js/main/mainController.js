class MainController{
	constructor(model, view){
        this.model = model;
        this.view = view;
	}

	init(){
        if(localStorage.organizations){
            let data = JSON.parse(localStorage.organizations);
            this.view.initData(this.model.getConvertData(data));
            this.initView();
        }
        this.model.getData().then((data) => {
            this.view.initData(this.model.getConvertData(data));
            localStorage.organizations = JSON.stringify(data);
            this.initView();
        });
    }

    initView() {
        if(this.view.isReady()){
            this.view.init();
            this.bindEvents();
            this.bindEventsForTable();
        }
    }

    bindEvents() {
    	this.view.DOMElements.orgSearch.addEventListener('input', () => {
            this.model.dataConfig.search = this.view.DOMElements.orgSearch.value;
            let data = this.model.getConvertData();
            
            this.view.initData(data);
            this.view.initTable();
            this.bindEventsForTable();
        });

        this.view.DOMElements.orgSort.addEventListener('input', () => {
            this.model.dataConfig.sort = this.view.DOMElements.orgSort.value;
            let data = this.model.getConvertData();
            
            this.view.initData(data);
            this.view.initTable();
            this.bindEventsForTable();
        });

        for(let btn of this.view.DOMElements.appModalCloseBtns){
            btn.addEventListener('click', ()=>{
                this.view.DOMElements.appModal.classList.add('app_modal_hide');
            });
        }

        this.view.DOMElements.appModalDelBtns.addEventListener('click', ()=>{
            this.delBtnClick(localStorage.delOrganization);
        });
    }

    bindEventsForTable(){
        // for(let i = 0; i < this.view.DOMElements.organizationEditBtns.length; i++){
        //     this.view.DOMElements.organizationEditBtns[i].addEventListener('click', () => {
        //         this.editBtnClick(this.view.data[i]);
        //     })
        // }
        // for(let i = 0; i < this.view.DOMElements.organizationDelBtns.length; i++){
        //     this.view.DOMElements.organizationDelBtns[i].addEventListener('click', () => {
        //         localStorage.delOrganization = this.view.data[i].dbId;
        //         // this.delBtnClick(this.view.data[i].dbId);
        //         this.view.DOMElements.appModal.classList.remove('app_modal_hide');
        //         this.view.DOMElements.appModalContent.innerHTML = `Вы действительно хотите удалить "${this.view.data[i].name}"?`;
        //     })
        // }

        for(let i = 0; i < this.view.DOMElements.orgItem.length; i++){
            this.view.DOMElements.orgItem[i].addEventListener('click', (event) => {
                if(event.target.classList.contains('orgEdit')){
                    this.editBtnClick(this.view.data[i]);
                }
                if(event.target.classList.contains('orgDel')){
                    localStorage.delOrganization = this.view.data[i].dbId;
                    this.view.DOMElements.appModal.classList.remove('app_modal_hide');
                    this.view.DOMElements.appModalContent.innerHTML = `Вы действительно хотите удалить "${this.view.data[i].name}"?`;
                }
                console.log(event.target);
            })
        }

    }

    editBtnClick(organization){
        localStorage.editOrganization = JSON.stringify(organization);
        document.location.hash = 'edit/organization';
    }

    delBtnClick(organizationId){
        this.model.delData(organizationId).then((status) => {
            if(status){
                delete localStorage.delOrganization;
                this.init();
            }
        });
    }
}