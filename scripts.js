const key = config.MY_API_Key;

async function getArticles() {
  
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key);

      let articles = response.data.articles;

      let cardTitles = document.getElementsByClassName('article-title');

      for (let i=0; i < articles.length; i++) {
        articleTitles = articles[i].title;
      }


      // for (let i = 0; i < cardTitles.length; i++) {
      //   titles[i].innerHTML = articleTitles;
      // }

      console.log(articleTitles)
    } catch (error) {
      console.error(error);
    }
  }

getArticles()



// Objective: loop through api articles get titles to display in html
