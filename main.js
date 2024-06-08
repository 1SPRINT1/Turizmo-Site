document.addEventListener('DOMContentLoaded', function () {
    var resorts = document.querySelectorAll('.resort');

    resorts.forEach(function (resort) {
        resort.addEventListener('mouseenter', function () {
            this.style.color = 'white';
            this.style.transform = 'scale(1.07)';
            this.style.zIndex = '1.75';
            this.style.backgroundColor = '#3f51b5';
            this.style.transition = 'background-color 2s ease';
        });

        resort.addEventListener('mouseleave', function () {
            this.style.color = 'black';
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
            this.style.backgroundColor = '';
            this.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        });

    });

});
function zoomImage(imageElement) {
    // Получаем элементы оверлея и увеличенного изображения
    var overlay = document.getElementById('overlay');
    var zoomedImage = document.getElementById('zoomed-image');

    // Устанавливаем атрибут src у увеличенного изображения
    zoomedImage.src = imageElement.src;

    // Показываем оверлей и увеличенное изображение
    //overlay.style.display = 'flex';
    overlay.classList.add('active'); // Добавляем класс для плавного появления и увеличения
}

// Функция для закрытия увеличенного изображения
function closeZoom() {
    var overlay = document.getElementById('overlay');
    //overlay.style.display = 'none'; // Скрываем оверлей
    overlay.classList.remove('active'); // Убираем класс для плавного исчезновения и уменьшения
}

// Добавляем обработчик события загрузки документа
document.addEventListener('DOMContentLoaded', function () {
    // Скрываем оверлей при клике
    var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeZoom);
});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Удаляем класс для сброса анимации
                entry.target.classList.remove('visible');
                // Вызываем reflow/repaint, чтобы сбросить анимацию
                void entry.target.offsetWidth;
                // Добавляем класс снова, чтобы начать анимацию
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Наблюдаем за всеми элементами с классом .block
    const blocks = document.querySelectorAll('.resort');
    blocks.forEach(block => {
        observer.observe(block);
    });
});
function openTab(url) {
    window.location.href = url;
}
function loadPage(pageUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var pageContent = document.getElementById('page-content');
            pageContent.innerHTML = xhr.responseText;
            pageContent.classList.add('active');
        }
    };
    xhr.open('GET', pageUrl, true);
    xhr.send();
}