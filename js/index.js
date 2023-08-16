function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  const image = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    image.setAttribute('src', '../image/Avatar.png')
  } else {
    image.setAttribute('src', '../image/Avatar-light.png')
  }
}
