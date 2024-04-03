var header = document.getElementById('header');

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
	fadeOutOnScroll(header);
}

function fadeOutOnScroll(header) {
	console.log(window.scrollY)
}