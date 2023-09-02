'use strict'

const btns = document.querySelectorAll(".btn");
const showingContent = document.querySelector(".showingContent")
const cancleBtn = document.getElementById("cancleBtn");
const overly = document.querySelector(".overly");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btnLogic(btn)
    })
})

function btnLogic(btn) {
    showingContent.classList.toggle("hidden")
    overly.classList.toggle("hidden")
    btn.parentElement.classList.toggle("active")
}

cancleBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        if (btn.parentElement.classList.contains("active")) {
            btnLogic(btn)
        }
    })
})
