export const login = user => {

  return(
    $.ajax({
      method: 'Post',
      url: 'api/session',
      data: {user}
    })
  )
}