let btn = document.createElement('button');
btn.innerText = 'add';
btn.innerHTML = 'add';
btn.style.background = 'lightblue';
btn.style.margin = '30px';
btn.style.height = '50px';
btn.style.width = '100px';
btn.style.paddingTop = '20px';
document.body.append(btn);

btn.onclick = function () {
    let tnrow = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    let newRow1 = tnrow.insertRow();
    let newCell11 = newRow1.insertCell();
    let newText11 = document.createTextNode('new row11');
    newCell11.appendChild(newText11);

    let newCell12 = newRow1.insertCell();
    let newText12 = document.createTextNode('new row12');
    newCell12.appendChild(newText12);

    let newCell13 = newRow1.insertCell();
    let newText13 = document.createTextNode('new row13');
    newCell13.appendChild(newText13);

    let newRow2 = tnrow.insertRow();
    let newCell2 = newRow2.insertCell();
    let newText2 = document.createTextNode('new row21');
    newCell2.appendChild(newText2);

    let newCell22 = newRow2.insertCell();
    let newText22 = document.createTextNode('new row22');
    newCell22.appendChild(newText22);

    let newCell23 = newRow2.insertCell();
    let newText23 = document.createTextNode('new row23');
    newCell23.appendChild(newText23);

    let newRow3 = tnrow.insertRow();
    let newCell3 = newRow3.insertCell();
    let newText3 = document.createTextNode('new row31');
    newCell3.appendChild(newText3);

    let newCell32 = newRow3.insertCell();
    let newText32 = document.createTextNode('new row32');
    newCell32.appendChild(newText32);

    let newCell33 = newRow3.insertCell();
    let newText33 = document.createTextNode('new row33');
    newCell33.appendChild(newText33);
};

