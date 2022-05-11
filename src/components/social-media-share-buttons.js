import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div className='socialmedia'>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={50} round={false}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={50} round={false} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={50} round={false}/>
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={50} round={false} />
          </RedditShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={50} round={false}/>
           </WhatsappShareButton>
        </div>
      )
}

export default ShareButtons