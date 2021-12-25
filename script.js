var btn = document.getElementById("btn");
var img1 = document.getElementById("img");
btn.addEventListener("click", function(){
    
    img1.style.display = "inline";
});
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    img1.style.display = "none";
})