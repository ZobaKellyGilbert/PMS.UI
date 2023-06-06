function search()
{
let input = document.querySelector(".search_input");
let btn = document.querySelector(".search_icon");
let parent = document.querySelector(".parent");


btn.addEventListener("click", () => {
parent.classList.toggle("active");
input.focus();

});
}



