"use strict";
// TODO
window.onload = function () {};
const ajax = new XMLHttpRequest();
/*
ajax.onreadystatechange = function() {
    console.log(ajax.readyState + ':' + ajax.status + ':' + ajax.responseText);
 }
ajax.onreadystatechange = function () {
  if (ajax.readyState === 4 && ajax.status === 200) {
    console.log(ajax.responseText);
    const response = JSON.parse(ajax.responseText);
    console.log(typeof response);
    console.log(response);
    const arrays_keys = Object.keys(response);
    const arrays_values = Object.values(response);
    console.log(arrays_keys);
    console.log(arrays_values);
    create_tab(arrays_keys, arrays_values);
    modify_quantity(arrays_values)
    return arrays_keys, arrays_values;
  }
};
//ajax.open("GET", "https://monge.univ-mlv.fr/~demesma/ProgWeb20232024/Notes/progweb/td/src/td08/fruitQuantities.json", true);
ajax.open("GET", "fruitQuantities.json", true);
ajax.send();
*/

function handleAJAX(array_url) {
  for (let i = 0; i < array_url.length; i++) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", array_url[i], true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        handleresponse(ajax.responseText, i);
      }
    };
    ajax.send();
  }
}

function handleresponse(response, index) {
  array_response[index] = JSON.parse(response);
  success += 1;

  if (success === array_url.length) {
    console.log(array_response);
    const arrays_keys = Object.keys(array_response[1]);
    const arrays_values = Object.values(array_response[1]);
    create_tab(arrays_keys, arrays_values);
    modify_quantity(arrays_values);
    modify_price(array_response);
  }
}

function create_tab(arrays_keys, arrays_values) {
  const tab = document.getElementById("basket");
  const tr = document.createElement("tr");
  const fruit = document.createElement("th");
  const quantity = document.createElement("th");

  fruit.textContent = "Fruit";
  quantity.textContent = "Quantity";

  tr.appendChild(fruit);
  tr.appendChild(quantity);
  tab.appendChild(tr);

  for (let i = 0; i < arrays_keys.length; i++) {
    const tr = document.createElement("tr");
    const keys = document.createElement("td");
    const values = document.createElement("td");

    keys.textContent = arrays_keys[i];
    values.textContent = arrays_values[i];

    tr.appendChild(keys);
    tr.appendChild(values);
    tab.appendChild(tr);
  }
}

function modify_quantity(arrays_values) {
  const quantity = document.getElementById("quantity");
  let total = 0;
  for (let i of arrays_values) {
    total += i;
  }
  quantity.textContent = total;
}

function modify_price_old(array_response) {
  const page_price = document.getElementById("price");
  const prices = Object.entries(array_response[0]);
  const fruitQuantities = Object.entries(array_response[1]);
  let total = 0;
  for (let [fruit_quantity, quantity] of fruitQuantities) {
    for (let [fruit_price, price] of prices) {
      if (fruit_quantity === fruit_price) {
        total += quantity * price;
      }
    }
  }
  page_price.textContent = total;
}

function modify_price(array_response) {
  const page_price = document.getElementById("price");
  const prices = array_response[0];
  const fruitQuantities = array_response[1];
  let total = 0;
  for (let fruit in fruitQuantities) {
    if (Object.hasOwn(prices, fruit)) {
      total += fruitQuantities[fruit] * prices[fruit];
    }
  }
  page_price.textContent = total;
}

const array_url = ["prices.json", "fruitQuantities.json"];
let array_response = [];
let success = 0;
handleAJAX(array_url);
