(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotifi = handleMessageNotifi;

function handleMessageNotifi(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaSIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQUEsTUFDaENDLE9BRGdDLEdBQ1ZELElBRFUsQ0FDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFFBRHVCLEdBQ1ZGLElBRFUsQ0FDdkJFLFFBRHVCO0FBRXhDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUYsUUFBZixlQUE0QkQsT0FBNUI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWZpKGRhdGEpIHtcclxuICBjb25zdCB7IG1lc3NhZ2UsIG5pY2tuYW1lIH0gPSBkYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xyXG59XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

co;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTY4ODI5ODMuanMiXSwibmFtZXMiOlsiY28iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUFBLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWZpIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5cclxuY287XHJcbiJdfQ==
},{"./chat":1}]},{},[2])