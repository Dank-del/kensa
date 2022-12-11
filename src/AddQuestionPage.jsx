import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";


const ExamForm = () => {
    const [question, setQuestion] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [alert, setAlert] = React.useState(<div></div>);
    const [cookies] = useCookies(["user"])
    const { id } = useParams();

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch(`${import.meta.env.VITE_API_URL}/exams/questions/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookies['token'],
            }
        })
        if (!res.ok) {
            setAlert(
                <div className="alert alert-danger" role="alert">
                    Error: {res.status} {res.statusText}
                </div>
            )
            return
        }
        const data = await res.json();
        if (data) {
            setAlert(
                <div className="alert alert-success" role="alert">
                    Question added successfully!
                </div>
            )
        }
    }

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleOptionAdd = () => {
        setOptions([...options, { text: '', isCorrect: false }]);
    };

    const handleCorrectOptionChange = (index, event) => {
        const newOptions = [...options];
        // set all the options to false
        newOptions.forEach((option) => {
            option.isCorrect = false;
        });
        newOptions[index].isCorrect = event.target.checked;
        setOptions(newOptions);
    }

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index].text = event.target.value;
        setOptions(newOptions);
    };

    const handleOptionDelete = () => {
        setOptions(options.slice(0, -1));
    };

    return (
        <Form style={{
            margin: "0.5rem 2rem",
        }}>
            <div style={{ margin: "0.4rem" }}>{alert}</div>
            <h1>Add new question</h1>
            <h3>Exam ID: <code>{id}</code></h3>
            <Form.Group>
                <h4>Question:</h4>
                <FormControl
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={handleQuestionChange}
                />
            </Form.Group>
            <h4 style={{
                margin: "1rem 0",
            }}>Options..</h4>
            <div className="form-check">
                {options.map((option, index) => (
                    <Form.Group style={{
                        marginTop: "0.4rem",
                        marginBottom: "0.4rem",
                    }} key={index}>
                        <Form.Check
                            type="radio"
                            onChange={(event) => handleCorrectOptionChange(index, event)}
                            name="ok"
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter option"
                            value={option.text}
                            onChange={(event) => handleOptionChange(index, event)}
                        />
                    </Form.Group>
                ))}
            </div>
            {/* <div style={{ margin: "1rem 0" }}>
                <Button onClick={handleOptionAdd}>Add option</Button>
                <Button onClick={handleOptionDelete}>Delete last option</Button>
            </div> */}
            <div style={{ margin: "1rem 0" }} class="d-grid gap-2">
                <Button onClick={handleOptionAdd}>Add option</Button>
                <Button variant="danger" onClick={handleOptionDelete}>Delete last option</Button>
                <Button onClick={onSubmit} variant="success">Submit this question</Button>
            </div>
        </Form>
    )
};

export default ExamForm;