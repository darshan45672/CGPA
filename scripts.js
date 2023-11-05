const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* const main = document.querySelector("main");
  form.classList.add("none");

  const p = document.createElement("p");
  p.innerText = "Congratulations";

  main.appendChild(p);
  console.log("Success"); */
});

const credit3Sub1 = document.getElementById("c3-1");
const credit3Sub2 = document.getElementById("c3-2");

const credit4Sub1 = document.getElementById("c4-1");
const credit4Sub2 = document.getElementById("c4-2");

const credit2Sub1 = document.getElementById("c2-1");

const credit1Sub1 = document.getElementById("c1-1");
const credit1Sub2 = document.getElementById("c1-2");
const credit1Sub3 = document.getElementById("c1-3");
const credit1Sub4 = document.getElementById("c1-4");
const credit1Sub5 = document.getElementById("c1-5");

function getGradePoints(marks) {
  if (marks >= 90) {
    return 10;
  } else if (marks >= 80) {
    return 9;
  } else if (marks >= 70) {
    return 8;
  } else if (marks >= 60) {
    return 7;
  } else if (marks >= 50) {
    return 6;
  } else if (marks >= 45) {
    return 5;
  } else if (marks >= 40) {
    return 4;
  } else {
    return 0;
  }
}

console.log(getGradePoints(40));
