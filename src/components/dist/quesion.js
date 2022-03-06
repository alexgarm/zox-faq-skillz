"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Question = function (_a) {
    var question = _a.question;
    var _b, _c;
    var _d = react_1.useState(false), opened = _d[0], setOpened = _d[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { className: "open_btn", onClick: function () { return setOpened(!opened); } }, (_b = question) === null || _b === void 0 ? void 0 : _b.title),
        opened && (react_1["default"].createElement("div", { className: "answer_section" }, (_c = question) === null || _c === void 0 ? void 0 : _c.answer))));
};
exports["default"] = Question;

//# sourceMappingURL=quesion.js.map
