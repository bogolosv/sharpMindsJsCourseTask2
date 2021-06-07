let numModule = (function(){
	let randomInteger = function(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}

	let intDateToString = function(time){
    	let tmp = "";
		tmp += time.getFullYear();
		tmp += "-";
		tmp += time.getMonth()<9?"0"+(time.getMonth()+1):(time.getMonth()+1);
		tmp += "-";
    	tmp += time.getDate()<10?"0"+time.getDate():time.getDate()+"";
    	return tmp;
    }

	return {
		randomInteger: 		randomInteger,
		intDateToString: 	intDateToString
	}
}());