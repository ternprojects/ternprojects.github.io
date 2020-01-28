const 	btnW = document.querySelector('.buttonW'); // Main button
		modalW = document.querySelector('.modalW'), // Modal window
		closeBtnW = document.querySelector('.closeBtnW'); // button that closes the modal window
  
// Open modal window
btnW.addEventListener('click', function() {
modalW.style.display = 'flex'; 
})

// Close modal window, when pressing the closing
closeBtnW.addEventListener('click', function () {
modalW.style.display = "none";
})

// Close modal window, when pressing the free space
window.addEventListener('click', function (e) {
	if(e.target == modalW) {
  	modalW.style.display = "none";
	}  	
})
