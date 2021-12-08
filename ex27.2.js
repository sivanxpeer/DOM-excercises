const arr1 = ["a", "c", "b", "d"];
const arr2 = ["a", 3, "c", "b", "d"];

function isOnlyStrings(arr) {
    if (arr.every((word) => (typeof (word) === "string"))) {
        return true;
    }
    else return false;
}

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (isOnlyStrings(arr)) {
            resolve(
                arr.map((e) => e.toUpperCase()))
        }
        else {
            reject("array contains a non string element");
        }
    })
}


function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (isOnlyStrings(arr)) {
            resolve(arr.sort());
        }
        else { reject("array contains a non string element"); }
    })
}

makeAllCaps(arr1).then((res) => sortWords(res).then(console.log(res))).catch((err) => { console.log("error:", err) });
makeAllCaps(arr2).then((res) => sortWords(res).then(console.log(res))).catch((err) => { console.log("error:", err) });