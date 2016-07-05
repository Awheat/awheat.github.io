!(function(win){
    var init = function(){
        var docEle = win.document.documentElement;
        var winWid = docEle.clientWidth;
        var winHgh = docEle.clientHeight;
        var layout = document.getElementById("layout");
        var def = 80;
        docEle.style.fontSize = winWid >=768 ? def + 'px':winWid / 6.4 + 'px';
        layout.style.minHeight = winHgh + 'px';
    };
    init(),
    win.addEventListener("DOMContentLoaded",init,false),
    win.addEventListener("resize",init,false);
})(window);