function CheckInput() {
    let items = document.getElementsByTagName('input');
    let labels = document.getElementsByTagName('label');
    let images = document.getElementsByTagName('img');
    if (items[0].checked){
        labels[2].innerHTML = 'B = ';
        labels[3].innerHTML = 'b = ';
        items[2].value = '';
        items[3].value = '';
        images[0].src = 'image2.png';
    }
    else if (items[1].checked) {
        labels[2].innerHTML = 'B = ';
        labels[3].innerHTML = 'a = ';
        items[2].value = '';
        items[3].value = '';
        images[0].src = 'image3.png';
    }
    return 0;
}

function ClearAll() {
    let items = document.getElementsByTagName('input');
    let conc = document.getElementById('conclusion');
    conc.innerHTML = 'Вывод:<br>';
    items[2].value = '';
    items[3].value = '';
    items[2].style = "outline: 0px solid black";
    items[3].style = "outline: 0px solid black";
}

function WriteResult() {
    let labels = document.getElementsByTagName('label');
    let items = document.getElementsByTagName('input');
    let result = 'Вывод:<br>';
    let B = parseFloat(items[2].value);
    if (CheckErrors()) {
        if (labels[3].innerHTML === 'b = '){
            let b = parseFloat(items[3].value);
            //alert('1');
            let HalfB = B/2;
            if (items[4].checked) {
                let radiansB = b * Math.PI/180;
                let Hb = HalfB * Math.tan(radiansB);
                let Ha = B * Math.sin(radiansB);
                result += 'Hb = ' + (Math.round(Hb * 1000) / 1000) + '<br>Ha = ' + (Math.round(Ha * 1000) / 1000) + '<br>';
            }
            if (items[5].checked) {
                let radiansB = b * Math.PI/180;
                let r = HalfB * Math.tan(radiansB/2);
                result += 'r = ' + (Math.round(r * 1000) / 1000) + '<br>';
            }
            if (items[6].checked) {
                let radiansB = b * Math.PI/180;
                let Hb = HalfB * Math.tan(radiansB);
                let A = (HalfB**2 + Hb**2) ** 0.5;
                let Ma = ((A**2 + 2*B**2)**0.5)/2;
                result += 'Mb = ' + (Math.round(Hb * 1000) / 1000) + '<br>Ma = ' + (Math.round(Ma * 1000) / 1000) + '<br>';
            }
        }
        else {
            let a = parseFloat(items[3].value);
            //alert('2');
            let HalfB = B/2;
            let b = (180-a)/2;
            if (items[4].checked) {
                let radiansB = b * Math.PI/180;
                let Hb = HalfB * Math.tan(radiansB);
                let Ha = B * Math.sin(radiansB);
                result += 'Hb = ' + (Math.round(Hb * 1000) / 1000) + '<br>Ha = ' + (Math.round(Ha * 1000) / 1000) + '<br>';
            }
            if (items[5].checked) {
                let radiansB = b * Math.PI/180;
                let r = HalfB + Math.tan(radiansB/2);
                result += 'r = ' + (Math.round(r * 1000) / 1000) + '<br>';
            }
            if (items[6].checked) {
                let radiansB = b * Math.PI/180;
                let Hb = HalfB * Math.tan(radiansB);
                let A = (HalfB**2 + Hb**2) ** 0.5;
                let Ma = ((A**2 + 2*B**2)**0.5)/2;
                result += 'Mb = ' + (Math.round(Hb * 1000) / 1000) + '<br>Ma = ' + (Math.round(Ma * 1000) / 1000) + '<br>';
            }
        }
    }
    let conc = document.getElementById('conclusion');
    conc.innerHTML = result;
    return 0;
}

function CheckErrors() {
    let flag = true;
    let items = document.getElementsByTagName('input');
    if (items[2].value === '' || isNaN(items[2].value) || !isFinite(items[2].value) || (parseFloat(items[2].value) <= 0)) {
        items[2].style = "outline: 1px solid red";
        flag = false;
    }
    else {
        items[2].style = "outline: 0px solid black";
    }
    if (items[3].value === '' || isNaN(items[3].value)  || !isFinite(items[3].value) || (parseFloat(items[3].value) <= 0) || (parseFloat(items[3].value) >= 180)) {
        items[3].style = "outline: 1px solid red";
        flag = false;
    }
    else {
        items[3].style = "outline: 0px solid black";
    }
    if (items[4].checked === false && items[5].checked === false && items[6].checked === false) {
        items[4].style = "outline: 1px solid red";
        items[5].style = "outline: 1px solid red";
        items[6].style = "outline: 1px solid red";
        flag = false;
    }
    else {
        items[4].style = "outline: 0px solid black";
        items[5].style = "outline: 0px solid black";
        items[6].style = "outline: 0px solid black";
    }
    //alert(flag);
    return flag;
}

function Clear(btn) {
    btn.style = "outline: 0px solid black";
    return 0;
}

function ClearCheckbox() {
    let items = document.getElementsByTagName('input');
    items[4].style = "outline: 0px solid black";
    items[5].style = "outline: 0px solid black";
    items[6].style = "outline: 0px solid black";
}

