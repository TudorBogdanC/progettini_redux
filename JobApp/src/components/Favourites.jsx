import {
  Container,
  Row,
  Col,
  ListGroup,

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
        <Col xs={10} className="mx-auto my-3" style={{color:"#E4C5AF"}}>
          <h1>Favourites</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroup.Item key={i} className="mx-0 mt-3 p-3"
              style={{ border: '1px solid #074F57', borderRadius: 150, backgroundColor:"#074F57" }}>
                <HeartFill
                  color="#E4C5AF"
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
