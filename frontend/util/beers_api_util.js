export const fetchAllBeers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/beers'
    })
  )
}

export const fetchSingleBeer = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/beers/${id}`
    })
  )
}

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
}

export const destroyBeer = beer => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/beers/${beer.id}`
    })
  )
}