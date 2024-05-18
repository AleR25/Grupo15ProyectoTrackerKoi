new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 5,
  gap: 20,
  breakpoints: {
      1206: {
          perView: 4
      },
      1024: {
          perView: 4
      },
      860: {
          perView: 3
      },
      768: {
          perView: 2
      }
  }
}).mount()