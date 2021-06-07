let appTools = (function(){
	let loader = document.querySelector('.top_loader');
	let showLoader = function() {
		loader.classList.remove('top_loader_hide');
	}

	let hideLoader = function() {
		loader.classList.add('top_loader_hide');
	}

	let changeElementStatus = function(element, status) {
		!status ? element.classList.add('disabled'):element.classList.remove('disabled');
	}


	return {
		showLoader: 			showLoader,
		hideLoader: 			hideLoader,
		changeElementStatus: 	changeElementStatus
	}
}());