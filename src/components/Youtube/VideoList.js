import React from 'react';
import VideoListEntry from './VideoListEntry';

const VideoList = ({videos, handleClick, handleWatchLater}) => {

    return(
        <div className="video-list media row">
            { videos.map( (ele) => ( <VideoListEntry key={ele.etag} video={ele} onClickVideo={handleClick}  onClickWatchLaterBtn={handleWatchLater}/> ) ) }
        </div>
    );
};



export default VideoList;
