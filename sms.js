// const axios = require('axios')

// Using axios
const axios = require('axios');
axios.post('https://textbelt.com/text', {
  phone: '+2348107084565',
  message: 'Hello world',
  key: 'textbelt',
}).then(response => {
  console.log(response.data);
})