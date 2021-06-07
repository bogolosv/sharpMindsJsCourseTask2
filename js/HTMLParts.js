let HTML = (function(){
	let toolsForTable = function() {
		return `
    		<div class="flex_center app_content__tools">
				<div class="margin-5">
					<input type="text" class="input_style" placeholder='Поиск' id='orgSearch'>
				</div>
				<div class="margin-5">
					<select name="" id="orgSort" class="input_style">
						<option value="0" selected="" disabled>Сортировать</option>
						<option value="0">По номеру &#129047;</option>
						<option value="1">По номеру &#129045;</option>
						<option value="2">По имени &#129047;</option>
						<option value="3">По имени &#129045;</option>
						<option value="4">По дате &#129047;</option>
						<option value="5">По дате &#129045;</option>
					</select>
				</div>
				<div class="margin-5">
					<a href='#new/organization' class='btn btn-primary'>Создать новую организацию</a>
				</div>
			</div>
			<div id='tableInf'>

			</div>
		`;
	}

	let headerForTable = function() {
		return `
			<div class="table-responsive">
				<table class="table table-hover app_content__table">
					<thead class='table-primary-1'>
    					<tr>
							<th scope="col">№</th>
							<th scope="col">Название</th>
					    	<th scope="col">Тип карт</th>
					    	<th scope="col">Количество карт</th>
					    	<th scope="col">Дата создания</th>
					    	<th scope="col">Статус</th>
					    	<th scope="col">Настройки</th>
    					</tr>
					</thead>
				 	<tbody id='tableBody'>
						
				  	</tbody>
				</table>
			</div>
		`;
	}

	let infForEmptyTable = function() {
		return `
			<div class="table_empty flex_center">
				<div class="img_empty">
					<img src="src/images/box.svg" alt="">
				</div>
				<h4>Ничего не найдено</h4>
			</div>
		`;
	}

	let infForTable = function(data, i) {
	    let time = new Date(data.date);
		return `
			<tr class="org_item">
		    	<th scope="row">${i}</th>
		      	<td>${data.name}</td>
		      	<td>${data.type==0?'Дисконтная':'Накопительная'}</td>
		      	<td>${data.count}</td>
		      	<td>${numModule.intDateToString(time)}</td>
		      	<td>${data.status==0?'Не активно':'Активно'}</td>
		      	<td class="app_content__table_tools">
		      		<a class='organizationEditBtns'>
		      			<img src="src/images/edit.svg" alt="" class='orgEdit'>
		      		</a>
		      		<a href="#" class='organizationDelBtns'>
		      			<img src="src/images/remove.svg" alt="" class='orgDel'>
		      		</a>
		      	</td>
	    	</tr>
		`;
	}

	let topNav = function() {
		let pg = document.location.hash.replace(/^#/, '');
		if(pg==''){
			return `
	    		<ol class="breadcrumb">
					<li class="breadcrumb-item active" aria-current="page">Организации</li>
				</ol>
	    	`;
		}
		if(pg=='edit/organization'){
			return `
	    		<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Главная</a></li>
					<li class="breadcrumb-item active" aria-current="page">Редактировать организацию</li>
				</ol>
	    	`;
		}
		if(pg=='new/organization'){
			return `
	    		<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Главная</a></li>
					<li class="breadcrumb-item active" aria-current="page">Создать организацию</li>
				</ol>
	    	`;
		}
		return `
			NOTHING
		`;
	}

	let editOrCreateOrgBlock = function(data) {
    	let type = ['', ''];
    	type[data.type] = 'selected';
    	let status = ['', ''];
    	status[data.status] = 'selected';
	    let time = new Date(data.date);
		return `
    		<div class='editBlock flex_center'>
    			<div class="input_block">
					<label for="orgName" class="input_title">Название организации*</label>
					<input type="text" id='orgName' class="required_input input_style" value='${data.name}'>
				</div>
    			<div class="input_block">
					<label for="cardType" class="input_title">Тип карты*</label>
					<select name="" id="cardType" class="input_style">
						<option value="0" ${type[0]}>Дисконтная</option>
						<option value="1" ${type[1]}>Накопительная</option>
					</select>
				</div>
    			<div class="input_block">
					<label for="cardDate" class="input_title">Дата создания*</label>
					<input type="date" id='cardDate' class="required_input input_style" value='${numModule.intDateToString(time)}'>
				</div>
    			<div class="input_block">
					<label for="cardStatus" class="input_title">Тип карты*</label>
					<select name="" id="cardStatus" class="input_style">
						<option value="0" ${status[0]}>Не активно</option>
						<option value="1" ${status[1]}>Активно</option>
					</select>
				</div>
				<div class='flex_center btn-container'>
					<button type='button' class='btn btn-primary' id='updateOrg'>Сохранить</button>
					<a href='#' class='btn btn-cancel' id='cancelOrg'>Отмена</a>
				</div>
    		</div>
    	`;
	}

	let modalWindow = function() {
    	return `<div class="app_modal app_modal_hide">
			<div class="app_modal__background app_modal__close"></div>
			<div class="app_modal__window">
				<div class="app_modal__close app_modal__nav_btn flex_center">
					<img src="src/images/close.svg" alt="">
				</div>
				<div class="app_modal__content">
				</div>
				<div class="btn-container flex_center">
					<button type="button" class='btn btn-primary' id='delOrgBtn'>Удалить</button>
					<button type="button" class='btn btn-cancel app_modal__close'>Отмена</button>
				</div>
			</div>
		</div>`;
	}


	return {
		toolsForTable: 			toolsForTable,
		headerForTable: 		headerForTable,
		infForEmptyTable: 		infForEmptyTable,
		infForTable: 			infForTable,
		topNav: 				topNav,
		editOrCreateOrgBlock: 	editOrCreateOrgBlock,
		modalWindow:  			modalWindow
	}
}());