function toggleAll(button, arrow, text) {
  let buttonAll = document.getElementById(button)
  buttonAll.classList.toggle('visible')
  document.getElementById(arrow).classList.toggle('open')
  if(buttonAll.classList.contains('visible')) {
    document.getElementById(text).textContent = 'See less'
  } else {
    document.getElementById(text).textContent = 'See all'
  }
}