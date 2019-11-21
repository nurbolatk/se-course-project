import React from 'react'

const Alert = props => {
  const { type, msg, additional, close } = props
  return (
    <div className={`alert alert-${type} ${additional}`} role="alert">
      <div className="alert__msg">{msg}</div>
      <button type="button" className="btn btn--icon close" onClick={close}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert
