// import {Eve} from "../people";

export function outputEve() {
    document.getElementById("girl-output").innerHTML = people.Eve.describeface();
}

outputEve();

export class person {
    name: string;
    
    describeface() {
        return "A Face";
    }
    
    constructor(name: string) {
        this.name=name;
    }

}

export const people = {
    Eve: new person("Eve")
}