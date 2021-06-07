class OrgController{
	constructor(model, view, action){
        this.model = model;
        this.view = view;
        this.action = action;
	}

	init(){
        let data;
        if(this.action == 'edit'){
            if(localStorage.editOrganization){
                data = JSON.parse(localStorage.editOrganization);
            }
            else{
                document.location.hash = '';
            }
        }
        else{
            data = {
                id:     0,
                name:   '',
                type:   0,
                count:  numModule.randomInteger(10,100),
                date:   new Date(),
                status: 0
            }
        }
        this.view.initData(data, this.action);
        this.initView();
    }

    initView() {
        if(this.view.isReady()){
            this.view.init();
            this.bindEvents();
            this.view.changeBtnStatus(this.model.isAllRequired(this.view.DOMElements));
        }
    }

    bindEvents() {
    	for(let input of this.view.DOMElements.requiredInput){
            input.addEventListener('input', ()=>{
                input.value.length==0?input.classList.add('required_input_empty'):input.classList.remove('required_input_empty');
                this.view.changeBtnStatus(this.model.isAllRequired(this.view.DOMElements));
            });
        }

        this.view.DOMElements.updateOrg.addEventListener('click', ()=>{
            this.saveBtnClick();
        });
    }

    saveBtnClick(){
        if(!this.view.DOMElements.updateOrg.classList.contains('disabled')){
            this.view.changeBtnStatus(false);
            this.model.saveData(this.view.getData(), this.action, this.view.data.dbId).then((status) => {
                if(status){
                    delete localStorage.editOrganization;
                    document.location.hash = '';
                }
                
            });
        }
    }
}
