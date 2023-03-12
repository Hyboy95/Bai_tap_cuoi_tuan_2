
let btn = document.getElementById("btn");
let e_money = document.getElementById("e_money");
btn.addEventListener('click', on_click)

function on_click() {
let e_number = +document.getElementById('e_number').value;
let step_1 = 1678;
let step_2 = 1734;
let step_3 = 2014;
let step_4 = 2536;
let step_5 = 2834;
let step_6 = 2927;
if (Number.isInteger(e_number) && (e_number > 0)) {
    if (e_number > 500) {
    e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_6} VND`;
    } else if (e_number > 400) {
        e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_5} VND`;
        } else if (e_number > 300) {
            e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_4} VND`;
            } else if (e_number > 200) {
                e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_3} VND`;
                } else if (e_number > 100) {
                    e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_2} VND`;
                    } else
                        e_money.innerHTML = `Số tiền điện phải trả là : ${e_number * step_1} VND`;
                        } else
                            e_money.innerHTML = "Không hợp lệ, vui lòng nhập lại";
}
