import React from 'react'
import TrainResult from './TrainResult'

const RoutesResult = () => {
  return (
    <div className='container mt-5'>
      <div class='list-group'>
        <a href='#' class='list-group-item list-group-item-action'>
          <TrainResult />
        </a>
        <a href='#' class='list-group-item list-group-item-action'>
          Dapibus ac facilisis in
        </a>
        <a href='#' class='list-group-item list-group-item-action'>
          Morbi leo risus
        </a>
        <a href='#' class='list-group-item list-group-item-action'>
          Porta ac consectetur ac
        </a>
        <a
          href='#'
          class='list-group-item list-group-item-action disabled'
          tabindex='-1'
          aria-disabled='true'>
          Vestibulum at eros
        </a>
      </div>
    </div>
  )
}

export default RoutesResult
