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
                var params = {
                    method: "POST",
                    data: {
                        username: _this.$form.username.value,
                        password: _this.$form.password.value,
                    },
                    success: function (data) {
                        if (data.data.code == 100) {
                            //alert("成功");
                            location.href = "vip_index.html";
                        } else {
                            alert("输入有误");
                        }
                    },
                }
                sendAjax("http://localhost:8888/VIP/php/vip_login.php", params);
            }
        },
    }
}());