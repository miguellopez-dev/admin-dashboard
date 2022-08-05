const logo = document.querySelector('.logo__image');
const sideBar = document.querySelector('.sidebar');

logo.addEventListener('click', function () {
	sideBar.classList.toggle('sidebar-extend');
});
