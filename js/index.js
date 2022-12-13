var $burger = document.getElementById("burger");
var $menu = document.getElementById ("menu");
var $menux =document.getElementsByClassName(`menux`);
var header=document.querySelector (`header`);


$burger.addEventListener(`click`, function () {
    $menu.classList.toggle(`-translate-x-full`);

})


