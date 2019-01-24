import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvTdg-fnE01cQ5R7_VKgKwpqwr5508i00",
  authDomain: "catch-of-the-day-practic-73dd8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-practic-73dd8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
