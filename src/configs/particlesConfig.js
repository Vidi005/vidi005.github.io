const particlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 400
      }
    },
    color: {
      value: '#93c5fd'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 4,
        color: '#93c5fd'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    links: {
      enable: true,
      color: '#93c5fd',
      opacity: 1,
      random: true,
      width: 1
    },
    collisions: {
      enable: true
    }
  },
  retina_detect: false
}

export { particlesConfig }
