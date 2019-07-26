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