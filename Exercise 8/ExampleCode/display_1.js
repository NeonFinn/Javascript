function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  if (articles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No results found.';
    section.appendChild(para);
  } else {
    for (let i = 0; i < articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para = document.createElement('p');

      link.href = articles[i].web_url;
      link.textContent = articles[i].headline.main;
      heading.appendChild(link);
      article.appendChild(heading);

      if (articles[i].multimedia.length > 0) {
        img.src = `https://www.nytimes.com/${articles[i].multimedia[0].url}`;
        img.alt = articles[i].headline.main;
        article.appendChild(img);
      }

      para.textContent = articles[i].snippet;
      article.appendChild(para);
      article.classList.add('clearfix');

      section.appendChild(article);
    }

    nav.style.display = 'block';
  }
}