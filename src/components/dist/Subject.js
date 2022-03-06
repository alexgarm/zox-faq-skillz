"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Question_1 = require("./Question");
var Subject = function (_a) {
    var subject = _a.subject;
    var _b, _c;
    return (react_1["default"].createElement("div", null, (_b = subject) === null || _b === void 0 ? void 0 :
        _b.title,
        react_1["default"].createElement("div", null, (_c = subject) === null || _c === void 0 ? void 0 : _c.questions.map(function (question) {
            return react_1["default"].createElement(Question_1["default"], { question: question });
        }))));
};
exports["default"] = Subject;

//# sourceMappingURL=Subject.js.map
