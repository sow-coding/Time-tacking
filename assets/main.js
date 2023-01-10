const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")
const workhours = document.querySelector("#workhours")
const playhours = document.querySelector("#playhours")
const studyhours = document.querySelector("#studyhours")
const exercisehours = document.querySelector("#exercisehours")
const socialhours = document.querySelector("#socialhours")
const selfcarehours = document.querySelector("#selfcarehours")
const studyh1 = document.querySelector("#studyh1")
const exerciseh1 = document.querySelector("#exerciseh1")
const socialh1 = document.querySelector("#socialh1")
const selfcareh1 = document.querySelector("#selfcareh1")
const workbefore = document.querySelector(".workbefore")
const playbefore = document.querySelector(".playbefore")
const studybefore = document.querySelector(".studybefore")
const exercisebefore = document.querySelector(".exercisebefore")
const socialbefore = document.querySelector(".socialbefore")
const selfcarebefore = document.querySelector(".selfcarebefore")

daily.addEventListener("click", function () {
    workhours.innerHTML = "4"
    playhours.innerHTML = "1"
    studyh1.innerHTML = "35min"
    exerciseh1.innerHTML ="35min"
    socialh1.innerHTML = "47min"
    selfcareh1.innerHTML = "28min"
    daily.style.color = "white"
    weekly.style.color = "#7078C9"
    monthly.style.color = "#7078C9"
    workbefore.innerHTML = "Last Week - 6hrs"
    playbefore.innerHTML = "Last Week - 47min"
    studybefore.innerHTML = "Last Week - 1hrs"
    exercisebefore.innerHTML = "Last Week - 58min"
    socialbefore.innerHTML = "Last Week - 43min"
    selfcarebefore.innerHTML = "Last Week - 16min"
})



weekly.addEventListener("click", function () {
    workhours.innerHTML = "32"
    playhours.innerHTML = "10"
    studyh1.innerHTML = "4hrs"
    exerciseh1.innerHTML ="4hrs"
    socialh1.innerHTML = "5hrs"
    selfcareh1.innerHTML = "2hrs"
    daily.style.color = "#7078C9"
    weekly.style.color = "white"
    monthly.style.color = "#7078C9"
    workbefore.innerHTML = "Last Week - 36hrs"
    playbefore.innerHTML = "Last Week - 8hrs"
    studybefore.innerHTML = "Last Week - 7hrs"
    exercisebefore.innerHTML = "Last Week - 5hrs"
    socialbefore.innerHTML = "Last Week - 10hrs"
    selfcarebefore.innerHTML = "Last Week - 2hrs"
})


monthly.addEventListener("click", function () {
    workhours.innerHTML = "224"
    playhours.innerHTML = "70"
    studyh1.innerHTML = "28hrs"
    exerciseh1.innerHTML ="28hrs"
    socialh1.innerHTML = "35hrs"
    selfcareh1.innerHTML = "14hrs"
    daily.style.color = "#7078C9"
    weekly.style.color = "#7078C9"
    monthly.style.color = "white"
    workbefore.innerHTML = "Last Week - 221hrs"
    playbefore.innerHTML = "Last Week - 64hrs"
    studybefore.innerHTML = "Last Week - 30hrs"
    exercisebefore.innerHTML = "Last Week - 16hrs"
    socialbefore.innerHTML = "Last Week - 31hrs"
    selfcarebefore.innerHTML = "Last Week - 11hrs"
})

