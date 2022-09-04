import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post({
	displayName,
	username,
	verified,
	text,
	image,
	avatar
}) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Argee Nabas <span className='post__headerSpecial'>
								<VerifiedUser className='post__badge' /> @Argeebomb
							</span>
						</h3>
					</div>
					<div class="post__headerDescription">
						<p>Placeholder tweet text asdlfkjhaslkfhlaskdfhlksjflsdaf
						asdlfkjhaslkfhlaskdfhlksjflsdaf
						</p>
					</div>
				</div>
				<img
					src=""
					alt=""
				/>
				<div class="post__footer">
					<ChatBubbleOutline fontSize='small' />
					<Repeat fontSize='small' />
					<FavoriteBorder fontSize='small' />
					<Publish fontSize='small' />
				</div>
			</div>
		</div>
	)
}

export default Post