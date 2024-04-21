const input1 = document.getElementById("input1")
const validasi1 = document.getElementById("validasi1")
const regex1 = new RegExp("^([A-Z][a-z]+\\s)*([A-Z][a-z]+)$")
input1.addEventListener("input", () => {
    if(regex1.test(input1.value)){
        validasi1.innerHTML = "Valid";
    }else{
            validasi1.innerHTML = "Invalid";
    }
})

const input2 = document.getElementById("input2")
const validasi2 = document.getElementById("validasi2")
const regex2 = new RegExp("/^(?=.[A-Z])(?=.\d)[A-Z\d]+$/")
input1.addEventListener("input", () => {
    if(regex2.test(input2.value)){
        validasi2.innerHTML = "Valid";
    }else{
            validasi2.innerHTML = "Invalid";
    }
})

const input3 = document.getElementById("input3")
const validasi3 = document.getElementById("validasi3")
const regex3 = new RegExp("^([A-Z][a-z]+\\s)*([A-Z][a-z]+)$")
input1.addEventListener("input", () => {
    if(regex3.test(input1.value)){
        validasi3.innerHTML = "Valid";
    }else{
            validasi3.innerHTML = "Invalid";
    }
})

const input4 = document.getElementById("input4")
const validasi4 = document.getElementById("validasi4")
const regex4 = new RegExp("\b[A-Z][a-z]*")
input1.addEventListener("input", () => {
    if(regex4.test(input1.value)){
        validasi4.innerHTML = "Valid";
    }else{
            validasi4.innerHTML = "Invalid";
    }
})

const input5 = document.getElementById("input5")
const validasi5 = document.getElementById("validasi5")
const regex5 = new RegExp("\b[A-Z][a-z]*")
input1.addEventListener("input", () => {
    if(regex5.test(input1.value)){
        validasi5.innerHTML = "Valid";
    }else{
            validasi5.innerHTML = "Invalid";
    }
})