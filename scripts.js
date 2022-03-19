const key = config.MY_API_Key;

async function getUser() {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=' + key);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

getUser()