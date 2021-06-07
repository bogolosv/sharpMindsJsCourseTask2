let btn_show_or_hide_left_bar = document.querySelector('#close_or_open_left_bar');
let left_bar = document.querySelector('.left_bar');
let left_bar__close = document.querySelector('.left_bar__close');
let left_bar__open = document.querySelector('.left_bar__open');
let app_main = document.querySelector('.app_main');

btn_show_or_hide_left_bar.addEventListener('click', ()=>{
	if(left_bar.classList.contains('hide_left_bar')){
		left_bar.classList.remove('hide_left_bar');
		left_bar__open.classList.add('d-none');
		left_bar__close.classList.remove('d-none');
		app_main.classList.remove('app_main_full');
	}
	else{
		left_bar.classList.add('hide_left_bar');
		left_bar__open.classList.remove('d-none');
		left_bar__close.classList.add('d-none');
		app_main.classList.add('app_main_full');
	}
	
});