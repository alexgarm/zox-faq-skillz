"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Subject_1 = require("./Subject");
var SubjectList = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement("div", null, data.map(function (item) {
        return react_1["default"].createElement(Subject_1["default"], { subject: item });
    })));
};
exports["default"] = SubjectList;

//# sourceMappingURL=SubjectList.js.map
