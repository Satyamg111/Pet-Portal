function searchPet() {
    var searchVal = document.getElementById('search').value;
    console.log(searchVal);
    if(searchVal === 'dog') {
        func(1);
    }
    else if(searchVal === 'cat') {
        func(2);
    }
    else if(searchVal === 'rabbit') {
        func(3);
    }
}



function func(type) {
    console.log(type);
    var id = document.getElementById(type);
    var row = document.querySelector("#row");
    console.log(row);
    document.getElementsByClassName('active')[0].classList.remove('active');
    if(type == 0) {
        var collection = row.querySelectorAll(".hidden");
        removeClass(collection);
        id.classList.add("active");
        return;
    }
    // console.log(collection);
    var dogs = row.querySelectorAll(".dog");
    var cats = row.querySelectorAll(".cat");
    var rabbits = row.querySelectorAll(".rabbit");
    if(type == 1) {
        addClass(cats);
        addClass(rabbits);
        removeClass(dogs);
    }
    else if(type == 2) {
        addClass(dogs);
        addClass(rabbits);
        removeClass(cats)
    }
    else {
        addClass(dogs);
        addClass(cats);
        removeClass(rabbits)
    }
    id.classList.add("active");
}
function addClass(collection) {
    for (var i=0; i<collection.length; i++) {
        collection[i].classList.add('hidden');
    }
}
function removeClass(collection) {
    for (var i=0; i<collection.length; i++) {
        collection[i].classList.remove('hidden');
    }
}