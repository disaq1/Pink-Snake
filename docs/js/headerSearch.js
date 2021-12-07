let search = document.querySelector('.searchInput');
let searchMAIN = document.querySelector('.searchInputMAIN');
let searchClear = document.querySelector('.search_clear')
let searchImg = document.querySelector('.searchImg');
let searchImgMAIN = document.querySelector('.searchImgMAIN');
let searchClearMAIN = document.querySelector('.search_clearMAIN');


search.onfocus = function() {
    searchImg.classList.add('onfocus');
    if (search.value !== '') {
        searchClear.style.display='block';
        search.style.padding = '12px 88px 12px 16px';
    } else {
        search.style.padding = '12px 24px 12px 16px';
    }
}
search.onblur = function() {
    searchImg.classList.remove('onfocus');
    if (search.value !== '') {
        searchClear.style.display='block';
        search.style.padding = '12px 88px 12px 16px';
    } else {
        search.style.padding = '12px 24px 12px 16px';
    }
}

searchMAIN.onfocus = function() {
    searchImgMAIN.classList.add('onfocus');
    if (search.value !== '') {
        searchClear.style.display='block';
        search.style.padding = '12px 88px 12px 16px';
    } else {
        search.style.padding = '12px 24px 12px 16px';
    }
}
searchMAIN.onblur = function() {
    searchImgMAIN.classList.remove('onfocus');
    if (search.value !== '') {
        searchClear.style.display='block';
        search.style.padding = '12px 88px 12px 16px';
    } else {
        search.style.padding = '12px 24px 12px 16px';
    }
}
search.addEventListener('change', function () {
    if (search.value == '') {
        searchClear.style.display='none';
    }
    searchClear.style.display='block';
})
searchMAIN.addEventListener('change', function () {
    if (searchMAIN.value == '') {
        searchClearMAIN.style.display='none';
    }
    searchClearMAIN.style.display='block';
})

searchClear.addEventListener('click', function () {
    search.value = '';
    searchClear.style.display='none';
    search.style.padding = '12px 24px 12px 16px';
});
searchClearMAIN.addEventListener('click', function () {
    searchMAIN.value = '';
    searchClearMAIN.style.display='none';
    searchMAIN.style.padding = '12px 24px 12px 16px';
});

