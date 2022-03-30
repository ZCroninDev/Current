const key = config.MY_API_Key;

async function getArticles() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key);
      let articlesTitle = response.data.articles[0].title;

      console.log(articlesTitle)
    } catch (error) {
      console.error(error);
    }
  }

getArticles()




