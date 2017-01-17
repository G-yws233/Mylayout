var designWidth=750;
function resize() {
    var Width=document.documentElement.clientWidth;
    var Font=Width/designWidth*100;
    document.documentElement.style.fontSize=Font+"px";
}
resize();
window.onresize=resize;