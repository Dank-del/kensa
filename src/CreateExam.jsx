import ZodErrorResponse from "./components/ZodErrorResponse";
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import './CreateExam.css';

export default function CreateExam() {
    // useState hook to store form data
    const [cookies] = useCookies(["user"]);
    const [errAlert, setErrAlert] = useState(<div></div>);
    const [formData, setFormData] = useState({
        examName: '',
        subject: '',
        date: Date(),
        totalMarks: '',
        passingMarks: '',
        duration: ''
    });

    // function to handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const postBody = JSON.stringify({
            name: formData.examName,
            subject: formData.subject,
            date: new Date(formData.date),
            totalMarks: Number(formData.totalMarks),
            passingMarks: Number(formData.passingMarks),
            duration: Number(formData.duration)
        })
        console.log(postBody);
        // TODO: Submit form data to server or perform other actions
        const res = await fetch(`${import.meta.env.VITE_API_URL}/exams/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + cookies["token"],
            },
            body: postBody
        })
        if (res.status === 200) {
            const jsn = await res.json()
            alert("Exam created successfully" + JSON.stringify(jsn));
        } else {
            const jsn = await res.json()
            console.log(jsn)
            if (!jsn[0].errors){
                alert("Exam creation failed due to: " + JSON.stringify(jsn));
                setErrAlert(
                    <Alert>
                        <Alert.Heading>Exam creation failed</Alert.Heading>
                        <p>{jsn.message}</p>
                    </Alert>
                )
                return
            }
            setErrAlert(<ZodErrorResponse error={jsn[0].errors}/>)
            // alert("Exam creation failed due to: " + JSON.stringify(jsn));
        }
        // alert(`Form submitted with the following data: ${JSON.stringify(formData)}`);
    }

    return (
        <div>
            <h1 className='title'>Create Exam</h1>
            <Form className='form' onSubmit={handleSubmit}>
                <Form.Group className='form-group' controlId="formExamName">
                    <Form.Label>Exam Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter exam name"
                        name="examName"
                        value={formData.examName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='form-group' controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='form-group' controlId="formTimeUntilExam">
                    <Form.Label>Exam Date</Form.Label>
                    <Form.Control
                        required
                        type="datetime-local"
                        placeholder="Enter time until exam"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='form-group' controlId="formTotalMarks">
                    <Form.Label>Total marks</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter total marks"
                        name="totalMarks"
                        value={formData.totalMarks}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='form-group' controlId="formPassingMarks">
                    <Form.Label>Passing marks</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter passing marks"
                        name="passingMarks"
                        value={formData.passingMarks}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className='form-group' controlId="formDuration">
                    <Form.Label>Duration of exam (in minutes)</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter duration of exam"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type='submit'>
                        Submit
                    </Button>
                </div>
            </Form>
            {errAlert}
        </div>
    );
};