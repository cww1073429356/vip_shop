
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




  var push_data=(function(){
    return{
        init:function(){
            //console.log($('.shop-car-btn-aaa'))
            // this.shop_car_btn=document.querySelector('.shop-car-btn');
            // console.log(this.shop_car_btn);
            this.event();
        },
        event:function(){
            var _this=this;
            //点击飘红
            $(".iphone-parameter").on("click", "li", function () {
                $('.phone-zuizhong-pri').html($(this).has('span').find('span').html())
                $(this).addClass('check').siblings().removeClass('check');
            });

            $.getJSON("js/push.shopshow.json", function (data) {  
               $('.pric-title').html(data.phone[0].phone_name);
                //  渲染配置
                data_parameter = data.phone[0].phone_parameter;
                //console.log(data);
                $(".iphone-parameter-ram>li>p").eq(0).html(data_parameter.phone_ram1);
                $(".iphone-parameter-ram>li>p").eq(1).html(data_parameter.phone_ram2);
                $(".iphone-parameter-ram>li>p").eq(2).html(data_parameter.phone_ram3);
                $(".iphone-parameter-ram>li>p").eq(3).html(data_parameter.phone_ram4);
    
                //渲染价格
                data_price = data.phone[0].phone_price;
                //console.log(data_price);
                $(".iphone-parameter-ram>li>span").eq(0).html(data_price.phone_price1);
                $(".iphone-parameter-ram>li>span").eq(1).html(data_price.phone_price2);
                $(".iphone-parameter-ram>li>span").eq(2).html(data_price.phone_price3);
                $(".iphone-parameter-ram>li>span").eq(3).html(data_price.phone_price4);
    

                data_color = data.phone[0].phone_color;
                //console.log(data_color);
                $(".iphone-parameter-Color>li>.iphone-parameter-color").eq(0).css({background:data_color.phone_color1})
                $(".iphone-parameter-Color>li>.iphone-parameter-color").eq(1).css({background:data_color.phone_color2})
                $(".iphone-parameter-Color>li>.iphone-parameter-color").eq(2).css({background:data_color.phone_color3})
                $(".iphone-parameter-Color>li>.iphone-parameter-color").eq(3).css({background:data_color.phone_color4})
                $(".iphone-parameter-Color>li>p").eq(0).html(data_color.phone_color1);
                $(".iphone-parameter-Color>li>p").eq(1).html(data_color.phone_color2);
                $(".iphone-parameter-Color>li>p").eq(2).html(data_color.phone_color3);
                $(".iphone-parameter-Color>li>p").eq(3).html(data_color.phone_color4);
     
            });
            // 点击加入购物车
            $('.shop-car-btn-aaa').on('click',function(){
                //console.log(1);
                _this.addCar();
            });
            //事件监听  addEventListener
            // this.shop_car_btn.addEventListener('click',function(){
            //     console.log(1);
            //     _this.addCar();
            // },false);

              

        },
        addCar:function(){
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            // console.log($(".iphone-parameter-Color>.check>p").html())
            // console.log($(".iphone-parameter-ram>.check>p").html())
            // console.log($(".iphone-parameter-Color>.check>p").html())

            // shopList = [{phone_name: "iphone10", count: 1,phone_parameter:"32gb+5gb"color:red},];
            //console.log( $('.pric-title').html())
            for(var j = 0; j < shopList.length; j++) {
                // 判断手机的名字 配置 颜色是否已经存在
                if(shopList[j].phone_name == $('.pric-title').html()&&shopList[j].phone_parameter==$(".iphone-parameter-ram>.check>p").html()&&shopList[j].color==$(".iphone-parameter-Color>.check>p").html()) {
                    // 商品已经存在
                    shopList[j].count = Number(shopList[j].count) + Number($('.shop-car-btn-aaa-inp-aaa').val());
                    break;
                }
            }
            if(j === shopList.length) {
                // 商品不存在, 添加一条新数据
                shopList.push({phone_name: $('.pric-title').html(), count: $('.shop-car-btn-aaa-inp-aaa').val(),phone_parameter:$('.iphone-parameter-ram>.check>p').html(),color:$(".iphone-parameter-Color>.check>p").html(),phone_price:$('.iphone-parameter-ram>.check>span').html()});    
            }
            var sum=0;
            for(var i = 0; i < shopList.length; i++) {
                sum+=Number(shopList[i].count);
            }
            console.log(sum)
            //console.log($(".head-shop-car-count-aaa").text())
            $(".head-shop-car-count-aaa").text(sum)
            
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
  }())