

export const updateTransition = (selector: String, classAdd: String) => {
  const elem = document.querySelector(selector)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(classAdd)
  }
  //console.info('serviceFunc->updateTransition', { elem, selector, classAdd })
  return elem
}

export const getElementSize = element => {
  const width = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', '')))
  const height = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', '')))
  const x = Math.round(element.getBoundingClientRect().left)
  const y = Math.round(element.getBoundingClientRect().top)
  //console.info('serviceFunc.getElementSize', { x, y, width, height, element })
  return { x, y, width, height }
}

/* Function to override default object properties with new ones
export const getDefaultOveride = (defaultObj = {}, overideObj = {}) => {
  return new Proxy(defaultObj, {
    get: function (defaultObj, propName) {
      if (!overideObj) { return defaultObj[propName] }
      return propName in overideObj ? overideObj[propName] : defaultObj[propName]
    }
  })
}
*/