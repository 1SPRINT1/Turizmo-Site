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
    var overlay = document.getElementById('overlay');
    var zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = imageElement.src;
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