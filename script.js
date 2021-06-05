// Con trỏ
// structure, class
// Link list => danh sách liên kết

// TREE
console.log("Xin chào", "Xin Chào");

var htmlTag = document.querySelector("html");

// localstorage, sessionstorage
const isMatchMediaDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const isDarkModeFromStorage = localStorage.getItem("isDarkModeOn");

var isDarkModeOn = isDarkModeFromStorage === "true" || isMatchMediaDarkMode;

/**
 * THIS FUNCTION INIT DARKMODE WHEN SCRIPT LOAD
 */
(function () {
  if (isDarkModeOn) {
    htmlTag.classList.add("dark-mode");
  }
  localStorage.setItem("isDarkModeOn", isDarkModeOn);
})();

function toggleDarkMode() {
  htmlTag.classList.toggle("dark-mode");
  isDarkModeOn = !isDarkModeOn;
  localStorage.setItem("isDarkModeOn", isDarkModeOn);
}

// /**
//  * JAVSCRIPT FUNDAMENTALS
//  */

// // function with name
// function helloWorld() {
//   let hello = "Hello World";
//   console.log(hello);
// }
// helloWorld();

// try {
//   console.log(hello, "is hello world ?");
// } catch (error) {
//   console.error({ error });
// }

// console.log(typeof helloWorld, "KDL Func");

// // anoymous function
// (function () {
//   console.log("anoymous function");
// })();

// // pure function
// let a = 2,
//   b = 3;
// const pi = 3.14;
// const multiple = function (a, b, pi) {
//   return a * b * pi;
// };

// higher order function
// const counting = function (init = 0) {
//   let count = init;

//   return {
//     inc: function () {
//       return (count = count + 1);
//     },
//     get: function () {
//       return count;
//     },
//     count,
//   };
// };

// const btnClick = counting();
// const titleClick = counting(10);
// console.log(typeof btnClick);
// console.log(typeof titleClick);

// console.log(btnClick.count, "count");
// titleClick.inc();
// console.log(titleClick, "TITLE CLICK");
// console.log(titleClick.count, "count");
// console.log(titleClick.get(), "count");

// mutable, immutable
// naming rule, camel case, snake case '_', '-'

// ("number");
// ("string");

// const PI = 3.14;
// const pi = "3.14";

// const intPI = 3;
// const strPI = "3";

// // ==
// // ===

// const objA = {};
// const objB = {};
// objC = objB;
// const newObjA = new Object();
// const newObjB = new Object();

// ANCHOR COMBACK LATE
// const classRoom = {
//   room: "google",
//   dd: "sheet",
//   monhoc: {
//     name: "FE",
//   },
// };

// classRoom.room = "offline room";
// console.log(classRoom, "OBJ CLASS ROOM");

// // pointer
// const classRoomBE = JSON.parse(JSON.stringify(classRoom));
// // const classRoomBE = { ...classRoom };
// classRoomBE.monhoc.name = "BE";

// console.log(classRoom, "classRomFE");
// console.log(classRoomBE, "classRomBE");

// const obj = {
//   name: "Hyu",
//   age: 1,
// };

// const jbo = obj;
// console.log(obj);
// jbo.name = "HHHHHHH";

const header = document.querySelector("header");
const section = document.querySelector("section");
let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

fetch(requestURL, { method: "GET" })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("error:", error));
function populateHeader(obj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + obj["homeTown"] + " // Formed: " + obj["formed"];
  header.appendChild(myPara);
}

const fetchApi = async () => {
  console.log("FETCH");
  const response = await fetch(requestURL, { method: "GET" });
  const json = await response.json();
  console.log(json, "???12301928");
};

fetchApi();

function showHeroes(obj) {
  const heroes = obj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
