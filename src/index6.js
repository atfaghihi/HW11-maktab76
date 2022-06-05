function getAdd() {
    let value1 = parseInt(document.getElementById('val1').value);
    let value2 = parseInt(document.getElementById('val2').value);
    let values = value1 + value2;
    let p = document.getElementById('result');
    p.innerText = values;

    if ((values % 2) === 1) {
        p.style.background = 'red';
    } else if ((values % 2) === 0) {
        p.style.background = 'blue';
    }
}


