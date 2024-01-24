export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_JOBS = 'GET_JOBS'

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
})

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
})

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
