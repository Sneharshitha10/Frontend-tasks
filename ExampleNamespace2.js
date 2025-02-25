var UserUtil;
(function (UserUtil) {
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    UserUtil.toUpperCase = toUpperCase;
    function toLowerCase(str) {
        return str.toLowerCase();
    }
    UserUtil.toLowerCase = toLowerCase;
})(UserUtil || (UserUtil = {}));
/// <reference path = "namespace.ts" />
console.log(UserUtil.toUpperCase("Sneha"));
