const navItems = document.querySelector('.nav__items')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navItems.classList.toggle('nav__items--active')

	navBtnBars.classList.remove('black-bars-color')

	if (!navItems.classList.contains('nav__items--active')) {
		handleObserver()
	} else if (navItems.classList.contains('nav__items--active')) {
		navBtnBars.classList.remove('black-bars-color')
	}

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav__items--active')
		})
	})
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav__items--animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
