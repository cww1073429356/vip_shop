var baiduInput=(function(){
    return {
        init:function(ele){
            this.ele=document.querySelector(ele);
            //console.log(this.ele);
            this.inp=this.ele.querySelector("input");
            this.search_list_ul=this.ele.querySelector(".search-list");
            this.event();

        },
        event(){
            var _this=this;
            this.inp.onfocus=function(){
                _this.judgeInp();
            }
            this.inp.oninput=function(){
                _this.judgeInp();
                _this.getData();
            }
            this.search_list_ul.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName=="LI"){
                    _this.inp.value=target.innerHTML;
                    _this.show_ul();   
                }
            }
        },
        show_ul:function(val){
            val=val||"none";
            this.search_list_ul.style.display=val;
        },
        judgeInp:function(){
            if(this.inp.value==""){
                this.show_ul();
            }else{
                this.show_ul("block");
            }
        },
        getData:function(){
            var params={
                wd:this.inp.value,
                cb:"baiduInput.insertData"
            }
            jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",params);
            
        },
        insertData:function(data){
            //console.log(data)
            data=data.s;
            data=data.map(function(x){
                return "<li>"+x+"</li>";
            })
            //console.log(data);
            this.search_list_ul.innerHTML=data.join("");
        }
    }
}());






var fangda=(function () {
    return{
        init:function () {
            this.$big_image=document.querySelector("#big-image");
            this.$img_box=document.querySelector(".img-box");
            this.$liAll=this.$img_box.querySelectorAll("li");
            //console.log( this.$liAll)
            for(var i=0;i< this.$liAll.length;i++){
                this.$liAll[i].index=i;
               // console.log( this.$liAll[i].index);
            }

            this.$box=document.querySelector(".iphone-box");
            this.$show_image=document.querySelector(".show-image");
            this.$filter=this.$show_image.querySelector(".filter");
            this.$show_big_image=document.querySelector(".show-big-image");

            //console.log(this.$show_big_image);
              this.event();
        },
        event:function () {

            var _this=this;
            this.$show_image.onmouseenter=function () {
                //ev=ev||ev.window;
                //console.log(1);
                _this.$filter.style.display="block";
                _this.$show_big_image.style.display="block";

            }
            this.$show_image.onmouseleave=function () {

                //console.log(2);
                _this.$filter.style.display="none";
                _this.$show_big_image.style.display="none";

            }
            this.$show_image.onmousemove=function (ev) {
                ev=ev||ev.window;
                var x=ev.pageX-_this.$box.offsetLeft-_this.$show_image.offsetLeft-_this.$filter.offsetWidth/2;
                var y=ev.pageY-_this.$box.offsetTop-_this.$show_image.offsetTop-_this.$filter.offsetHeight/2;
                if(x<0){
                    x=0;
                }else if(x>=_this.$show_image.offsetWidth-_this.$filter.offsetWidth){
                    x=_this.$show_image.offsetWidth-_this.$filter.offsetWidth
                }
                if(y<0){
                    y=0;
                }else if(y>=_this.$show_image.offsetHeight-_this.$filter.offsetHeight){
                    y=_this.$show_image.offsetHeight-_this.$filter.offsetHeight
                }
                _this.$filter.style.left=x+"px";
                _this.$filter.style.top=y+"px";
                
                _this.$big_image.style.left=2*(-x)+"px";
                _this.$big_image.style.top=2*(-y)+"px";
            }
            this.$img_box.onclick=function (ev) {
                ev=ev||window.event;
                //console.log(1)
                var target=ev.target||ev.srcElement;
                if(target.parentNode.nodeName == "LI"){
                    //console.log(target.parentNode.index)
                    _this.showImages(target.parentNode.index);

                }
            }

        },
        showImages:function (index) {
            for(var i=0;i< this.$liAll.length;i++){
                this.$liAll[i].className="";
            }
            console.log(index);
            this.$liAll[index].className="active";
            var scr= this.$liAll[index].firstChild.getAttribute("src");
            this.$show_image.querySelector('img').src=scr.replace('thumbnail', 'small');
            this.$show_big_image.querySelector('img').src = scr.replace('thumbnail', 'big');
            console.log(this.$show_big_image.querySelector('img').src);

        },
    }
  }())