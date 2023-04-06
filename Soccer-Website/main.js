let Results = document.getElementById("results");
let Answer = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value;

  if (input1 === "90") {
    Answer++;
    document.getElementById("1").innerHTML = "Correct";
  } else {
    document.getElementById("1").innerHTML = "Incorrect";
  }

  let input2 = document.getElementById("input2").value;

  if (input2 === "2") {
    Answer++;
    document.getElementById("2").innerHTML = "Correct";
  } else {
    document.getElementById("2").innerHTML = "Incorrect";
  }

  let input3 = document.getElementById("input3").value;

  if (input3 === "22") {
    Answer++;
    document.getElementById("3").innerHTML = "Correct";
  } else {
    document.getElementById("3").innerHTML = "Incorrect";
  }

  let input4 = document.getElementById("input4").value;
  input4 = input4.toLowerCase();

  if (input4 === "england") {
    Answer++;
    document.getElementById("4").innerHTML = "Correct";
  } else {
    document.getElementById("4").innerHTML = "Incorrect";
  }

  let input5 = document.getElementById("input5").value;
  input5 = input5.toLowerCase();

  if (input5 === "with a kickoff") {
    Answer++;
    document.getElementById("5").innerHTML = "Correct";
  } else {
    document.getElementById("5").innerHTML = "Incorrect";
  }

  if (Answer === 1) {
    Results.innerHTML = "1/5 20%";
  } else if (Answer === 2) {
    Results.innerHTML = "2/5 40%";
  } else if (Answer === 3) {
    Results.innerHTML = "3/5 60%";
  } else if (Answer === 4) {
    Results.innerHTML = "4/5 80%";
  } else if (Answer === 5) {
    Results.innerHTML = "5/5 100%";
  } else if (Answer === 0) {
    Results.innerHTML = "0/5 0%";
  }
}

// ------

let AnwEl = document.getElementById("Answer");

let Answer = 0;

document.getElementById("btn").addEventListener("click", AwnSearch);

function AwnSearch() {
  //Question 1
  let input1 = document.getElementById("text1").value;

  if (input1 === "2007") {
    Answer++;
    document.getElementById("1").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
  } else {
    document.getElementById("1").innerHTML = "Incorrect";
  }
  //Question 2
  let input2 = document.getElementById("text2").value;
  input2 = input2.toLowerCase();

  if (input2 === "spy") {
    Answer++;
    document.getElementById("2").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
  } else if (input2 !== "2") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "scout") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "soldier") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "demoman") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "heavy") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "engineer") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "medic") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else if (input2 === "sniper") {
    document.getElementById("2").innerHTML = "Incorrect";
  } else {
    document.getElementById("2").innerHTML = "that's not a Class";
  }
  //Question 3
  let input3 = document.getElementById("text3").value;
  input3 = input3.toLowerCase();

  if (input3 === "pyro") {
    Answer++;
    document.getElementById("3").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
  } else if (input3 === "spy") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "scout") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "soldier") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "demoman") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "heavy") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "engineer") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "medic") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else if (input3 === "sniper") {
    document.getElementById("3").innerHTML = "Incorrect";
  } else {
    document.getElementById("3").innerHTML = "that's not a Class";
  }

  //Question 4
  let input4 = document.getElementById("text4").value;

  if (input4 === "9") {
    Answer++;
    document.getElementById("4").innerHTML = "Correct";
    AnwEl.innerHTML = Answer;
  } else {
    document.getElementById("4").innerHTML = "Incorrect";
  }
  let input = document.getElementById("text5").value;

  if (input4 === "Mitochondria") {
    answer++;
    document.getElementById();
  }

  if (Answer === "1") {
    document.getElementById("FeedBack").innerHTML = "Oh no";
  } else if (Answer === "2") {
    document.getElementById("FeedBack").innerHTML = "Good try";
  } else if (Answer === "3") {
    document.getElementById("FeedBack").innerHTML = "your doing good Lad";
  } else if (Answer === "4") {
    document.getElementById("FeedBack").innerHTML = "You Got them all";
  } else if (Answer === "0") {
    document.getElementById("FeedBack").innerHTML = "Study Harder";
  }
  if (Answer === "7845") {
    document.getElementById("Feedback").innerHTML = "Better luck next time";
  }
  if (Answer === "7845") {
    document.getElementById("Feedback").innerHTML = "Damn bru";
  } else if (Answer === "huhuhu") {
    document.getElementById("Feedback").innerHTML = "lolololololol";
  }
  let input5 = document.getElementById("text6").value;

  if (input5 === "Lysosomes") {
    answer++;
    document.getElementById();
  }
}


// ----
