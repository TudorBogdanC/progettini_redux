import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/actions'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        {isFav ? (
          <HeartFill
            color="#E4C5AF"
            size={16}
            className="mx-2 my-auto"
            onClick={() =>
              dispatch(removeFromFavouriteAction(data.company_name))
            }
          />
        ) : (
          <Heart
            color="#E4C5AF"
            size={16}
            className="mx-2 my-auto"
            onClick={() => dispatch(addToFavouriteAction(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
