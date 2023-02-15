document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //   Get search input
  let name = document.getElementById("search-in").value.toLowerCase();
  console.log(name);
  // Output
  if (name === "fomo") {
    document.getElementById("tester").innerHTML = `Test`;
  }
}