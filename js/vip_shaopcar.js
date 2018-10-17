var vip_shopCar_pay=(function(){
    return {
        init:function(){
            this.event();
            this.getShopList();
        },

        event:function(){
        },
        // 获取数据库手机全部信息的数据
        getShopList:function(){
            var _this=this
            $.getJSON("js/push.shopshow.json", function (data){
                //console.log(data.phone);
                // 把商品的全部数据放到实例中,下次使用
                _this.shopList= data.phone;
                //console.log(_this.shopList);
                // 执行下一个函数;
                _this.getData();
            })   
        },
        // 获取购物车数据
        getData: function () {
            this.carShopList = JSON.parse(localStorage.shopList || '[]');
            this.insertData(this.carShopList);
        },
        // 本地储存对比数据库push到页面中
        insertData:function(data){
            //console.log(data);
            var arr = [];
            for (var i = 0; i < data.length; i++) {               
                var shop;
                for (var j = 0; j < this.shopList.length; j++) {
                    if (this.shopList[j].phone_name == data[i].phone_name) {
                        // 获取商品信息
                        shop = this.shopList[j];
                        break;
                    }
                }
                arr.push(` <div class="page-main-shop-show">
                <div class="row">
                    <div class="col-md-2">
                        <input type="checkbox" name="checked-phone" id="" >
                    </div>
                    <div class="col-md-1">
                        <img src="images/show-shop/thumbnail_1.jpg" alt="">
                    </div>
                    <div class="col-md-4">
                        <p>${shop.phone_name}</p>
                        <span>${data[i].phone_parameter}</span>
                        <span>${data[i].color}</span>
                    </div>
                    <div class="col-md-1"><span>${data[i].phone_price}</span></div>
                    <div class="col-md-1"><div class="count-subtraction count" attr-id=${i} >-</div>
                    <input type="text" value=${data[i].count} class="count-data">
                    <div class="count-add count" attr-id=${i}>+</div></div>
                    <div class="col-md-2"><span class="phone-total" attr-id=${i} >${data[i].phone_price*data[i].count}</span></div>
                    <div class="col-md-1 iphone-del"><button attr-id=${i} class="iphone-del-btn">不想要了</button></div>
                  </div>
            </div>`)
            }
           
            $('.page-main-heade-main')[0].innerHTML = arr.join('');
            vip_shopCar_count.phoneTotal();
        }
    }
}());

var vip_shopCar_count=(function(){
    return{
        init:function(){
            this.event();
            this.resetShopcar();
            
        },
        event:function(){
            var _this=this;
            $('.page-main-heade-main').on('click','.count',function(){
                //console.log($(this).parent());
                //_this.resetData()
                switch($(this).html()){
                    case "+"://console.log('+');
                    var data=$(this).siblings('.count-data').val()-0+1;
                     $(this).siblings('.count-data').val(data);
                    var arr=_this.resetShopcar();
                    var index=$(this)[0].getAttribute('attr-id');  //attr-id为自定义属性;
                    arr[index].count=$(this).siblings('.count-data').val();
                    $(this).siblings('.count-data')[0].value=$(this).siblings('.count-data').val();
                     var sum=arr[index].phone_price*arr[index].count;
                    $('.phone-total')[index].innerHTML=sum;
                    localStorage.shopList = JSON.stringify(arr); 
                    vip_shopCar_count.phoneTotal();
                    break;

                    case "-":
                    var data=$(this).siblings('.count-data').val()-1;
                    $(this).siblings('.count-data').val(data);
                    var arr=_this.resetShopcar();
                    var index=$(this)[0].getAttribute('attr-id');  //attr-id为自定义属性;
                    arr[index].count=$(this).siblings('.count-data').val();
                    $(this).siblings('.count-data')[0].value=$(this).siblings('.count-data').val();
                    var sum=arr[index].phone_price*arr[index].count;
                   $('.phone-total')[index].innerHTML=sum;
                    localStorage.shopList = JSON.stringify(arr);
                    vip_shopCar_count.phoneTotal();
                    break;
                };
            });
            // $('.page-main-heade-main').on('click','input:checkbox',function(){
            //     vip_shopCar_count.phoneTotal();
            // })
            //del弹窗;
            $('.page-main-heade-main').on('click','.iphone-del-btn',function(){
                // console.log(1);
                var _this=this
                $('.page-main-cover').css({display:"block"});
                var index=$(this)[0].getAttribute('attr-id');
                $('.cover-btn-yes').click(function(){
                    var arr=vip_shopCar_count.resetShopcar();
                    arr.splice(index,1);
                    //console.log(arr);
                    localStorage.shopList = JSON.stringify(arr);
                    vip_shopCar_pay.insertData(arr);
                     $('.page-main-cover').css({display:'none'});
                })
                $('.cover-btn-no').click(function(){
                    $('.page-main-cover').css({display:'none'});

                })
                

            })
            //复选框(全选框);
            $('input[name="checked-all-phone"]').change(function(){
                var _this=this;
                $('input[name="checked-phone"]:checkbox').each(function(){
                    $(this).prop('checked',$(_this).is(':checked')?true:false);
                    // vip_shopCar_count.phoneTotal();  
                })
                 vip_shopCar_count.phoneTotal();   
            });
            $('.page-main-shop-show').on('click','input[name="checked-phone"]',function(){
                console.log($(this).index());
            })

        },
         resetShopcar:function(){
            var shopList = localStorage.shopList; 
            shopList = JSON.parse(shopList);
            return shopList;   
         },
         phoneTotal:function(){
            //console.log($('input[name="checked-phone"]:checkbox').length); 
            var sum=0;
            $('input[name="checked-phone"]:checkbox').each(function(){
                if($(this).is(':checked')){
                    //console.log($(this).index('input[name="checked-phone"]:checkbox'));
                    var index=$(this).index('input[name="checked-phone"]:checkbox');
                    // console.log($('.phone-total[attr-id=index]'));
                    
                    sum=sum+($('.phone-total')[index].innerHTML-0);
                    $('.phone-sum').html(sum);
                }
            })

         }
    }
}())






