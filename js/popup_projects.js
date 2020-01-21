const btn = document.querySelector('.button'), // Главная кнопка
      modal = document.querySelector('.modal'), // Модальное окно
      closeBtn = document.querySelector('.closeBtn'); // Кнопка, закрывающая модальное окно
  
// Открытие модального окна
btn.addEventListener('click', function() {
    modal.style.display = 'flex'; 
})

// Закрытие модального окна при клике на кнопку
closeBtn.addEventListener('click', function () {
	modal.style.display = "none";
})

// Закрытие модального окна при клике на серую область
window.addEventListener('click', function (e) {
	if(e.target == modal) {
   		modal.style.display = "none";
	}  	
})