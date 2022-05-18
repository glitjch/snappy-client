import React from 'react'

const HistoryItem = ({id, input, pitch}) => {

  return (
    <div>
      <p><strong>Id: </strong>{id}</p>
      <p><strong>Info Given: </strong>{input}</p>
      <p><strong>Elevator Pitch: </strong>{pitch}</p>
      <hr/>
    </div>
  )
}

export default HistoryItem