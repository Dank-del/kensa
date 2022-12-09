import React from 'react';
import { Alert } from 'react-bootstrap';

const ZodErrorResponse = ({ error }) => {
    return (
        <Alert variant="danger">
            <h4>There were issues with the provided data:</h4>
            <ul>
                {error.issues.map((issue, index) => (
                    <li key={index}>{issue.message}</li>
                ))}
            </ul>
        </Alert>
    );
};

export default ZodErrorResponse;
