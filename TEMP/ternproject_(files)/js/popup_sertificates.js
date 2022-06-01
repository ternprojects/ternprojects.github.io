'use strict';

const btnW = document.querySelector('.buttonW'), // Main button
      modalW = document.querySelector('.modalW'), // Modal window
	    closeBtnW = document.querySelector('.closeBtnW'), // button that closes the modal window
			html = document.querySelector("html")

// Open modal window
btnW.addEventListener('click', function() {
	modalW.style.display = 'flex'; 
	html.classList.add('no-scroll');
  window.addEventListener("keydown", closeW);
})

// Close modal window, when pressing the closing
closeBtnW.addEventListener('click', function () {
  modalW.style.display = 'none';
  html.classList.remove('no-scroll');
})

// Close modal window, when pressing the free space
window.addEventListener('click', function (e) {
	if(e.target === modalW) {
		modalW.style.display = 'none';
		html.classList.remove('no-scroll');	
	}
})

// Close modal window with "Escape"
const closeW = function (e) {
	if (e.target === document.querySelector(".modalW") || e.key === "Escape") {
		modalW.style.display = 'none';
		console.log('click');
		window.removeEventListener("keydown", closeW);
		html.classList.remove('no-scroll');
	}
}
