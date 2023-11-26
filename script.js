const year = document.querySelector("#year")
const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const loader = document.querySelector(".loading")
const animation = document.querySelector(".animation")

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.style.display = "none"
    }, 3000)
})

function updateTime() {
    const currentYear = new Date().getFullYear()
    
    const newYear = new Date(`${currentYear + 1} 00:00:00`)
    
    year.innerText = currentYear + 1

    
    const currentTime = new Date()
    const dist = newYear - currentTime

    const d = Math.floor(dist / 1000 / 60 / 60 / 24)
    const h = Math.floor(dist / 1000 / 60 / 60) % 24
    const m = Math.floor(dist / 1000 / 60) % 60
    const s = Math.floor(dist / 1000) % 60

    days.innerText = (d < 10) ? "0" + d : d
    hours.innerText = (h < 10) ? "0" + h : h
    minutes.innerText = (m < 10) ? "0" + m : m
    seconds.innerText = (s < 10) ? "0" + s : s

    if (d + h + m + s === 0) {
        animation.style.display = "flex"
        year.innerText = currentYear + 1

        setTimeout(() => {
            animation.style.display = "none"
        }, 10000);
    }
}
setInterval(updateTime, 1000)