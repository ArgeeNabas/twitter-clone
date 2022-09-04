import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
	return (
		<div className='tweetBox'>
			<form>
				<div className="tweetBox__input">
					<Avatar src='' />
					<input placeholder="What's Happening?" type="text" />
				</div>
				<input
				className='tweetBox__imageInput'
				placeholder="Enter IMG URL" 
				type="text"
				/>
				<Button className='tweetBox__tweetButton'>Tweet</Button>
			</form>
		</div >
	)
}

export default TweetBox