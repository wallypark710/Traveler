const searchYouTube = (option, callback) => {
  const server = `https://www.googleapis.com/youtube/v3/search?`;
  const query = `key=${option.key}&part=snippet&type=video&q=${option.q}&maxResults=${option.max}`;

	// const detailUrl = `videos?id=${videoID}&part=contentDetails&key=${option.key}`;

  window.fetch(`${server}${query}`, {
    method : 'GET'
  }) 
  
  .then( (response) => response.json())
  .then( json => { callback(json); })
};

export default searchYouTube;