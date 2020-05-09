import React from 'react'
import { connect } from 'react-redux'
import TrainRow from './TrainRow'
class RoutesResult extends React.Component {
  render() {
    const { routes } = this.props
    return (
      <div className="search-routes">
        {routes.map(r => (
          <div className="card" key={r.RouteId}>
            <TrainRow route={r} />
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    routes: state.route.routes,
  }
}

export default connect(mapStateToProps)(RoutesResult)
