$(() => {
  //clickHandlers();
  getSports();
  showSports();
  sportsTitle();
});


getSports = () => {
  let sportsBtn = document.getElementById('newsButton');
   sportsBtn.addEventListener('click', () => {
  
    fetch('https://newsapi.org/v2///top-headlines?' +  'country=us&' + 'category=sports&' + 'apiKey=bcd9264c4d4646b5a22d288a9a796d3d')
    .then(response => response.json())
    .then(sports => {
      showSports(sports);
    })
  })

  showSports = (sports) => {
    let newsArray = sports.articles;
    let ulNews = document.getElementById('ulNews');
    newsArray.forEach((sports) => {
        sportsTitle(sports);
    })
  }

  sportsTitle = (sports) => {
    let liTag = document.createElement('li');
    liTag.setAttribute('class', 'list-group-item');
    // Set Source name
    let anchorTag = document.createElement('a');
    anchorTag.setAttribute('target', '_blank');
    anchorTag.setAttribute('href', sports.url);
    anchorTag.setAttribute('class', 'anchor-tag');
     anchorTag.appendChild
     (document.createTextNode(sports.source.name));
     liTag.appendChild(anchorTag);
     ulNews.appendChild(liTag);
     newsDescription(sports);
  }
  newsDescription = (sports) => {
    // Set Title
    let titleDiv = document.createElement('div');
    let titleP = document.createElement('p');
    // Insert text
    titleP.appendChild
    (document.createTextNode(sports.description));
    // Insert P tag into div
    titleDiv.appendChild(titleP);
    ulNews.appendChild(titleDiv);
 }
}



