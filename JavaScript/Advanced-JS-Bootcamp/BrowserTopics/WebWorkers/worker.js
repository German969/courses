//worker

onmessage = event => {
  console.log(event.data)

  postMessage('hey')
}
