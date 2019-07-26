import {Eve} from "../people";

export function outputEve() {
    document.getElementById("girl-output").innerHTML = Eve.describeface();
}

outputEve();