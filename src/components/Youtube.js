import React from 'react';
import Nav from './Youtube/Nav';
import VideoPlayer from './Youtube/VideoPlayer';
import VideoList from './Youtube/VideoList';
import { fakeData } from './Youtube/__test__/fakeData';
import searchYouTube from './Youtube/searchYouTube';
import {YOUTUBE_API_KEY} from "./Youtube/config/youtube"

class Youtube extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			videos : fakeData,
			currentVideo: null,
			apiKey : YOUTUBE_API_KEY,
			watchLater : []
		}
	}

	clickWatchLaterBtn(targetVideo){

		const storage = this.state.watchLater;
		let cnt = 0;

		for(let i = 0; i < storage.length; i++ ){
			if( storage[i].etag !== targetVideo.etag ){
				cnt++;
			}
		}

		if( cnt === storage.length ){
			let temp = this.state.watchLater;
			temp.push(targetVideo);
			this.setState({
				watchLater : temp
			})	
		}
	}


	onClickVideo(e){
		const newCurrentInVideos = this.state.videos.filter((ele) => { if( ele.etag === e.etag){ return ele; } });
		const newCurrentInWatchLater = this.state.watchLater.filter((ele) => { if(ele.etag === e.etag){ return ele; } })

		const idx = this.state.watchLater.indexOf(newCurrentInVideos[0]||newCurrentInWatchLater[0]);
		this.setState({	
			currentVideo : newCurrentInVideos[0]||newCurrentInWatchLater[0]
		})	

		if( idx !== -1 ){
			let newList = this.state.watchLater.filter( (ele) => (this.state.watchLater.indexOf(ele) !== idx))
			this.setState({
				watchLater : newList
			})
		}

		
	}


	onSearchClick(e) {

		if( e.keyCode === 13 || e.keyCode === undefined ){
			const searchValue = e.target.parentNode.querySelector('.form-control').value;
			const option = {
				q : searchValue,
				max : 5,
				key : this.state.apiKey,
			}
		
			searchYouTube(option, this.searchResultRefrash.bind(this));
		}
	}
	

	searchResultRefrash(result){
		this.setState({
			videos : result.items,
			currentVideo : result.items[0]
		});
	}


	render(){
		return (
			<div>
				<Nav handleBtn={this.onSearchClick.bind(this)}/>
				<div className="row">
					<div className="col-md-7">
						<VideoPlayer video={this.state.currentVideo||this.state.videos[0]} playList={this.state.videos} handleWatchLater={this.clickWatchLaterBtn.bind(this)}/>
					</div>
					<div className="col-md-5">
						<VideoList videos={this.state.videos} handleClick={this.onClickVideo.bind(this)} handleWatchLater={this.clickWatchLaterBtn.bind(this)}  />
				</div>	
				</div>
					<h1>WATHCH LATER</h1>
					<VideoList videos={this.state.watchLater} handleClick={this.onClickVideo.bind(this)} handleWatchLater={this.clickWatchLaterBtn.bind(this)}  />
			</div>
		);
	}
}

export default Youtube;
