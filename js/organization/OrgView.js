class OrgView{
	constructor(){
		this.DOMElements = {
			appContentContainer: 	document.querySelector('.app_content'),
			app_nav: 				document.querySelector('.app_nav'),
			requiredInput: 		'',
			orgName: 				'',
			cardType: 				'',
			cardDate: 				'',
			cardStatus: 			'',
			updateOrg: 				'',
			cancelOrg: 				''
		}
		this.data = {};
		this.action = 'create';
	}

	isReady(){

        return true;
    }

    initData(data, action){
    	this.action = action;
    	this.data = data;
    }

    init() {
        this.buildView();
    }

    buildView(){
    	this.DOMElements.appContentContainer.innerHTML = HTML.editOrCreateOrgBlock(this.data);
    	this.DOMElements.app_nav.innerHTML = HTML.topNav();
    	this.setDOMElements();
    }

    setDOMElements(){
    	this.DOMElements.requiredInput 	= document.querySelectorAll('.required_input');
		this.DOMElements.orgName 		= document.getElementById('orgName');
		this.DOMElements.cardType 		= document.getElementById('cardType');
		this.DOMElements.cardDate 		= document.getElementById('cardDate');
		this.DOMElements.cardStatus 	= document.getElementById('cardStatus');
		this.DOMElements.updateOrg 		= document.getElementById('updateOrg');
		this.DOMElements.cancelOrg 		= document.getElementById('cancelOrg');
    }

    changeBtnStatus(status){
    	appTools.changeElementStatus(this.DOMElements.updateOrg, status);
    }

    getData(){
    	let prewData = this.data;
    	let DOM = this.DOMElements;
    	let time = new Date(DOM.cardDate.value);
    	let intTime = +time;
    	let obj = {};
    	if(DOM.orgName.value != prewData.name || this.action == 'create')
    		obj.name = DOM.orgName.value;
    	if(DOM.cardType.value != prewData.type || this.action == 'create')
    		obj.type = +DOM.cardType.value;
    	if(intTime != prewData.date || this.action == 'create')
    		obj.date = +intTime;
    	if(DOM.cardStatus.value != prewData.status || this.action == 'create')
    		obj.status = +DOM.cardStatus.value;
    	if(this.action == 'create'){
    		obj.count = +prewData.count;
    		obj.id = this.getUniqueId();
    	}
    	return obj;
    }

    getUniqueId(){
    	let data = JSON.parse(localStorage.organizations);
    	data = convertArr.sort(data, 0);
    	if(data.length==0)
    		return 1;
    	return +data[data.length-1]?.id+1;
    }
}