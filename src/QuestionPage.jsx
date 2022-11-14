import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

export default function QuestionPage({ questionNum, subjectName }) {
  return (
    <div>
      <h1
        style={{
          margin: '0.5%',
          fontFamily: '"Gill Sans", sans-serif',
        }}
      >
        {subjectName}
      </h1>
      <Card
        style={{
          margin: '0.6%',
        }}
      >
        <Card.Header as="h5">Question {questionNum}</Card.Header>
        <Card.Body>
          <Card.Title>Why are you gay?</Card.Title>
          <Card.Text>Select one of the following</Card.Text>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Misery sucked my balls dry</ListGroup.Item>
            <ListGroup.Item as="li">
              Mimi said gay people don't have to study
            </ListGroup.Item>
            <ListGroup.Item as="li">Rishi bent for me 😩</ListGroup.Item>
            <ListGroup.Item as="li">Dragsama invited guys to bed</ListGroup.Item>
          </ListGroup>
          <Form
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2%',
            }}
          >
            <Form.Check inline type="radio" label="1" name="q1" />
            <Form.Check inline type="radio" label="2" name="q1" />
            <Form.Check inline type="radio" label="3" name="q1" />
            <Form.Check inline type="radio" label="4" name="q1" />
          </Form>
          <br />
          <Container>
            <Col
              className="g-2"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* <Button size="lg" variant="success">
                Next
              </Button> */}
              <Button style={{ marginLeft: '3%' }} size="lg" variant="danger">
                Mark for review
              </Button>
            </Col>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
