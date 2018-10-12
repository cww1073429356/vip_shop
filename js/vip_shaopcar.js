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
                        <input type="checkbox" name="" id="">
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
                    <div class="col-md-2"><span>${data[i].phone_price*data[i].count}</span></div>
                    <div class="col-md-1 iphone-del"><button>不想要了</button></div>
                  </div>
            </div>`)
            }
            $('.page-main-heade-main')[0].innerHTML = arr.join('');
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
                    localStorage.shopList = JSON.stringify(arr); 
                    vip_shopCar_pay.insertData(arr);  
                    
                    break;

                    case "-":
                    var data=$(this).siblings('.count-data').val()-1;
                    $(this).siblings('.count-data').val(data);
                    var arr=_this.resetShopcar();
                    var index=$(this)[0].getAttribute('attr-id');  //attr-id为自定义属性;
                    arr[index].count=$(this).siblings('.count-data').val();
                    localStorage.shopList = JSON.stringify(arr);
                    vip_shopCar_pay.insertData(arr); 
                    break;
                }
                ;
            })
        },
         resetShopcar:function(){
            var shopList = localStorage.shopList; 
            shopList = JSON.parse(shopList);
            return shopList;   
         },
    }
}())






