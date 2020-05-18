import React from 'react'
import flv from 'flv.js';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = props => {
  const { fetchStream, match, stream } = props
  const videoRef = React.useRef()

  let player

  React.useEffect(() => {
    fetchStream(match.params.id)
    buildPlayer()
  }, [])

  const buildPlayer = () => {
    if (player || !stream) {
      return
    }

    player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${match.params.id}.flv`
    })
    player.attachMediaElement(videoRef.current)
    player.load()
  }


  if (!stream) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
