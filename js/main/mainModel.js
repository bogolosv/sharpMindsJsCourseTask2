class MainModel{
	constructor(){
		this.dataConfig = {
			search: '',
			sort: 	0
		}
		this.db = firebase.firestore().collection('organizations');
	}

	getData(){
		appTools.showLoader();
        return this.db.get().then(data =>{
			appTools.hideLoader();
        	let result = [], i = 0;
        	for(let obj of data.docs){
        		result.push(obj.data());
        		result[i].dbId = obj.id;
        		i++;
        	}
        	return result;
        });
	}

	delData(id){
		appTools.showLoader();
		return this.db.doc(id).delete().then(()=>{
			appTools.hideLoader();
	        return true;
		});
	}

	getConvertData(data = JSON.parse(localStorage.organizations)){
		data = convertArr.sort(data, this.dataConfig.sort);
		data = convertArr.search(data, this.dataConfig.search);
		return data;
	}
}