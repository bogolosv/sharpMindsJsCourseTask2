class MainView{
	constructor(){
		this.DOMElements = {
			appContentContainer: 	document.querySelector('.app_content'),
			app_nav: 				document.querySelector('.app_nav'),
			orgSearch:  			document.getElementById('orgSearch'),
			orgSort:  				document.getElementById('orgSort'),
			organizationEditBtns: 	document.querySelectorAll('.organizationEditBtns'),
    		organizationDelBtns: 	document.querySelectorAll('.organizationDelBtns'),
    		tableBody: 				document.getElementById('tableBody'),
	    	tableInf:				document.getElementById('tableInf'),
	    	appModal: 				document.querySelector('.app_modal'),
	    	appModalCloseBtns: 		document.querySelectorAll('.app_modal__close'),
	    	appModalDelBtns: 		document.querySelector('#delOrgBtn'),
	    	appModalContent:		document.querySelector('.app_modal__content'),
	    	orgItem: 				document.querySelectorAll('.org_item')
		}
		this.data = [];
	}

	isReady(){

        return true;
    }

    initData(data){
    	this.data = data;
    }

    init() {
        this.buildView();
    }

    buildView(){
    	this.DOMElements.appContentContainer.innerHTML = HTML.modalWindow();
    	this.DOMElements.appContentContainer.innerHTML += HTML.toolsForTable();
    	this.setDOMElements();
    	if(this.data.length>0){
	    	this.DOMElements.tableInf.innerHTML = HTML.headerForTable();
    		this.setDOMElements();
	    	this.initTable();
    	}
    	else{
    		this.DOMElements.tableInf.innerHTML = HTML.infForEmptyTable();
    	}
    	this.DOMElements.app_nav.innerHTML = HTML.topNav();
    }

    initTable(){
		let i = 0;
		this.setDOMElements();
	    if(this.DOMElements.tableBody==null){
	    	this.DOMElements.tableInf.innerHTML = HTML.headerForTable();
    		this.setDOMElements();
	    }
    	this.DOMElements.tableBody.innerHTML = "";
    	if(this.data.length>0){
	    	for(let data of this.data){
	    		i++;
	    		this.DOMElements.tableBody.innerHTML += HTML.infForTable(data, i);
	    	}
	    	this.setDOMElements();
	    }
	    else{
	    	this.DOMElements.tableInf.innerHTML = HTML.infForEmptyTable();
	    }
    }
    
    setDOMElements(){
    	this.DOMElements.orgSearch 				= document.getElementById('orgSearch');
		this.DOMElements.orgSort 				= document.getElementById('orgSort');
    	this.DOMElements.organizationEditBtns 	= document.querySelectorAll('.organizationEditBtns');
    	this.DOMElements.organizationDelBtns 	= document.querySelectorAll('.organizationDelBtns');
	    this.DOMElements.tableBody 				= document.getElementById('tableBody');
	    this.DOMElements.tableInf 				= document.getElementById('tableInf');
	    this.DOMElements.appModal 				= document.querySelector('.app_modal');
	    this.DOMElements.appModalCloseBtns 		= document.querySelectorAll('.app_modal__close');
	    this.DOMElements.appModalDelBtns 		= document.querySelector('#delOrgBtn');
	    this.DOMElements.appModalContent		= document.querySelector('.app_modal__content');
	    this.DOMElements.orgItem 				= document.querySelectorAll('.org_item');
    }
}