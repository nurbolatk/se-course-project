import { SAVE_SEATS } from '.'

export const saveSeatsAction = (seats, history) => {
  return dispatch => {
    dispatch({
      type: SAVE_SEATS,
      data: seats,
    })
    history.push('/make-order')
  }
}
