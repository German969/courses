const channel = new BroadcastChannel('secret-channel');

document.querySelector('iframe').onload = event => {
  channel.postMessage('Hey!');
}
