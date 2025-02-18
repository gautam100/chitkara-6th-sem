let fp = require("fs");
let readline = require("readline-sync");

let content = readline.question("Enter content to write in file");

//Blocking Code
function writeInFile() {
  console.log("Begins");
  fp.writeFileSync("./data/sync.txt", content);
  console.log("Ends");
}

writeInFile();
console.log("---------------------------------");
//Non Blocking Code
function writeInFileAsync() {
  console.log("Begins");
  fp.writeFile("./data/async.txt", content, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Writing Completed!");
      //Reading File - Asynchronously
      fp.readFile("./data/sync.txt", "utf-8", (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
    }
  });
  console.log("Ends");
}

writeInFileAsync();
