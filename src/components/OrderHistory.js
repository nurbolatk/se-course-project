import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadOrdersAction } from '../actions/orderActions'
import Spinner from './Spinner'
/*{
  "RouteId": 1,
  "ArrStationId": 1,
  "DepStationId": 2,
  "UserId": 1, 
  "passengers":
    [
      {
        "SSN": 23,
        "bookInfo":{
          "CarriageId": 1,
          "SeatNum": 16,
           "Price": 12500,
          "Adult": 1
        },
        
        "passengerInfo":{
          "Fname": "Edward",
          "Lname": "Snowden",
          "PhoneNum": 1122,
          "Email": "esnow@nu.edu.kz",
          "Birthday": "1981-03-22"
        }
        
      },
      
      {
        "SSN": 152,
        "bookInfo":{
          "CarriageId": 5,
          "SeatNum": 88,
           "Price": 12500,
          "Adult": 1
        },
        
        "passengerInfo":{
          "Fname": "Vasili",
          "Lname": "Zaycev",
          "PhoneNum": 3475,
          "Email": "esnow@nu.edu.kz",
          "Birthday": "1981-03-22"
        }
        
      }
    
    ]
}
[
    {
        "routeId": 1,
        "arriveStationId": 1,
        "departStationId1": 2,
        "carriageId": 1,
        "seatNum": 16,
        "ssn": 23,
        "price": 12500.0,
        "adult": 1,
        "userId": 1
    },
    {
        "routeId": 1,
        "arriveStationId": 1,
        "departStationId1": 2,
        "carriageId": 5,
        "seatNum": 88,
        "ssn": 152,
        "price": 12500.0,
        "adult": 1,
        "userId": 1
    }
]
*/
class OrderHistory extends Component {
  // componentDidMount() {
  //   this.props.loadOrders(this.props.auth.user.UserId, this.props.history)
  // }

  render() {
    const { order } = this.props
    console.log(order)
    //   const orters = [
    //     {
    //        "RouteId":7,
    //        "ArrStationId":2,
    //        "DepStationId":1,
    //        "UserId":6,
    //        "passengers":[
    //           {
    //              "SSN":8000000,
    //              "bookInfo":{
    //                 "CarriageId":9,
    //                 "SeatNum":10,
    //                 "price":7777,
    //                 "Adult":1
    //              },
    //              "passengerInfo":{
    //                 "Fname":"sweet ",
    //                 "Lname":"but psycho",
    //                 "PhoneNum":"7777-777-77-77",
    //                 "Birthday":"1980-12-27"
    //              }
    //           }
    //        ],
    //        "id":"379379647"
    //     },
    //     {
    //        "RouteId":7,
    //        "ArrStationId":2,
    //        "DepStationId":1,
    //        "UserId":6,
    //        "passengers":[
    //           {
    //              "SSN":8000000,
    //              "bookInfo":{
    //                 "CarriageId":10,
    //                 "SeatNum":1,
    //                 "price":7777,
    //                 "Adult":1
    //              },
    //              "passengerInfo":{
    //                 "Fname":"sweet",
    //                 "Lname":"but psycho",
    //                 "PhoneNum":"7777-777-77-77",
    //                 "Birthday":"1980-12-27"
    //              }
    //           }
    //        ],
    //        "id":"379435425"
    //     }
    //  ]
    return (
      <div className="order-history">
        <div className="card">
          <h2 className="card__title">Order history</h2>
          {order.isLoading ? (
            <Spinner />
          ) : (
            <div className="orders-list">
              {order.orders.map(or => {
                return (
                  <div className="orders-list__item">
                    <Link to={`/orders/${or.id}`}>Order #{or.id}</Link>
                  </div>
                )
              })}
            </div>
          )}
          {/* {order.isLoading ? (
            <Spinner />
          ) : (
            <div className="orders-list">
              {order.orders.map(or => {
                return (
                  <div className="orders-list__item">
                    <Link to={`/orders/${or.id}`}>Order #{or.id}</Link>
                  </div>
                )
              })}
            </div>
          )} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    order: state.order,
  }
}

// const mapDispatchToProps = dispatch => ({
//   loadOrders: (UserId, history) => dispatch(loadOrdersAction(UserId, history)),
// })

export default connect(mapStateToProps)(OrderHistory)
