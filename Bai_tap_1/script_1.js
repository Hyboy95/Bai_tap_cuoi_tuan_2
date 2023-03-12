let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.addEventListener('click', on_click)

function on_click() {
    let population = +document.getElementById("population").value;
    let acreage = +document.getElementById("acreage").value;
    let population_density = population / acreage;
    if (Number.isInteger(population) && (population > 0) && (acreage > 0)) {
        if (population_density > 1000) {
            result.innerHTML = 'Khu vực này quá đông đúc'
        } else
            result.innerHTML = 'Khu vực này không quá đông đúc'
    } else
        result.innerHTML = 'Không hợp lệ, vui lòng nhập lại!'
}
