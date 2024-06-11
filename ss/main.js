document.addEventListener('DOMContentLoaded', function () {
    var resorts = document.querySelectorAll('.resort');

    resorts.forEach(function (resort) {
        resort.addEventListener('mouseenter', function () {
            this.style.color = 'white';
            this.style.transform = 'scale(1.07)';
            this.style.zIndex = '1.75';
            this.style.backgroundColor = '#5bb804';
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
    var zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = imageElement.src;
    var overlay = document.getElementById('overlay');
    overlay.classList.add('active');
}

function closeZoom() {
    var overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeZoom);
});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                entry.target.classList.remove('visible');

                void entry.target.offsetWidth;

                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });


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
// тут опять же строчки именно для index.html 
// для остальных я не оставляю комметарии так как там понятно что для остальных
document.querySelectorAll('.font-button').forEach(button => {
    button.addEventListener('click', () => {
        const fontSize = button.getAttribute('data-font-size');
        document.querySelectorAll('*').forEach(element => {
            // Пропускаем заголовки h1, h2, h3 и элемент с классом 'header'
            if (element.tagName.toLowerCase() === 'h1' || element.tagName.toLowerCase() === 'h2' || element.tagName.toLowerCase() === 'h3' || element.classList.contains('header')) {
                return;
            }
            element.style.fontSize = fontSize + 'px';
        });
    });
});

document.querySelector('.reset-font-button').addEventListener('click', () => {
    document.querySelectorAll('*').forEach(element => {
        // Пропускаем заголовки h1, h2, h3 и элемент с классом 'header'
        if (element.tagName.toLowerCase() === 'h1' || element.tagName.toLowerCase() === 'h2' || element.tagName.toLowerCase() === 'h3' || element.classList.contains('header')) {
            return;
        }
        element.style.fontSize = '';
    });
});

let isHighContrast = false;

document.querySelector('.color-button').addEventListener('click', () => {
    const elementsWithText = document.querySelectorAll(':not(iframe)'); // Исключаем iframe

    elementsWithText.forEach(element => {
        if (element.textContent.trim().length > 0) { // Проверяем, что текст не пустой
            if (isHighContrast) {
                element.classList.remove('high-contrast-colors');
                element.classList.add('normal-colors');
            } else {
                element.classList.remove('normal-colors');
                element.classList.add('high-contrast-colors');
            }
        }
    });

    isHighContrast = !isHighContrast; // Переключаем состояние
});