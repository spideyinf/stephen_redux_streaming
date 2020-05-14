import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm';

const StreamCreate = props => {
  const onSubmit = (formValues) => {
    props.createStream(formValues)
  }

  return (
    <>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit}></StreamForm>
    </>
  )
}

export default connect(null, { createStream })(StreamCreate)
