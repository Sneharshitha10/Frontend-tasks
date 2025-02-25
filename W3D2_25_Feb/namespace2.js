var UserUtil;
(function (UserUtil) {
    var Parent = /** @class */ (function () {
        function Parent() {
            this.name = "";
        }
        Parent.prototype.setName = function (name) {
            this.name = name;
        };
        return Parent;
    }());
    UserUtil.Parent = Parent;
})(UserUtil || (UserUtil = {}));
