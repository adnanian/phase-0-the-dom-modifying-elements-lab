// Write your code here!

// Test 1
const main = document.getElementById("main");
main.remove();

// Tests 2 - 4
const newHeader = document.createElement("h1");
newHeader.textContent = "Adnan is the champion";
newHeader.id = "victory";
document.body.append(newHeader);
