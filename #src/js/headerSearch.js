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
    }
}
search.onblur = function() {
    searchImg.classList.remove('onfocus');
}

searchMAIN.onfocus = function() {
    searchImgMAIN.classList.add('onfocus');
    if (searchMAIN.value !== '') {
        searchClearMAIN.style.display='block';
    }
}
searchMAIN.onblur = function() {
    searchImgMAIN.classList.remove('onfocus');
}
search.addEventListener('change', function () {
    if (search.value == '') {
        searchClear.style.display='none';
    }
})
searchMAIN.addEventListener('change', function () {
    if (searchMAIN.value == '') {
        searchClearMAIN.style.display='none';
    }
})

searchClear.addEventListener('click', function () {
    search.value = '';
    searchClear.style.display='none';
});
searchClearMAIN.addEventListener('click', function () {
    searchMAIN.value = '';
    searchClearMAIN.style.display='none';
});

