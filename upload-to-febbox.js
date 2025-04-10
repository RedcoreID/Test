const axios = require('axios');

const uploadData = async () => {
  const data = { /* data to upload */ };
  const response = await axios.post('https://api.febbox.com/upload', data, {
    headers: {
      'Authorization': `Bearer ${process.env.FEBBOX_API_KEY}`
    }
  });
  console.log(response.data);
};

uploadData().catch(console.error);
