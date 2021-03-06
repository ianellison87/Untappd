export const fetchAllBeers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/beers'
    })
  )
};

export const fetchSingleBeer = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/beers/${id}`
    })
  )
};

export const createBeer = (beer) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/beers',
      data:  beer ,
      contentType: false,
      processData: false
    })
  )
};

export const destroyBeer = id => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/beers/${id}`
    })
  )
};

export const fetchAllReviews = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/reviews'
    })
  )
}

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
  );