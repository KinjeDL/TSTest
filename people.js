"use strict";
// import {Eve} from "../people";
exports.__esModule = true;
function outputEve() {
    document.getElementById("girl-output").innerHTML = exports.people.Eve.describeface();
}
exports.outputEve = outputEve;
outputEve();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.describeface = function () {
        return "A Face";
    };
    return person;
}());
exports.person = person;
exports.people = {
    Eve: new person("Eve")
};
