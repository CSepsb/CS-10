// Pizza order

// Add event listener to the button to run the order function
document.getElementById("button").addEventListener("click", order);
//Stor order code in a dunction
function order() {
  // Input
  let size = prompt(`Enter size of pizza (small, medium, large)`);
  let topping1 = prompt(`Enter first topping`);
  let topping2 = prompt(`Enter first topping`);
  // Process
  let message = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;
  // Output
  alert(message);
}
