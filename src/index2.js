let btn = document.createElement('button');
btn.innerText = 'remove';
btn.innerHTML = 'remove';
btn.style.background = 'lightblue';
btn.style.margin = '30px';
btn.style.height = '50px';
btn.style.width = '100px';
btn.style.paddingBottom = '10px';
document.body.prepend(btn);

btn.onclick = function () {
    const element1 = document.getElementById('r_1');
    element1.parentNode.removeChild(element1);
    const element2 = document.getElementById('r_2');
    element2.parentNode.removeChild(element2);
    const element3 = document.getElementById('r_3');
    element3.parentNode.removeChild(element3);
    const element4 = document.getElementById('r_4');
    element4.parentNode.removeChild(element4);
    const element5 = document.getElementById('r_5');
    element5.parentNode.removeChild(element5);
};
