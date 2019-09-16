$(() => {
    //clickHandlers();
    getNews();
    newsTitle();
    newsDescription();
    publishedAt();
    time();
  });

getNews = () => {
    let newsBtn = document.getElementById('newsButton');
    
    newsBtn.addEventListener('click', () => {
    fetch('https://newsapi.org/v2///top-headlines?' + 'country=us&' + 'apiKey=bcd9264c4d4646b5a22d288a9a796d3d')
    .then(response => response.json())
    .then(news => {
      let newsDiv = document.getElementById('newsDiv')
      newsDiv.style.display = 'none'
        showNews(news);
    })
})

  showNews = (news) => {
    let newsArray = news.articles;
    let ulNews = document.getElementById('ulNews');
    newsArray.forEach((story) => {
        newsTitle(story);
    })
  }

  newsTitle = (story) => {
    let liTag = document.createElement('li');
    liTag.setAttribute('class', 'list-group-item');
    // Set Source name
    let anchorTag = document.createElement('a');
    anchorTag.setAttribute('target', '_blank');
    anchorTag.setAttribute('href', story.url);
    anchorTag.setAttribute('class', 'anchor-tag');
     anchorTag.appendChild
     (document.createTextNode(story.source.name));
     liTag.appendChild(anchorTag);
     ulNews.appendChild(liTag);
     newsDescription(story);
  }

  newsDescription = (story) => {
      //console.log(story.publishedAt)
      // Set Title
      let titleDiv = document.createElement('div');
      let titleP = document.createElement('p');
      let titleH = document.createElement('h5');
      titleH.setAttribute('class', 'title-h');
      titleH.appendChild(document.createTextNode(story.title));
      // Insert text
      titleP.appendChild(document.createTextNode(story.description));
      // Insert P tag into div
      titleDiv.appendChild(titleH)
      titleDiv.appendChild(titleP);
      ulNews.appendChild(titleDiv);
      publishedAt(story);
  }

  publishedAt = (story) => {
    let currentDate = new Date();
    let date = new Date(story.publishedAt);
    let milliSeconds = currentDate.getTime() - date.getTime();
    let hours = Math.floor(milliSeconds / 3600000) 
    let timeDiv = document.createElement('div');
    let timeP = document.createElement('p');
    let timeStatement = document.createElement('p');
    timeStatement.setAttribute('class', 'time-statement');
    timeStatement.appendChild(document.createTextNode(" This story broke"))
    timeP.setAttribute('class', 'time-p');
    //timeP.appendChild(document.createTextNode(hours));
      if (milliSeconds < 3600000) {
        timeP.appendChild(document.createTextNode(' '));
        timeP.appendChild(document.createTextNode(" less than an hour ago"));
      } else if (hours === 1){
        timeP.appendChild(document.createTextNode(hours));
        timeP.appendChild(document.createTextNode(" hour ago"));
      } else {
        timeP.appendChild(document.createTextNode(hours));
        timeP.appendChild(document.createTextNode(" hours ago"));
      }
    timeDiv.appendChild(timeStatement)
    timeDiv.appendChild(timeP);
    ulNews.appendChild(timeDiv);
  }
}



  







 


