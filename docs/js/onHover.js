// const tableRow = document.getElementById('table__row_test');
// tableRow.addEventListener('click', function (e) {
//     let targetItem = e.target;
//     if (targetItem.closest('.test')) {
//         targetItem.closest('.test').classList.toggle('qwe')
//     }
// });
//
const hoverElem = document.querySelectorAll('.onHoverAddPrompt');
hoverElem.forEach((item) => {
    item.addEventListener('mouseenter', function (e) {
        let targetItem = e.target;
        targetItem.classList.add('qwe')
        console.log(targetItem)
    });
    item.addEventListener('mouseleave', function (e) {
        let targetItem = e.target;
        targetItem.classList.remove('qwe')
        console.log(targetItem)
    });
});
