// Acronym Lookup

document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //   Get search input
  let name = document.getElementById("search-in").value.toLowerCase();
  console.log(name);
  // Process & Output
  if (name === "fomo") {
    document.getElementById("output-text").innerHTML = `Fear of Missing Out`;
  } else if (name === "html") {
    document.getElementById(
      "output-text"
    ).innerHTML = `HyperText Markup Language`;
  } else if (name === "css") {
    document.getElementById("output-text").innerHTML = `Cascading Style Sheet`;
  } else if (name === "gui") {
    document.getElementById(
      "output-text"
    ).innerHTML = `Graphical User Interface`;
  } else if (name === "ftp") {
    document.getElementById("output-text").innerHTML = `File Transfer Program`;
  } else {
    document.getElementById(
      "output-text"
    ).innerHTML = `I don't know that acronym.`;
  }
}
