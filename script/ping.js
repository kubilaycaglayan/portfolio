let result;
const addresses = [
  'http://reporting-scientists-bykubilay.herokuapp.com/',
  'https://private-events-lotr.herokuapp.com/'
]

const wakeUp = async function wakeUp(address) {
  fetch(address, {
    mode: 'no-cors'
  })
  .then(
    function(response){
      // console.log('Success:', address)
      // console.log(response)
      // result = response;
    }
  )
  .catch(
    function(err){
      // console.log('fail')
      // console.log(err)
    }
  )
}

const startWakeUpProcess = function startWakeUpProcess() {
  addresses.forEach((address) => {
    wakeUp(address)
  });
}

window.addEventListener('load', startWakeUpProcess)