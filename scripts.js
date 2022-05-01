const key = config.MY_API_Key;

async function getArticles() {
  
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key);

      // Gets article from api as html colection
      let articles = response.data.articles;

      
     
      // Converts html collection to an Array
      for (let i = 0; i < articles.length; i++) {
        articleTitles= Array(articles[i].title);
      }

      // Gets html elements with the class .article-title 
      let cardTitles = document.getElementsByClassName('article-title');

      // loops through each cardTitle to display each article title
      for (let i = 0; i < cardTitles.length; i++) {
        cardTitles[i].innerHTML = articleTitles;
      }

      console.log(cardTitles)

    } catch (error) {
      console.error(error);
    }
  }

getArticles()



// Objective: loop through api articles get titles to display in html
