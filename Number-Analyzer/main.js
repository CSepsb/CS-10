// Get input
document.getElementById("search-btn").addEventListener("click", bntClicked);

function bntClicked() {
  // Get search input
  let num = +document.getElementById("search-in").value;
  // Process
  if ((num) => 1 && num % 2 == 0) {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : Positive</p>
    <p>Even / Odd : Even</p>`;
  } else if (num <= -1 && num % 2 == 0) {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : Negative</p>
  <p>Even / Odd : Even</p>`;
  } else if (num == 0) {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : Negative</p>
  <p>Even / Odd : Even</p>`;
  } else {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : ---</p>
    <p>Even / Odd : ---</p>`;
  }
}
