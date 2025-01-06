// Плавная прокрутка
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем id целевого раздела
        const targetElement = document.querySelector(targetId); // Находим этот раздел

        // Плавная прокрутка к разделу
        targetElement.scrollIntoView({
            behavior: 'smooth', // Плавное поведение
            block: 'start' // Начало раздела
        });
    });
});
