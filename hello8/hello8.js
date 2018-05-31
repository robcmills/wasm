var myWorker = new Worker("worker.js");
myWorker.onerror = function (event) {
  console.log(`Error from Worker: ${event.message}`);
}
myWorker.onmessage = function (event) {
  console.log(`Message from Worker: ${event.data}`);
}

document.querySelector('.mybutton').addEventListener('click', function() {
  myWorker.postMessage(2)
});