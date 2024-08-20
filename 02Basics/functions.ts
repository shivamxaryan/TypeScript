function addTwo (num: number) {
    // num.toUpperCase();   wont able to use as it is a number
    return num + 2;  // return "hello"  this will be allowed here
}

function addTwo1 (num: number): number {
    return num + 2;
    // return "hello"; this is not allowed now
}

function upperCase(str: string) {
    return str.toUpperCase();
}

let loginUser = (isPaid: boolean = false) => {
    return isPaid ? "paid" : "not paid";
}

addTwo(5);
addTwo1(5);
upperCase("5");
loginUser(true);

const heroes = ["Batman", "Superman", "Spiderman"];

heroes.map((hero): string => {
    return `hero is ${hero}`;
})

function errMsg(err: string): void {
    console.log(err);
}

function errMessage (msg: string): never {
    throw new Error(msg);  // used never because it will never return anything
}

export {};