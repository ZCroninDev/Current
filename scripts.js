const key = config.MY_API_Key;

async function getArticles() {
  
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key);

      // Gets article from api as html colection
      let articles = response.data.articles;

      // Gets html elements with the class .article-title 
      let cardTitles = Array.from(document.getElementsByClassName('article-title'));
     
      // Converts html collection to an Array
      for (let i = 0; i < articles.length; i++) {
        articleTitles= Array(articles[i].title);
        console.log(articleTitles);
        
        for (let j = 0; j < cardTitles.length; j++) {
          cardTitles[j].innerHTML;
        }

        n.forEach((num1, index) => {
          const num2 = m[index];
          console.log(num1, num2);
        });

      }

      
      

      // loops through each cardTitle to display each article title
      // for (let j = 0; j < cardTitles.length; j++) {
      //   cardTitles[j].innerHTML = articleTitles;
      // }

      console.log(cardTitles);
      

    } catch (error) {
      console.error(error);
    }
  }

getArticles()



// Objective: loop through api articles get titles to display in html
