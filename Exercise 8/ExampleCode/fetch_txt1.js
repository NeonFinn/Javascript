searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
  e.preventDefault();

  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;

  if (startDate.value !== '') {
    url += `&begin_date=${startDate.value.replaceAll('-', '')}`;
  }

  if (endDate.value !== '') {
    url += `&end_date=${endDate.value.replaceAll('-', '')}`;
  }

 
}