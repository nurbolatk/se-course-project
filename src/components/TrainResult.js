import React from 'react'

const TrainResult = props => {
  const { train } = props
  return (
    <div className='d-flex train-result'>
      <div className='main-info'>
        <div className='row'>
          <div className='col'>
            <p className='train-id'>54S</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='departure d-flex flex-column justify-content align-items-center'>
              <p className='time'>00:10</p>
              <p className='date'>31 Oct 2019</p>
              <p className='station'>Nur-Sultan Nurly Zhol</p>
            </div>
          </div>
          <div className='col'>
            <p className='duration-label'>Duration</p>
            <p className='duration'>9h 42min</p>
          </div>
          <div className='col'>
            <div className='arrival d-flex flex-column justify-content align-items-center'>
              <p className='time'>12:40</p>
              <p className='date'>1 Nov 2019</p>
              <p className='station'>Almaty 2</p>
            </div>
          </div>
        </div>
      </div>
      <div className='list-group list-group-horizontal'>
        <div className='wagon list-group-item list-group-item-light'>
          <div className='type'>Kupe</div>
          <div className='price'>10 599</div>
          <div className='available-seats'>102 seats</div>
        </div>
        <div className='wagon list-group-item list-group-item-light'>
          <div className='type'>Plackart</div>
          <div className='price'>6 999</div>
          <div className='available-seats'>69 seats</div>
        </div>
      </div>
    </div>
  )
}

export default TrainResult
