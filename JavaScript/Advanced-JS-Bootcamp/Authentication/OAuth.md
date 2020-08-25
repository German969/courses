# OAuth Github example

## Performing an API call

GitHub will make a GET request to /callback as we definr that
```JavaScript
app.get("/callback", (request, response) => {
  const code = request.query.code

  axios.post('https://github.com/login/oauth/access_token', {
    client_id: 'a77d1402dfed7d77c394',
    client_secret: '4155840a87dec8ac6666cf1c1896070db90ef0a5',
    code
  })
  .then((res) => {
    // The token data
    console.log(res.data)

    const params = new URLSearchParams(res.data)
    const access_token = params.get('access_token')
    
    // Get user details
    axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${access_token}`
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  })
  .catch((error) => {
    console.error(error)
  })

  response.end()
})
```

Then you can store the access_token in your database
