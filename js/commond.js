//进入显示隐藏手机页
var head_nav_replace = (function () {
    return {
        init: function () {
            this.event();
        },
        event: function () {
            var _this = this;
            // .head-nav-ul头部导航展示
            $('.head-nav-ul').on('mouseenter', 'li', function () {
                if($(this).index()<=7){
                    $('.head-nav-show-iphonePro').stop().animate({ height: '300' }, 500);
                    //console.log($(this).index());
                    $('.head-nav-show-iphonePro').html($(this).find('ul').html());
                }else{
                    _this.slidedown();
                }

            });
            $('.head-nav-ul').on('mouseleave', function () {
                _this.slidedown();

            });
            // 家电展示
            // $('.jiadian-nav-ul').on('mouseenter',function(){
            // $('.down-one').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'})
            // })
        },
        slidedown:function(){
            $('.head-nav-show-iphonePro').stop
            ().animate({ height: '0' }, 500);
            $('.head-nav-show-iphonePro').html('');
        }
    }
}());

 // 利用jsonp调用百度框   
 var baiduInput=(function(ele){
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



//封装cookie
// function OprationCookie () {
// }
// OprationCookie.prototype.setCookie = function(name, val, days) {
//     var str = name + '=' + val + '; ';
//     var s = days * 24 * 60 * 60;
//     str += 'max-age=' + s + ';';
//     document.cookie = str;
// }
// OprationCookie.prototype.getCookie = function(name) {
//     // "username=xixi; age=22; pass=123456"
//     var obj = {};
//     var _cookie = document.cookie;
//     _cookie = _cookie.split('; ');
//     for(var i = 0; i < _cookie.length; i++) {
//         var arr = _cookie[i].split('=');
//         obj[arr[0]] = arr[1];
//     }
//     return name ? obj[name] : obj;
// }
// OprationCookie.prototype.clearCookie = function(name) {
//     this.setCookie(name, '', 0);
// }

var get_login_username=(function(){
    return {
        init:function(){
            this.event();
            this.Insertcookie();
            //this.getCookie();
        },
        event:function(){

        },
        getCookie:function(){
            var obj = {};
            var _cookie = document.cookie;
            _cookie = _cookie.split('; ');
            for(var i = 0; i < _cookie.length; i++) {
                var arr = _cookie[i].split('=');
                obj[arr[0]] = arr[1];
            }
            return obj;
        },
        Insertcookie:function(){
            var obj=this.getCookie();
            if("username" in obj){
                $('.nav2-login-username').html('欢迎  '+obj.username);
            }
        },
        
    }
}());