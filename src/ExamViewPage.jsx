import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

const ExamViewPage = () => {
    const [data, setData] = useState(null);
    const [cookies] = useCookies(["user"])
    const { id } = useParams();
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/exams/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookies['token'],
            }
        })
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {data && data.exam && <div>
                                <Card.Title>{data.exam.name}</Card.Title>
                                <Card.Text>
                                    <p>Exam ID: <code>{data.exam._id}</code> </p>
                                    <p>Subject: {data.exam.subject}</p>
                                    <p>Duration: {data.exam.duration} minutes</p>
                                    <p>Full Marks: {data.exam.totalMarks}</p>
                                    <p>Passing Marks: {data.exam.passingMarks}</p>
                                    <p>Time: {new Intl.DateTimeFormat('en-US', {
                                        dateStyle: 'full',
                                        timeStyle: 'long',
                                        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                        timeZoneName: Intl.DateTimeFormat().resolvedOptions().timeZoneName
                                    }).format(new Date(data.exam.date))}</p>
                                    <p>Teacher ID: <code>{data.exam.teacher}</code> </p>
                                </Card.Text>
                            </div>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExamViewPage;
