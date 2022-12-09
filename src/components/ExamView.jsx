import ExamListCard from './ExamListCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import {LoaderCard} from './Loader';

export default function ExamView() {
  const [examData, setExamData] = useState(null);
  useEffect(() => {
    const onLoad = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/exams`);
      const data = await response.json();
      setExamData(data);
      console.log(data);
    }
    onLoad();
  }, []);
  return (
    <Container fluid="md">
      <Row>
        {examData ? examData.exams.map((exam) => {
          return (
            <Col xm>
              <ExamListCard
                key={exam._id}
                title={exam.name}
                description={`Total Marks: ${exam.totalMarks}`}
                subject={exam.subject}
                link={`/examview/${exam._id}`}
              />
            </Col>
          )
        }): <LoaderCard/>}
      </Row>
    </Container>
  );
}
