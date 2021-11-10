document.querySelectorAll('.pagination__link').forEach((item) => 
    item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.pagination__link').forEach(
            (child) => child.classList.remove('hexagon')
        );
        item.classList.add('hexagon');
    })
)