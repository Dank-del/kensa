import { Fragment } from "react";
import { Tab, Tabs } from "react-bootstrap";
import LoginTeacher from "./components/LoginTeacher";
import LoginStudent from "./components/LoginStudent";

const Login = () => {
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
                    <Tab eventKey="teacher" title="Login as teacher">
                        <LoginTeacher />
                    </Tab>
                    <Tab eventKey="student" title="Login as student">
                        <LoginStudent />
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    );
}

export default Login;