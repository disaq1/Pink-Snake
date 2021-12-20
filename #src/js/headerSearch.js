let search = document.querySelector('.searchInput');
let searchMAIN = document.querySelector('.searchInputMAIN');
let searchClear = document.querySelector('.search_clear')
let searchImg = document.querySelector('.searchImg');
let searchImgMAIN = document.querySelector('.searchImgMAIN');
let searchClearMAIN = document.querySelector('.search_clearMAIN');

// Функция, описывающая поведение поиска на десктопном разрешении
search.addEventListener('keyup',  () => {
    if (search.value !== '') {
        searchClear.style.display='block';
        search.style.padding = '12px 88px 12px 16px';
    } else {
        searchClear.style.display='none';
        search.style.padding = '12px 24px 12px 16px';
    }
})

search.onfocus = () => searchImg.classList.add('onfocus');

search.onblur = () => searchImg.classList.remove('onfocus');


// Функция, описывающая поведение поиска на мобильном разрешении
searchMAIN.addEventListener('keyup',  () => {
    if (searchMAIN.value !== '') {
        searchClearMAIN.style.display='block';
        searchMAIN.style.padding = '12px 88px 12px 16px';
    } else {
        searchClearMAIN.style.display='none';
        searchMAIN.style.padding = '12px 24px 12px 16px';
    }
})

searchMAIN.onfocus = () => searchImgMAIN.classList.add('onfocus');

searchMAIN.onblur = () => searchImgMAIN.classList.remove('onfocus');

// Функция, описывающая поведение кнопки "крестик" поиска на десктопном разрешении
searchClear.addEventListener('click', function () {
    search.value = '';
    searchClear.style.display='none';
    search.style.padding = '12px 24px 12px 16px';
});
// Функция, описывающая поведение кнопки "крестик" поиска на мобильном разрешении
searchClearMAIN.addEventListener('click', function () {
    searchMAIN.value = '';
    searchClearMAIN.style.display='none';
    searchMAIN.style.padding = '12px 24px 12px 16px';
});

