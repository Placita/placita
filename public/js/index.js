const eat = document.getElementById('eat')
const drink = document.getElementById('drink')
const visit = document.getElementById('visit')

eat.addEventListener('mouseenter', () => {
  setTimeout(() => {
    eat.innerHTML = 'Comer'
  }, 215)
})

eat.addEventListener('mouseleave', () => {
  eat.innerHTML = 'Eat'
})

drink.addEventListener('mouseenter', () => {
  setTimeout(() => {
    drink.innerHTML = 'Tomar'
  }, 215)
})

drink.addEventListener('mouseleave', () => {
  drink.innerHTML = 'Drink'
})

visit.addEventListener('mouseenter', () => {
  setTimeout(() => {
    visit.innerHTML = 'Visitar'
  }, 215)
})

visit.addEventListener('mouseleave', () => {
  visit.innerHTML = 'Visit'
})
