
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', on_click);

function on_click() {
    let a = +document.getElementById('number_1').value;
    let b = +document.getElementById('number_2').value;
    let c = +document.getElementById('number_3').value;

    if ((a > 0) && (b > 0) && (c > 0)) {
        if ((a + b > c) && (b + c > a) && (a + c > b)) {
            if (a === b) {
                if (a === c) {
                    result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác đều"
                } else {
                    result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác cân"
                }
            } else {
                if (a === c) {
                    result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác cân"
                } else if (b === c) {
                    result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác cân"
                } else {
                    if ((a*a + b*b === c*c) || (a*a + c*c === b*b) || (b*b + c*c === a*a)) {
                        result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác vuông"
                    } else
                        result.innerHTML = "3 cạnh nhập vào là 3 cạnh tam giác thường"
                }
            }
        }
    } else
        result.innerHTML = "Không hợp lệ, vui lòng nhập lại"
}