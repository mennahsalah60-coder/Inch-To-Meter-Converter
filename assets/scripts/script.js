const input = document.querySelector("input")
const calc = document.querySelector(".calc")
const result = document.querySelector(".result")

// 1m = 39.3701 i
calc.addEventListener("click", function () {
    const number = input.value

    const sum = number / 39.3701
    result.textContent = sum

    console.log(sum)
    
})

