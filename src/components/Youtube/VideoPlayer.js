import React from 'react';

const VideoPlayer = ({video, playList, handleWatchLater}) => {

	const playListId = playList.map( (ele) => (ele.id.videoId) ).join(',');
	// const url = `https://www.youtube.com/embed/${video.id.videoId}`;
	const url = `https://www.youtube.com/embed/${video.id.videoId}?version=3&loop=1&playlist=${playListId}`

	return (
		<div className="video-player">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
			</div>
			<div className="video-player-details">
				<h3>{video.snippet.title}</h3>
				<div>{video.snippet.description}</div>
			</div>
			<button onClick={ ()=>{ handleWatchLater(video) }}>Watch Later</button>
		</div>
	);
};

export default VideoPlayer;
