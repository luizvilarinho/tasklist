function changeDisplayOnDeleteIconHover(){
    document.querySelectorAll(".itemContainer").forEach(function(el){
        el.onmouseover=function(){
            el.children[2].style.display="block";
        }
        el.onmouseout=function(){
            el.children[2].style.display="none";
        }
    })
}


window.onload=function(){
  //changeDisplayOnDeleteIconHover();
  
}

;
//# sourceMappingURL=scripts.js.map