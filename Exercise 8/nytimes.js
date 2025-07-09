// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
      
let key = 'Hez2gEGG3hLiKQqeYmLtpx8uG9LgPUVS';
    
let url;

// Grab references to all the DOM elements you'll need to manipulate

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');


const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

searchForm.addEventListener("submit", fetchResults);

nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function fetchResults(e) {
  e.preventDefault();

  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;

  if (startDate.value !== '') {
    url += `&begin_date=${startDate.value.replaceAll('-', '')}`;
  }

  if (endDate.value !== '') {
    url += `&end_date=${endDate.value.replaceAll('-', '')}`;
  }

 fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json));

}

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

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
}




// Event listeners to control the functionality