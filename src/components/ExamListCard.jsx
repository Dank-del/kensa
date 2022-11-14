import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExamListCard({ subject, title, description }) {
  return (
    <div>
      <Card style={{
        // scale: '100%',
        margin: '3px'
      }}>
        <Card.Header>{subject}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button size="sm" variant="primary">
            Give Exam
          </Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default ExamListCard;
