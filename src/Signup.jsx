import { Fragment } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TeacherSignUp from "./components/TeacherSignUp";
import StudentSignUp from "./components/StudentSignUp";

const SignUp = () => {
    return (
        <Fragment>
            <div style={{
                alignItems: "center",
                marginBottom: "2rem",
                marginTop: "-1rem",
            }}>
                <Tabs
                    defaultActiveKey="teacher"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="teacher" title="Register as teacher">
                        <TeacherSignUp />
                    </Tab>
                    <Tab eventKey="student" title="Register as student">
                        <StudentSignUp />
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    );
}

export default SignUp;