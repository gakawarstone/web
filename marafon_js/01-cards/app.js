const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active');
    if (slide.classList.contains('active')) {
      changeBackground(slide)
    }
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

function changeBackground(slide) {
  document.querySelector('body').classList.remove('active-slide-mint')
  document.querySelector('body').classList.remove('active-slide-ubuntu')
  document.querySelector('body').classList.remove('active-slide-manjaro')
  document.querySelector('body').classList.remove('active-slide-fedora')
  document.querySelector('body').classList.remove('active-slide-arch')

  if (slide.classList.contains('mint')) {
    document.querySelector('body').classList.add('active-slide-mint')
  }

  if (slide.classList.contains('ubuntu')) {
    document.querySelector('body').classList.add('active-slide-ubuntu')
  }

  if (slide.classList.contains('manjaro')) {
    document.querySelector('body').classList.add('active-slide-manjaro')
  }

  if (slide.classList.contains('fedora')) {
    document.querySelector('body').classList.add('active-slide-fedora')
  }

  if (slide.classList.contains('arch')) {
    document.querySelector('body').classList.add('active-slide-arch')
  }
}
