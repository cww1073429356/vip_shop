var vip_login = (function () {
    return {
        init: function () {
            this.$form = document.querySelector("form");
            this.$btn = document.querySelector(".btn1");
            this.$btn_zhu = document.querySelector(".btn2");
            this.event();
        },
        event: function () {
            var _this = this;
            this.$btn.onclick = function () {
                var teste=_this.test_username(_this.$form.username.value,_this.$form.password.value);
                if(teste){
                    var params = {
                        method: "POST",
                        data: {
                            username: _this.$form.username.value,
                            password: _this.$form.password.value,
                        },
                        success: function (data) {
                            if (data.data.code == 100) {
                            
                                // var date=new Date();
                                // date=date.setDate(date.getDate()+1)
                                var src="username"+"="+_this.$form.username.value+"; max-age="+24*60*60;
                                var src2="password"+"="+_this.$form.password.value+"; max-age="+24*60*60;
                                document.cookie=src;
                                document.cookie=src2;
                                //alert("成功");
                                 location.href = "xiaomi-index.html";
                            } else {
                                alert("输入有误");
                            }
                        },
                    }
                    sendAjax("http://localhost:8888/VIP/vip_shop/app/php/vip_login.php", params);
                }else{
                    alert("输入有误");
                }
            }
        },
        test_username:function(username,password){
            var reg=/^[a-z0-9_-]{3,16}$/;
            var reg1=/^[a-z0-9_-]{6,18}$/;
           if(reg.test(username)&&reg1.test(password)){
               return true;
           }else{
               return false;
           }
        }
    }
}());