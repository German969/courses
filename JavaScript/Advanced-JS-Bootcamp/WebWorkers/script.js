const worker = new Worker('worker.js')

worker.postMessage('hello')

worker.onmessage = event => {
  console.log(event.data)
}
