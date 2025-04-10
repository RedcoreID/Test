const axios = require('axios');

const downloadData = async () => {
  const response = await axios.get('https://api.febbox.com/download', {
    headers: {
      'Authorization': `Bearer ${process.env.FEBBOX_API_KEY}`
    }
  });
  console.log(response.data);
};

downloadData().catch(console.error);
