
function OprationCookie () {

}
OprationCookie.prototype.setCookie = function(name, val, days) {
    var str = name + '=' + val + '; ';
    var s = days * 24 * 60 * 60;
    str += 'max-age=' + s + ';';
    document.cookie = str;

}
OprationCookie.prototype.getCookie = function(name) {
    // "username=xixi; age=22; pass=123456"
    var obj = {};
    var _cookie = document.cookie;
    _cookie = _cookie.split('; ');
    for(var i = 0; i < _cookie.length; i++) {
        var arr = _cookie[i].split('=');
        obj[arr[0]] = arr[1];
    }
    return name ? obj[name] : obj;
}
OprationCookie.prototype.clearCookie = function(name) {
    this.setCookie(name, '', 0);
}