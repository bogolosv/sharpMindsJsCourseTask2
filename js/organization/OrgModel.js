class OrgModel{
	constructor(){
		this.db = firebase.firestore().collection('organizations');
	}

	saveData(data, action, id){
		appTools.showLoader();
		if(action == 'edit'){
			return this.db.doc(id).update(data).then(() =>{
				appTools.hideLoader();
	        	return true;
	        });
		}
		else if(action == 'create'){
			return this.db.add(data).then(() =>{
				appTools.hideLoader();
	        	return true;
	        });
		}
		
	}

	isAllRequired(DOM){
		for(let r_inputs of DOM.requiredInput){
			if(r_inputs.value.length==0)
				return false;
		}
		return true;
	}
}
