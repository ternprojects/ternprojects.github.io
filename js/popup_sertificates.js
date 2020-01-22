const btnW = document.querySelector('.buttonW'), // Главная кнопка
      modalW = document.querySelector('.modalW'), // Модальное окно
      closeBtnW = document.querySelector('.closeBtnW'); // Кнопка, закрывающая модальное окно
  
// Открытие модального окна
btnW.addEventListener('click', function() {
    modalW.style.display = 'flex'; 
})

// Закрытие модального окна при клике на кнопку
closeBtnW.addEventListener('click', function () {
	modalW.style.display = "none";
})

// Закрытие модального окна при клике на серую область
window.addEventListener('click', function (e) {
	if(e.target == modalW) {
   		modalW.style.display = "none";
	}  	
})