let fp = require("fs"); //System module
let readLine = require("readline-sync"); //External module

let content = readLine.question("Enter content to write in file:-");

//Block Code or synchronous
function writeInFile() {
  console.log("start writing");
  fp.writeFileSync("./data/sync.txt", content);
  console.log("End");
}
writeInFile();

//Non Blocking Code or Asynchronous
function writeInFileAsync() {
  console.log("start writing");
  fp.writeFile("./data/async.txt", content, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully done!");
      //Reading from file in callback function
      fp.readFile("./data/async.txt", "utf-8", (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
    }
  });
  console.log("End");
}
writeInFileAsync();
