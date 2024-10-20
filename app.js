document.write(`<h1>Find & Replace Game</h1>`);

var para = prompt("Please Enter Your Paragraph");
var paragraph = para.toLowerCase;
document.write(para + "<Br /><Br />");
var choose = +prompt(
  "Please type 1 to just find Words type 2 for find & replace the words"
);

if (choose === 1) {
  var find = prompt("Please enter a word to find");
  var updatedPara = para.toLowerCase().replaceAll(find, ` <u>${find}</u>`);

  document.write(updatedPara);
} else if (choose === 2) {
  find = prompt("Please enter a word to find");
  var replace = prompt("Please enter a word you want to replace");
  var updatedPara = para.toLowerCase().replaceAll(find, replace);
  document.write(updatedPara);
}
