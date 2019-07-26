import {Eve,Adam} from "../people/people";

export function outputEve() {
    document.getElementById("girl-output").innerHTML = Eve.describeface();
}

export function outputAdam() {
    document.getElementById("boy-output").innerHTML = Adam.describeface();
}

outputEve();
outputAdam();