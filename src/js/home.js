(async function load() {

  async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  const URL_API = 'https://yts.mx/api/v2/list_movies.json?genre=';
  // Async and Await
  const actionList = await getData(URL_API + 'action');
  const terrorList = await getData(URL_API + 'drama');

  console.log('Action List: ', actionList);
  console.log('Terror List: ', terrorList);

})();
