const btn = document.querySelector('.button'), // Main button
      modal = document.querySelector('.modal'), // Modal window
      closeBtn = document.querySelector('.closeBtn'); // Button for close modal window

// Open window-modal
btn.addEventListener('click', function () {
    modal.style.display = "flex"; 
})

// Close modal wibdow with click on the cross
closeBtn.addEventListener('click', function () {
	modal.style.display = "none";
})

// Close modal wibdow with click on the grey area
window.addEventListener('click', function (e) {
	if(e.target === modal) {
  	modal.style.display = "none";
	}
})

// Close modal window with "Escape"
/* const close = (e) => {
	if (e.target === document.querySelector(".modal") || e.key === "Escape") {
		modal.style.display = "none";	
		console.log('click');
	}
};

document.addEventListener("keydown", close); */

