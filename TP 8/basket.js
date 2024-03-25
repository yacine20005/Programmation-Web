"use strict";
// TODO
window.onload = function() {
 };
const ajax = new XMLHttpRequest();
/*ajax.onreadystatechange = function() {
    console.log(ajax.readyState + ':' + ajax.status + ':' + ajax.responseText);
 }*/
ajax.onreadystatechange = function() {
    if (ajax.readyState === 4 && ajax.status === 200) {
        //console.log(ajax.responseText);
        const response = JSON.parse(ajax.responseText);
        console.log(typeof response);
        console.log(response);
        const arrays_keys = Object.keys(response);
        console.log(arrays_keys)
        return arrays_keys;
    }
}
//ajax.open("GET", "https://monge.univ-mlv.fr/~demesma/ProgWeb20232024/Notes/progweb/td/src/td08/fruitQuantities.json", true);
ajax.open("GET", "fruitQuantities.json", true)
ajax.send();

const create_tab = function(arrays_keys) {
    const tab = document.getElementById('basket');
    const tr = document.createElement('tr');

    const th1 = document.createElement('th');
    th1.textContent = 'Fruit';
    tr.appendChild(th1);

    const th2 = document.createElement('th');
    th2.textContent = 'Quantity';
    tr.appendChild(th2);

    tab.appendChild(tr);

    for (let i = 0; i < arrays_keys.length; i++) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = arrays_keys[i];
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.textContent = arrays_keys[i];
        tr.appendChild(td2);
        
        tab.appendChild(tr);
    }
}

create_tab(['orange', 'banana', 'pear'])