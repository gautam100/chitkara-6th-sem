let fp = require("fs"); //System module
let readLine = require("readline-sync"); //External Module

let content = readLine.question("Enter content to write in file:-");

//Block
function writeInFileSync() {
  console.log("1");
  fp.writeFileSync("./data/sync.txt", content); //This is block statement
  console.log("3");
}
writeInFileSync();

//Non-Block
function writeInFileAsync() {
  console.log("1");
  fp.writeFile("./data/async.txt", content, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully Done!");
      fp.readFile("./data/async.txt", "utf-8", (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Non Block:-", res);
        }
      });
    }
  });
  console.log("3");
}

writeInFileAsync();
