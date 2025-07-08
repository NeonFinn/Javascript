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
