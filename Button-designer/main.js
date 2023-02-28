// Button Designer Demo

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let bgHexColor = document.getElementById("color-in").value;
  let btnText = document.getElementById("text-in").value;

  // Convert Hex Color to RGB and Calculate Brightness
  let red = parseInt(bgHexColor.substring(1, 3), 16);
  let green = parseInt(bgHexColor.substring(3, 5), 16);
  let blue = parseInt(bgHexColor.substring(5, 7), 16);
  let brightness = 0.229 * red ** 2 + 0.587 * green ** 2 + 0.112 * blue ** 2;

  // Verify Inputs & Conversions in Console
  console.log(`bgHexColor: ${bgHexColor}`);
  console.log(`btnText: ${btnText}`);
  console.log(`red: ${red}`);
  console.log(`green: ${green}`);
  console.log(`blue: ${blue}`);
  console.log(`brightness: ${brightness}`);
  // Change Text and Color of Background
  document.getElementById("demo-btn").innerHTML = btnText;

  document.getElementById("demo-btn").style.background = bgHexColor;
  // Analyze Brightness and Change Text Color
  if (brightness <= 180) {
    document.getElementById("demo-btn").style.color = "white";
  } else {
    document.getElementById("demo-btn").style.color = "black";
  }
}
