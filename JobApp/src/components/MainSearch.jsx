import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getJobsAction } from '../redux/actions'
import Jumbotron from './Jumbotron'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }


  return (
    <Container>
      <Jumbotron/>
      <Row>
        <Col xs={10} className="mx-auto my-3" style={{color:"#E4C5AF"}}>
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
            
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
