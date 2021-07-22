import React, { createContext } from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import firebase from 'firebase';
import "firebase/database";



//7903112
//OwS8Cm5E7l0yf2uYNpTG
//15a5f62915a5f62915a5f6299a15dd61a1115a515a5f629754b4a0d53820af1f76a1670

// Init VK  Mini App
bridge.send("VKWebAppInit");
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

// Initialize Firebase
// var firebaseConfig = ;
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAaCTI89WAScNMKK-5pzGmt5qcnF50U6aM",
  authDomain: "users-f9e77.firebaseapp.com",
  projectId: "users-f9e77",
  storageBucket: "users-f9e77.appspot.com",
  messagingSenderId: "730375624460",
  appId: "1:730375624460:web:e07c070bceaf98b8091b29",
  measurementId: "G-HR2BM8955Q"
});
firebase.analytics();
export default firebase


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    
    <Provider store={store}>
      <App/> 
    </Provider>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});