import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  render() {
    return (
      <div className="order-history">
        <div className="card">
          <h2 className="card__title">Order history</h2>
          <div className="orders_list">
            <Link to="/order/1">Order #3301931</Link>
            <Link to="/order/2">Order #3302312</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderHistory
