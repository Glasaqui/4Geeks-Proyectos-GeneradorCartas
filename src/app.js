/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let cartas = ["♦", "♥", "♠", "♣"];
  // let cartas = ["diamond", "heart"];
  let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let UnaCarta = cartas[Math.floor(Math.random() * cartas.length)];
  let UnNumero = numeros[Math.floor(Math.random() * numeros.length)];
  let VerCarta = `${UnaCarta}`;
  //let VerCarta = `${UnaCarta} ${UnNumero}`;
  document.querySelector(".top-card").innerHTML = UnaCarta;
  document.querySelector(".numero").innerHTML = UnNumero;
  document.querySelector(".foot-card").innerHTML = UnaCarta;
};
