function fun(){
    event.preventDefault();
}
window.oncontextmenu=function(){
    alert('Right Click Is Disable');
    return false;
}