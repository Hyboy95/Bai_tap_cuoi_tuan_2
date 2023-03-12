
let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.addEventListener('click', on_click)

function on_click() {
    let a = document.getElementById('number_1').value;
    let b = document.getElementById('number_2').value;
    let c = document.getElementById('number_3').value;
    if (a === ''|| b === '' || c === '') {
        result.innerHTML = "Chưa đủ dữ kiện, vui lòng nhập lại";
    } else {
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
            if (a !== 0) {
                let delta = b * b - 4 * a * c;
                if (delta > 0) {
                    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                    result.innerHTML = `Phương trình có 2 nghiệm phân biệt là x1 = ${x1} và x2 = ${x2}`;
                } else if (delta === 0) {
                    let x = (-b) / (2 * a);
                    result.innerHTML = `Phương trình có nghiệm kép là x = ${x}`;
                } else {
                    result.innerHTML = "Phương trình vô nghiệm";
                }
            } else if (b !== 0) {
                let x = (-c) / b;
                result.innerHTML = `Phương trình là phương trình bậc nhất có 1 nghiệm x = ${x}`;
            } else if (c !== 0) {
                result.innerHTML = "Phương trình vô nghiệm";
            } else {
                result.innerHTML = "Phương trình có vô số nghiệm";
            }
        } else
            result.innerHTML = "Vui lòng nhập các hệ số a,b,c là số nguyên";
    }
}

