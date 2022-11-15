import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import ReactMarkdown from 'react-markdown';

const data = ['Prathamesh ko period kyu hua'];

export default function QuestionPage({ questionNum, subjectName, options }) {
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
          <Card.Title>{data[questionNum - 1]}</Card.Title>
          <Card.Text>Select one of the following</Card.Text>
          <ListGroup as="ol">
            {options.map((op, index) => (
              <ListGroup.Item as="li">
                <ReactMarkdown>{op}</ReactMarkdown>
                <h6>Option {index + 1}</h6>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2%',
            }}
          >
            {options.map((currElement, index) => (
              <Form.Check
                inline
                type="radio"
                label={index + 1}
                name={questionNum}
              />
            ))}
          </Form>
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
