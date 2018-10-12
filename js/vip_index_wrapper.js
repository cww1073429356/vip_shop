
            var getImages=(function () {
                var $ul=document.querySelector("#pic-banner");
                var $uu=document.querySelector(".focus-banner-con-bottom");
                var $ul_li=$ul.getElementsByTagName("li");
                var $uu_li=$uu.getElementsByTagName("li");
                var timer;
    
                return {
                    init:function () {
                        this.index=0;
                        for(var i=0;i<$uu_li.length;i++){
                            $uu_li[i].index=i;
                        }
                        this.event();
                        this.profo();
                        this.autoPlay();
                    },
                    event:function () {
                        var _this=this
                        $uu.onclick=function (ev) {
                            ev=ev||window.event;
                            var target=ev.target||ev.srcElement;
                            if(target.nodeName=="LI"){
                             var num=target.index;
                            //  console.log(target.innerHTML);
                                _this.autoPlay(num);
                                _this.profo(num);
                            }
                        }
                    },
                    autoPlay:function (num=0) {
                        var _this=this;
                        clearInterval(timer)
                          timer=setInterval(function () {
                           num++;
                           if(num>2){
                               num=0;
                           }
                           _this.profo(num);
                        },1000)
                    },
                    profo:function (num=0) {
                        var _this=this
                        //console.log(1)
                        var _this=this;
                        for(var i=0;i<$uu_li.length;i++){
                            $uu_li[i].className="";
                            //$ul_li[i].style.display="none";
                            action($ul_li[i],"opacity",0,fn);
                            function fn(obj) {
                                //console.log(obj)
                                //console.log()
                                obj.style.display="none";
                            }
                        }
                        $uu_li[num].className="active";
                        //$ul_li[num].style.display="";
                        action($ul_li[num],"opacity",100);
    
                           $ul_li[num].style.display="";
    
                    },
    
                }
        }());





   




    //倒计时
    var timeDown=(function(futureDate){
        return {
            init:function(futureDate){
                this.event();
                this.pushDate(futureDate);
                
            },
            event:function(){

            },
            cont:function(futureDate){
                var dateNow=new Date();
                var time1=(futureDate.getTime()-dateNow.getTime())/1000;
                // console.log(time1);
                var sec=Math.floor(time1%60);
                var min=Math.floor((time1/60)%60);
                var hours=Math.floor((time1/60)/60%24);
                //console.log("秒"+sec+"分钟"+min+"小时"+hours);
                var obj={};
                obj.hours=hours;
                obj.min=min;
                obj.sec=sec;
                obj=this.buling(obj);
                return obj
            },
            pushDate:function(futureDate){
                var futureDate=new Date(futureDate);
                var _this=this
                var timer=setInterval(function(){
                    var obj=_this.cont(futureDate);
                    //console.log(obj);
                    $(".time-hours").html(obj.hours);
                    $(".time-min").html(obj.min);
                    $(".time-sec").html(obj.sec);
                },1000)
            },
            buling:function(obj){
                if(obj.hours < 10) {
                    obj.hours  = '0' + obj.hours;
                }
                if(obj.min < 10) {
                    obj.min = '0' + obj.min;
                }
                if(obj.sec < 10) {
                    obj.sec = '0' + obj.sec;
                }
                return obj;
            },
        }
    }());




