let button = document.getElementById('btn_subcribe');
let email = document.getElementById('email');
let emailregex =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailError = document.getElementById("emailError")

let btn_Dismiss = document.getElementById("btn_Dismiss")
let confirmMessage = document.getElementById("confirmMessage")
let formValid = document.getElementById('formValid')
button.addEventListener('click', () => {
    if (email.value.match(emailregex) && !email.value == "") {
        confirmMessage.classList.remove('ViewNone')
        formValid.classList.add('ViewNone')
    }
    if(!email.value.match(emailregex)){
        emailError.innerHTML = "Valid Email Required"
        email.style.borderColor = "hsl(4, 100%, 67%)"
        setInterval(() => {
            emailError.innerHTML = ""
            email.style.borderColor = "hsl(234, 29%, 20%)"
        } , 2000)
    }
    if(email.value == "") {
        emailError.innerHTML = "Must Enter Email "
        email.style.borderColor = "hsl(4, 100%, 67%)"
        setInterval(() => {
            emailError.innerHTML = ""
            email.style.borderColor = "hsl(234, 29%, 20%)"
        } , 2000)
    }
})

btn_Dismiss.addEventListener("click", () => {
    confirmMessage.classList.add('ViewNone')
    formValid.classList.remove('ViewNone')
})


const observe = new IntersectionObserver((observ) => {
    observ.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
const heddinelements = document.querySelectorAll(".heddin");
heddinelements.forEach((el) => observe.observe(el));
