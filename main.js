var Hoge = (function () {
    function Hoge(_piyo, fuga) {
        this._piyo = _piyo;
        this.fuga = fuga;
    }
    Hoge.prototype.getPiyo = function () {
        return this._piyo;
    };
    return Hoge;
})();
