const key = config.MY_API_Key;

async function getArticles() {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=' + key);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

getArticles()
