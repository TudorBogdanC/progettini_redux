import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromFavouriteAction } from '../redux/actions'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroup.Item className="itemList" key={i}>
                <HeartFill
                  color="#896978"
                  className="mx-2"
                  onClick={() => dispatch(removeFromFavouriteAction(fav))}
                />
                <Link to={'/' + fav}>{fav}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
