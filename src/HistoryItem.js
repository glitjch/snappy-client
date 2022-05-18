import React from 'react'

const HistoryItem = ({id, input, pitch}) => {

  return (
    <div>
      <p>{`Id: ${id}`}</p>
      <p>{`Info Given: ${input}`}</p>
      <p>{`Elevator Pitch: ${pitch}`}</p>
      <hr/>
    </div>
  )
}

export default HistoryItem