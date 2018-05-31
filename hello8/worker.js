importScripts('hello8.em.js')

onmessage = function(event) {
  console.log('Message from main:', event.data)
  const result = Module._myFunction(event.data, 4)
  postMessage('result from worker:' + result)
}