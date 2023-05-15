// Grade calculator
document.getElementById("button").addEventListener("click", bntclick);
function bntclick() {
  //Input
  let script1 = +document.getElementById("scri1").value;
  let programming1 = +document.getElementById("pro1").value;
  let programming2 = +document.getElementById("pro2").value;
  let script2 = +document.getElementById("scri2").value;
  let projectA = +document.getElementById("proj").value;

  //Process
  let percentage =
    (script1 + programming1 + programming2 + script2 + projectA) / 5.0;

  //Output
  document.getElementById("output").innerHTML =
    Math.round((percentage + Number.EPSILON) * 100) / 100;
  document.getElementById("title").innerHTML = `<a id="title" href="index.html">
  Reset </a>`;
}
