
const storm = {
    superPower: "wind",
    print: printSuperPower
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.print()