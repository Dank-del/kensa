import ExamListCard from './ExamListCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ExamView() {
  return (
    <Container fluid="md">
      <Row>
        <Col xm>
          <ExamListCard
            title="CHEM-504"
            description="chemistry exam"
            subject="Chemistry"
            link="/exam/ok"
          />
        </Col>
        <Col xm>
          <ExamListCard
            subject="Physics"
            title="PHY-301"
            description="physics exam"
          />
        </Col>
        <Col xm>
          <ExamListCard
            description="computer science exam"
            title="CS-221"
            subject="Compsci"
          />
        </Col>
      </Row>
    </Container>
  );
}
