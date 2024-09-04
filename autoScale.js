function debounce(fn, delay) {
  let timer = null
  return function() {
    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function autoScale(selector, options) {
  const el = document.querySelector(selector)
  const {width, height} = options

  el.style.transformOrigin = 'top left'
  el.style.transition = 'transform 0.5s'

  function init() {
    const scaleX = innerWidth / width;
    const scaleY = innerHeight / height;
    const scale = Math.min(scaleX, scaleY)

    const left = (innerWidth - width * scale) / 2
    const top = (innerHeight - height * scale) / 2
    el.style.transform = 'translate(' +left + 'px' + ',' + top + 'px' + ')' + 'scale('+ scale + ')'
  }

  init()

  addEventListener('resize', debounce(init, 200))
  
}
