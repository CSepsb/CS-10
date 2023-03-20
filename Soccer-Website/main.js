//   // Soccer Website Quiz
// document.getElementById("button").addEventListener("click", bntclick);
// function bntclick() {
//   // Get search input
//   let name = document.getElementById("1").value.toLowerCase();
//   console.log(name);
//   let script1 = +document.getElementById("scri1").value;
//   let programming1 = +document.getElementById("pro1").value;
//   let programming2 = +document.getElementById("pro2").value;
//   let script2 = +document.getElementById("scri2").value;
//   let projectA = +document.getElementById("proj").value;

//   //Process
//   let percentage =
//     (script1 + programming1 + programming2 + script2 + projectA) / 5.0;

//   //Output
//   document.getElementById("output").innerHTML =
//     Math.round((percentage + Number.EPSILON) * 100) / 100;
// }

let AnwEl = document.getElementById("Answer");

let Answer = 0;

document.getElementById("btn").addEventListener("click", AwnSearch);

function AwnSearch() {
    let input1 = document.getElementById("text1").value

if (input1 === "2007") {
    Answer++;
    document.getElementById("1").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
} else {
    document.getElementById("1").innerHTML = "Incorrect";
}

let input2 = document.getElementById("text2").value
input2 = input2.toLowerCase();

if (input2 === "spy") {
    Answer++;
    document.getElementById("2").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
} else if (input2 === "pyro") {
    document.getElementById("2").innerHTML = "Incorrect";
} else if (input2 ==="scout"){
    document.getElementById("2").innerHTML = "Really Close";
} else if (input2 === "soldier") {
    document.getElementById("2").innerHTML = "Youre almost there";
} else if (input2 === "demoman") {
    document.getElementById("2").innerHTML = "Pretty close";
} else if (input2 === "heavy"){
    document.getElementById("2").innerHTML = "Oh So slose";
} else if (input2 === "engineer") {
    document.getElementById("2").innerHTML = "Barely worng";
} else if (input2 === "medic") {
    document.getElementById("2").innerHTML = "Comne on";
} else if (input2 === "sniper") {
    document.getElementById("2").innerHTML = "Really really close";
} else {
    document.getElementById("2").innerHTML = "Wrong type of class";
}

let input3 = document.getElementById("text3").value
input3 = input3.toLowerCase();

if (input3 === "pyro") {
    Answer++;
    document.getElementById("3").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
} else if (input3 === "spy") {
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 ==="scout"){
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "soldier") {
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "demoman") {
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "heavy"){
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "engineer") {
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "medic") {
    document.getElementById("3").innerHTML = "Incorrect";
} else if (input3 === "sniper") {
    document.getElementById("3").innerHTML= "Incorrect";
} else {
    document.getElementById("3").innerHTML = "that's not a Class";
}


let input4 = document.getElementById("text4").value

if (input4 === "9") {
    Answer++;
    document.getElementById("4").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
} else {
    document.getElementById("4").innerHTML = "Incorrect";
}


if (Answer === "1") {
    document.getElementById("FeedBack").innerHTML = "1/4 25%";
} else if (Answer === "2") {
    document.getElementById("FeedBack").innerHTML = "2/4 50%";
} else if (Answer === "3") {
    document.getElementById("FeedBack").innerHTML = "2/4 75%";
} else if (Answer === "4") {
    document.getElementById("FeedBack").innerHTML = "4/4 100%";
} else if (Answer === "0") {
    document.getElementById("FeedBack").innerHTML = "0/4 0%";
}

}