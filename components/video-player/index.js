import React from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

import './style.scss'

const VideoPlayer = ({ videoId, className }) => (
  <div className={`sk-video-player ${className}`}>
    <Script url={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`} />
    <Script url="https://fast.wistia.com/assets/external/E-v1.js" />
    <div className="wistia_responsive_padding">
      <div className="wistia_responsive_wrapper">
        <div className={`wistia_embed wistia_async_${videoId} seo=false videoFoam=true`}>&nbsp;</div>
      </div>
    </div>
  </div>
)

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  className: PropTypes.string,
}
VideoPlayer.defaultProps = {
  className: '',
}

export default VideoPlayer

