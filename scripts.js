const key = config.MY_API_Key;

async function getArticles() {
  
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key);

      
      let articlesTitle = response.data.articles[0].title;
      let titles = document.getElementsByClassName('title');

      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = articlesTitle;
      }


      console.log()
    } catch (error) {
      console.error(error);
    }
  }

getArticles()




