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

function showHide(elementClick, elementShow){
    var visible=false;
    document.querySelector(elementClick).onclick=function(){
        document.querySelector(".boxListas").classList.contains("show")? document.querySelector(elementShow).classList.remove("show") : document.querySelector(elementShow).classList.add("show")
        visible=true;
    }

}
window.onload=function(){
  //changeDisplayOnDeleteIconHover();
  showHide(".listIconContainer img", ".boxListas")

}
