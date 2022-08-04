const logo = document.querySelector('.logo__image');
const sideBar = document.querySelector('.sidebar');
const style = getComputedStyle(sideBar);

logo.addEventListener('click', function () {
	if (sideBar.classList.width <= 60 + 'px') {
		sideBar.classList.toggle('sidebar-extend');
	}
});

console.log(style.width);
