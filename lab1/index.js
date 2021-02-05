//requrie the exported class Matt from Matt.js
const Matt = require("./Matt.js");

// set the values that you want the arguments pull information from
let m = new Matt ("Matt", [
    "#030BA6",
    "#020873",
    "#E1F25C"
], [
    "#0D0C0C",
    "#F28907",
    "#2C42BF"
]);

m.speak();