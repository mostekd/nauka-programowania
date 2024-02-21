document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.content');
    let currentIndex = 0;

    function showContent(index) {
        contents.forEach((content, i) => {
            content.style.display = i === index ? 'block' : 'none';
        });
    }

    showContent(currentIndex);

    document.getElementById('arrow-left').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + contents.length) % contents.length;
        showContent(currentIndex);
    });

    document.getElementById('arrow-right').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % contents.length;
        showContent(currentIndex);
    });
});
