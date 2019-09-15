$(() => {
    //clickHandlers();
    getNews();
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
    // Create li Tag
    
    newsArray.forEach((story) => {
        let liTag = document.createElement('li');
        let anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', '#');
         anchorTag.appendChild
         (document.createTextNode(story.source.name));
         liTag.appendChild(anchorTag);
         ulNews.appendChild(liTag);
        
        
    })
}

}

  



//var url = 'https://newsapi.org/v2///top-headlines?' +
//          'country=us&' +
//          'apiKey=bcd9264c4d4646b5a22//d288a9a796d3d';
//var req = new Request(url);
//fetch(req)
//    .then(function(response) {
//        console.log(response.json());
//    })


 


