// Get input
document.getElementById("input").addEventListener("click", btnClicked);

function btnClicked() {
  // Get search input
  let num = document.getElementById("input").value;
  // Process
  if (num > 1) {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : works</p>
    <p>Even / Odd : works</p>`;
  } else {
    document.getElementById(
      "TypeNum"
    ).innerHTML = `<p>Positive / Negative / Zero : ---</p>
  <p>Even / Odd : ---</p>`;
  }
}
