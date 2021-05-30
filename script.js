// Con trỏ
// structure, class
// Link list => danh sách liên kết

// TREE

console.log("Xin chào");

var htmlTag = document.querySelector("html");
console.log({ document }, "IM DOCUMENT");
console.debug(htmlTag, "HTML TAG");

// localstorage, sessionstorage
const isMatchMediaDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const isDarkModeFromStorage = localStorage.getItem("isDarkModeOn");

var isDarkModeOn = isDarkModeFromStorage || isMatchMediaDarkMode;

console.log(window.matchMedia("(prefers-color-scheme: dark)"));

/**
 * THIS FUNCTION INIT DARKMODE WHEN SCRIPT LOAD
 */
(function () {
  console.debug("Init");
  if (isDarkModeOn) {
    console.log("TOGGLE DARKMODE");
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
