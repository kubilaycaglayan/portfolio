const wakeUp = function wakeUp() {
  const url = 'https://reporting-scientists-bykubilay.herokuapp.com/'
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true)
  console.log('sending')
  xhttp.send()

  xhttp.onload = () => {
    console.log('laod successful')
  }
}

window.addEventListener('load', wakeUp)