window.getViewportWidth = function()

  {
    return Math.max( document.documentElement.clientWidth, window.innerWidth || 0)
  }

window.getViewportHeight = function()

  {
    return Math.max( document.documentElement.clientHeight, window.innerHeight || 0)
  }

window.getViewportDimensions = function()

  {
    return [getViewportWidth, get ViewportHeight]
  }
