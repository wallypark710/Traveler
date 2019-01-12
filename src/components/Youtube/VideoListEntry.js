import React from 'react';

const VideoListEntry = ({video, onClickVideo,onClickWatchLaterBtn}) => {
	
	return (
		<div>
		<div className="video-list-entry" onClick={()=>{onClickVideo(video)} }>
			<div className="media-left media-middle">
				<img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
			</div>
			<div className="media-body">
				<div className="video-list-entry-title">{video.snippet.title}</div>
				<div className="video-list-entry-detail">{video.snippet.description}</div>

			</div>
		</div>
		<button onClick={ ()=>{ onClickWatchLaterBtn(video) }  }>Watch Later</button>
		</div>
		)
};

export default VideoListEntry;
