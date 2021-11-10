document.querySelectorAll('.tabs_triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.tabs_triggers__item').forEach(
            (child) => child.classList.remove('tabs_triggers__item--active')
        );
        document.querySelectorAll('.tabs_content__item').forEach(
            (child) => child.classList.remove('tabs_content__item--active')
        );

        item.classList.add('tabs_triggers__item--active');
        document.getElementById(id).classList.add('tabs_content__item--active');
    })
);