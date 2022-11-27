import { Fragment } from "react";

const TeacherSignUp = () => {
    return (
        <Fragment>
            <div style={{
                marginLeft: '2rem',
                marginRight: '2rem',
            }}>
                <form>
                    <h1>Register as Teacher</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Name</label>
                        <input type="name" className="form-control" id="exampleInputName1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputSubject1" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="exampleInputSubject1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputAge1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" min="1" max="50" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Fragment>
    );
}

export default TeacherSignUp;