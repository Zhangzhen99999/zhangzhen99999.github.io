document.addEventListener("DOMContentLoaded", function(event) {
  let targetImage = document.querySelector("#smart-image");
  targetImage.addEventListener("click", function() { 
    targetImage.classList.remove("small"); 
    alert("点击了图片");
});
 
});
