function PageObj(){

}

PageObj.prototype.init = function(){
    $("#nav").slide({ type:"menu", titCell:".nLi", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true,easing:"easeOutCirc"});
    $(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,easing:"easeOutCirc"});
}


$(function(){
    var pageobj = new PageObj();
    pageobj.init();
})
