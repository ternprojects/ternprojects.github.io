const btn = document.querySelector('.button'), // Main button
      modal = document.querySelector('.modal'), // Modal window
	    closeBtn = document.querySelector('.closeBtn'); // Button for close modal window
      html = document.querySelector('html');

// Open window-modal
btn.addEventListener('click', function () {	
	modal.style.display = "flex"; 	
	html.classList.add('no-scroll');
  window.addEventListener("keydown", close);
})

// Close modal wibdow with click on the cross
  closeBtn.addEventListener('click', function () {
	  modal.style.display = "none";
	  html.classList.remove('no-scroll');
})

// Close modal wibdow with click on the grey area
window.addEventListener('click', function (e) {
	if (e.target === modal) {
		modal.style.display = "none";
		html.classList.remove('no-scroll');	
	}
})

// Close modal window with "Escape"
const close = function (e) {
	if (e.target === document.querySelector(".modal") || e.key === "Escape") {
		modal.style.display = "none";		
		console.log('click');
		window.removeEventListener("keydown", close);
		html.classList.remove('no-scroll');
	}
}




