import React from 'react'
import "./Widgets.css"
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed
} from "react-twitter-embed"
import { Search } from '@mui/icons-material'

function Widgets() {
	return (
		<div className='widgets'>
			<div class="widgets__input">
				<Search className='widgets__searchIcon' />
				<input placeholder='Search Twitter' type="text" />
			</div>

			<div class="widgets__widgetContainer">
				<h2>What's happening?</h2>

				<TwitterTweetEmbed tweetId={'1508838714180612100'} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="reactjs"
					options={{ height: 400 }}
				/>

				<TwitterShareButton
					url={"https://twitter.com/reactjs"}
					options={{ text: "#reactjs is awesome", via: "reactjs" }}
				/>
			</div>
		</div>
	)
}

export default Widgets