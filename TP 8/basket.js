"use strict";
window.onload = function () {};
const ajax = new XMLHttpRequest();
/*ajax.onreadystatechange = function() {
    console.log(ajax.readyState + ':' + ajax.status + ':' + ajax.responseText);
 }*/
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
};

function modify_quantity(arrays_values) {
    const quantity = document.getElementById("quantity");
    let total = 0
    for (let i of arrays_values) {
        total += i
    }
    console.log(total)
    quantity.textContent = total;
}