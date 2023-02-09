
// Add event listener to the button to run the order function
document.getElementById("button").addEventListener("click", order);
//Stor order code in a dunction
function order() {
  // Input
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("top1").value;
  let topping2 = document.getElementById("top2").value;
  // Process
  let message = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;
  // Output
  document.getElementById("output").innerHTML = message;
}
