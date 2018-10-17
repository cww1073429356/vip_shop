function action(ele,attr,target,cellback) {

    if(typeof ele == "string") {                //转化为DOM元素
        ele = document.querySelector(ele);
    }
    clearInterval(ele.timer);
    var init=parseFloat(getStyleOut(ele,attr));
    if(attr=="opacity"){
        init*=100;
    }
    var speed=5;
    if(init>target){
        speed *=-1;
    }
    ele.timer= setInterval(function () {
        init+=speed;

        if((speed>=0&&init>=target)||(speed<=0&&init<=target)){
            ele.style[attr]=target+"px";
            clearInterval(ele.timer);
            if(typeof cellback== "function"){
                cellback(ele);
            }
        }
        if(attr=="opacity"){
            ele.style[attr]=init/100;
        }else {
            ele.style[attr]=init+"px";
        }

    },20)


}
function getStyleOut(ele, attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele, null)[attr]
    }
    return ele.currentStyle[attr];
}