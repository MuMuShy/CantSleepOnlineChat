/* eslint-env es6 */
/* eslint-disable */
var firebase;
var config = {
  databaseURL: "https://cantsleep-f8b26.firebaseio.com/"
};
firebase.initializeApp(config);

var name = document.getElementById("name").nodeValue;
alert(name);