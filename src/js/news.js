$(() => {
    //clickHandlers();
    getNews();
    newsTitle();
    newsDescription();
  });

getNews = () => {
    let newsBtn = document.getElementById('newsButton');
    
    newsBtn.addEventListener('click', () => {
    fetch('https://newsapi.org/v2///top-headlines?' + 'country=us&' + 'apiKey=bcd9264c4d4646b5a22d288a9a796d3d')
    .then(response => response.json())
    .then(news => {
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
      // Set Title
      let titleDiv = document.createElement('div');
      let titleP = document.createElement('p');
      // Insert text
      titleP.appendChild
      (document.createTextNode(story.description));
      // Insert P tag into div
      titleDiv.appendChild(titleP);
      ulNews.appendChild(titleDiv);
  }
}



  







 


