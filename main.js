const apiKey = '9oZY6e/0Vv9urUNj4zBWyg==2cx1EhTsWZlDoMXe'
const result = document.querySelector('.result')
const inputChanged = function(){ 
  const country = document.getElementById('country')
}
const options = {
  method: "GET",
  headers: {
      "X-Api-Key":apiKey,
  },
}
const apiURL = 'https://api.api-ninjas.com/v1/country?name='

form.addEventListener("submit", getCapital)
async function getCapital(){

  const response = await fetch(apiURL+country.value, options)
  const data = await response.json()
  var capital = data[0].capital
  document.getElementById('hide').style.display="block"
  hide.innerHTML=`${capital}`
}