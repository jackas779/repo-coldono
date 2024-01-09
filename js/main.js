function bluter($var){
    let imgs = document.getElementById($var+'img');
    imgs.classList.remove("blur-sm");
    imgs.classList.remove("border-4");
    imgs.classList.add("border");
}
function blue($var){
    let imgs = document.getElementById($var+'img');
    imgs.classList.add("blur-sm");
    imgs.classList.remove("border");
    imgs.classList.add("border-4");
}