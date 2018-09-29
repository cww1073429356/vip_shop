var vip_register = (function () {
    return {
      init: function () {
        this.$form = document.querySelector("form");
        this.$btn = document.querySelector(".btn2");
        this.$btn_zhu = document.querySelector(".btn1");
        this.event();
      },
      event: function () {
        var _this = this;
        this.$btn_zhu.onclick = function () {
          var params = {
            method: "POST",
            data: {
              username: _this.$form.username.value,
              password: _this.$form.password.value,
            },
            success: function (data) {
              if (data.data.code == 100 &&data.data.msg ) {
                alert("注册成功");
                //console.log(data.data.msg);
                location.href = "vip_login.html";
              } else {
                alert("用户名存在");
              }
            },
          }
          sendAjax("http://localhost:8888/VIP/php/vip_register.php", params);
        }
      //   this.$btn_zhu.onclick=function(){
      //     location.href = "register_index.html";
      //   }
      },
    }
  }());