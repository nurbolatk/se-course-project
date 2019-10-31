import React from 'react'
import { connect } from 'react-redux'
import TrainRow from './TrainRow'
class RoutesResult extends React.Component {
  render() {
    const { routes } = this.props
    console.log('routes', routes)
    return (
      <div className='container mt-5'>
        <div class='list-group'>
          {routes.map(r => (
            <li class='list-group-item' key={r.RouteId}>
              <TrainRow route={r} />
            </li>
          ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('state', state)
  return {
    routes: state.route.routes,
  }
}

export default connect(mapStateToProps)(RoutesResult)
