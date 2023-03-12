
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', on_click)
function on_click() {
    let Y_Boy = +document.getElementById('Y_Boy').value;
    let Y_Girl = +document.getElementById('Y_Girl').value;
    if (Number.isInteger(Y_Boy) && Y_Boy > 0 && Y_Boy < 2023) {
        if (Number.isInteger(Y_Girl) && Y_Girl > 0 && Y_Girl < 2023) {
            if ((Y_Boy - Y_Girl) % 12 === 0) {
                result.innerHTML = "Bình thường";
            } else if ((Y_Boy - Y_Girl) % 4 === 0) {
                result.innerHTML = "Hợp nhau (Tam hợp)";
            } else if((Y_Boy - Y_Girl) % 3 === 0) {
                result.innerHTML = "Không hợp nhau (Tứ hành xung)";
            } else
                result.innerHTML = "Bình thường";
        } else
            result.innerHTML = "Không hợp lệ, vui lòng nhập lại";
    } else
        result.innerHTML = "Không hợp lệ, vui lòng nhập lại";
}