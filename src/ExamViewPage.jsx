import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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

    function handleOptionChange(optionId, isCorrect) {
        // Update the `isCorrect` property of the `IOption` object with the given `optionId`
        const updatedData = { ...data };
        updatedData.exam.questions.forEach((question) => {
            question.options.forEach((option) => {option.isCorrect = false;});
            question.options.forEach((option) => {
                if (option.optionId === optionId) {
                    option.isCorrect = isCorrect;
                }
            });
        });

        // Update the `data` state object
        setData(updatedData);
    }

    function handleQuestionChange(questionId, question) {
        // Update the `question` property of the `IQuestion` object with the given `questionId`
        const updatedData = { ...data };
        updatedData.exam.questions.map((q) => {
            if (q.id === questionId) {
                q.question = question;
            }
        });

        // Update the `data` state object
        setData(updatedData);
    }

    async function handleSaveQuestion(examId, questionId, question, marks, options) {
        // make a PUT request to the API to update the question with the given data
        const postData = {
            examId: examId,
            questionId: questionId,
            question: question,
            marks: marks,
            options: options,
        }
        console.log(postData);
        // return;
        const res = await fetch(`${import.meta.env.VITE_API_URL}/exams/questions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookies['token'],
            },
            body: JSON.stringify(postData),
        });
        if (res.ok) {
            // refresh the exam data
            const updatedExam = await res.json();
            setData(updatedExam);
        }

    }

    function handleDeleteQuestion(examId, questionId) {
        // make a DELETE request to the API to delete the question with the given `questionId`
        fetch(`${import.meta.env.VITE_API_URL}/exams/questions/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookies['token'],
            },
            body: JSON.stringify({
                examId: examId,
                questionId: questionId,
            })
        }).then(res => res.json())
            .then(data => setData(data));
    }


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
                            {data && data.exam && data.exam.questions && <div>
                                <h5>Questions:</h5>
                                {data.exam.questions.map((question) => (
                                    <div style={{
                                        margin: "1rem",
                                    }} key={question._id}>
                                        <h5>Question ID: <code>{question._id}</code></h5>
                                        <p>
                                            <strong>
                                                <input
                                                    type="textarea"
                                                    style={{ width: "100%" }}
                                                    value={question.question}
                                                    onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                                                />
                                            </strong> ({question.marks} marks)
                                        </p>
                                        <ul>

                                            {question.options.map((option) => (
                                                <li key={option.optionId}>
                                                    <div className="form-input">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name={question.id}
                                                            id={option.optionId}
                                                            checked={option.isCorrect}
                                                            onChange={() => handleOptionChange(option.optionId, !option.isCorrect)}
                                                        />
                                                        <label class="form-check-label" for={option.optionId}>
                                                            <ReactMarkdown>
                                                                {option.data}
                                                            </ReactMarkdown>
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}

                                        </ul>
                                        <ButtonGroup>
                                        <Col sm>
                                        <Button
                                            style={{ margin: "0.5rem" }}
                                            variant='success' onClick={() => handleSaveQuestion(data.exam._id, question.id, question.question, question.marks, question.options)}
                                        >
                                            Save
                                        </Button>
                                        <Button onClick={() => handleDeleteQuestion(data.exam._id, question.id)} variant='danger'>
                                            Delete
                                        </Button></Col>
                                        </ButtonGroup>
                                    </div>
                                ))}
                            </div>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExamViewPage;
