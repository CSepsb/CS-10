document.getElementById("button").addEventListener("click", bntclick);
function bntclick() {
  let script1 = +document.getElementById("scri1").value;
  let programming1 = +document.getElementById("pro1").value;
  let programming2 = +document.getElementById("pro2").value;
  let script2 = +document.getElementById("scri2").value;
  let projectA = +document.getElementById("proj").value;

  let percentage = (
    (script1 + programming1 + programming2 + script2 + projectA)/5
  );

  document.getElementById("output").innerHTML = Math.round(percentage);
}
