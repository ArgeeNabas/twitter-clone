import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from './firebase'

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("")
	const [tweetImage, setTweetImage] = useState("")

	const sendTweet = e => {
		e.preventDefault()

		db.collection('posts').add({
			displayName: 'Argee Nabas',
			username: 'ArgeeNabas',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: ""
		})

		setTweetImage("")
		setTweetMessage("")
	}

	return (
		<div className='tweetBox'>
			<form>
				<div className="tweetBox__input">
					<Avatar src='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png' />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's Happening?"
						type="text"
					/>
				</div>
				<input
					onChange={(e) => setTweetImage(e.target.value)}
					value={tweetImage}
					className='tweetBox__imageInput'
					placeholder="Enter IMG URL"
					type="text"
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div >
	)
}

export default TweetBox