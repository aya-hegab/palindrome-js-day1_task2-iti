var stringUser = prompt("enter string to check if it's palindrome or not");
var askUser = prompt("case sensitive? enter y/n");
var answer = "";

var reversed = "";
for (i = stringUser.length; i >= 0; i--) {
  reversed += stringUser.charAt(i);
}

if (askUser.toLowerCase() === "n") {
  if (stringUser.toLowerCase() === reversed.toLowerCase()) {
    answer = "palindrome";
  } else {
    answer = "not palindrome";
  }
}

if (askUser.toLowerCase() === "y") {
  if (stringUser === reversed) {
    answer = "palindrome";
  } else {
    answer = "not palindrome";
  }
}

// console.log(answer);
document.writeln("<h1>" + answer + "</h1>");
// console.log(stringUser.toLowerCase());
// console.log(reversed.toLowerCase());
