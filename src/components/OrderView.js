import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

const OrderView = props => {
  const { orders, match } = props
  const id = match.params.orderId
  const order = orders.find(ord => ord.id === id)

  return (
    <div className="order-view">
      <div className="card">
        <div className="train-row">
          <div className="main-info">
            <div className="departure">
              <p className="station">Nurly Jol</p>
              <p className="time">23:59</p>
              <p className="date">2019-12-31</p>
            </div>

            <div className="middle-is-missing">
              <p className="train-id">Train #7</p>
              <p className="duration-label text-muted">duration</p>
              <p className="duration">2h 30min</p>
            </div>

            <div className="arrival">
              <p className="station">Nurly Jol</p>
              <p className="time">23:59</p>
              <p className="date">2019-12-31</p>
            </div>
          </div>

          <div className="user-info"></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { orders: state.order.orders }
}

export default withRouter(connect(mapStateToProps)(OrderView))
