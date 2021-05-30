const main = document.getElementById('main')
const eat = document.getElementById('eat')
const drink = document.getElementById('drink')
const visit = document.getElementById('visit')

const images = [
  '/images/sample-1.jpg',
  '/images/sample-2.jpg',
  '/images/sample-3.jpg',
  '/images/sample-4.jpg',
  '/images/sample-5.jpg'
]

const changeImage = (index) => {
  main.style.backgroundImage = 'url(' + images[index] + ')'
}

const startTimer = () => {
  let index = 0
  changeImage(index)
  setInterval(() => {
    index = index + 1 >= images.length ? 0 : index + 1
    changeImage(index)
  }, 5000)
}

startTimer()

eat.parentNode.parentNode.addEventListener('mouseenter', () => {
  eat.innerHTML = 'Comer'
})

eat.parentNode.parentNode.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
})

drink.parentNode.parentNode.addEventListener('mouseenter', () => {
  drink.innerHTML = 'Tomar'
})

drink.parentNode.parentNode.addEventListener('mouseleave', () => {
  drink.innerHTML = 'Drink'
})

visit.parentNode.parentNode.addEventListener('mouseenter', () => {
  visit.innerHTML = 'Visitar'
})

visit.parentNode.parentNode.addEventListener('mouseleave', () => {
  visit.innerHTML = 'Visit'
})
