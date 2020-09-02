const baseUrl = 'http://localhost:8080/api/v1/'

export const getAllSongs = () => {
  return fetch(baseUrl + 'playlist')
    .then(res => res.json())
    .catch(error => console.error(error));
}