const baseUrl = 'http://localhost:8080/api/v1/'

export const getAllSongs = () => {
  return fetch(baseUrl + 'playlist')
    .then(res => res.json())
    .catch(error => console.error(error));
}

export const postNewSong = (song) => {
  return fetch(baseUrl + 'playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  })
    .then(res => res.json())
    .then(value => console.log(value))
    .catch(error => console.error(error));
}