let cuerpo = document.getElementById("cuerpo")
let btn = document.getElementById("dark-btn")
let moon = document.getElementById("moon")
let sun = document.getElementById("sun")

btn.addEventListener('click', function(){
  cuerpo.classList.toggle('dark')
  moon.classList.toggle('display')
  sun.classList.toggle('display')
})