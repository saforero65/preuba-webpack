const fs = require("fs");

fs.writeFileSync("./env", `API=https://randomuser.me/api/\n`);
console.log(process.env.API);
