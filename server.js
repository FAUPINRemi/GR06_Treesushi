const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
app.get('/external-api', async (req, res) => {
    try {
      const response = await axios.get('https://treesushi-api.000webhostapp.com/API/models/creat.php');
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while fetching data from external API');
    }
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});