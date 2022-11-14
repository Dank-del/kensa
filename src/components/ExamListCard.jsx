import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExamListCard({ subject, title, description, link }) {
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
          <Button href={link} size="sm" variant="primary">
            Give Exam
          </Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default ExamListCard;
