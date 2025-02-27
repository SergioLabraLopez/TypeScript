interface IPerson {
    gender: string;
    sayHi: () => void;
}

class Person implements IPerson {
    public gender: string;

    constructor(gender: string) {
        this.gender = gender;
    }

    sayHi(): void {
        console.log("Hello")
    }
}