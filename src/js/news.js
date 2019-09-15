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
        console.log(news.articles[0].source.name)
    })
})

}

  



//var url = 'https://newsapi.org/v2///top-headlines?' +
//          'country=us&' +
//          'apiKey=bcd9264c4d4646b5a22//d288a9a796d3d';
//var req = new Request(url);
//fetch(req)
//    .then(function(response) {
//        console.log(response.json());
//    })


 


