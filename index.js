const { addDays } = require("date-fns");

const result = addDays(new Date(2021, 1, 20), 3);
console.log(result);