
            var getImages=(function () {
                var $ul=document.querySelector(".focus-banner-con-img");
                var $uu=document.querySelector(".focus-banner-con-bottom");
                var $ul_li=$ul.getElementsByTagName("li");
                var $uu_li=$uu.getElementsByTagName("li");
                var timer;
    
                return {
                    init:function () {
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
                             var num=target.innerHTML-1;
                             //console.log(num);
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