"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SubjectList_1 = require("./components/SubjectList");
require("./App.css");
var data_1 = require("./data/data");
function App() {
    return react_1["default"].createElement(SubjectList_1["default"], { subjects: data_1["default"] });
}
exports["default"] = App;

//# sourceMappingURL=App.js.map
