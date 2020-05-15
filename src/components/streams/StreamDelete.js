import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = props => {
  const { fetchStream, match, stream, deleteStream } = props
  React.useEffect(() => {
    fetchStream(match.params.id)
  })

  const renderActions = () => {
    return (<>
      <button onClick={() => deleteStream(match.params.id)} className="ui button negative">Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </>)
  }

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure want to delete this stream ?'
    }
    return `Are you sure want to delete this stream with title: ${stream.title}`
  }

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
