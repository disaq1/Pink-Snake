const hoverElem = document.querySelectorAll('.onHoverAddPrompt');
hoverElem.forEach((item) => {
    item.addEventListener('mouseenter', function (e) {
        let targetItem = e.target;
        targetItem.classList.add('qwe')
    });
    item.addEventListener('mouseleave', function (e) {
        let targetItem = e.target;
        targetItem.classList.remove('qwe')
    });
});
