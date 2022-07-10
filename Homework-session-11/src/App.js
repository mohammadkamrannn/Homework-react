import React from 'react';
import UseFetch from './hooks/useFetch';
import { Button, Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { data, loading, error, refetch} = UseFetch("https://swapi.dev/api/films");
  if (loading) return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
  if (error) return <h1>error</h1>

  const List = data?.results.map(item =>
      <ListGroup.Item key={item.episode_id} className='border-0'>
        <Card>
          <Card.Header>{item.release_date}</Card.Header>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.opening_crawl}</Card.Text>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    )
  return (
    <>
      <Container className='p-3'>
            <Button onClick={refetch} variant="primary" className='mb-2'>Refresh</Button>
        <Row>
          <Col>
            <ListGroup variant=''>
                {List}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;