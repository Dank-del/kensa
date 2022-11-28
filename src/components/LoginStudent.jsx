import { Fragment } from "react";
import { useForm } from "react-hook-form";

const LoginStudent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        data.age = Number(data.age);
        console.log(import.meta.env.VITE_API_URL);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/students/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        });
        if (res.status === 200) {
            alert("Successfully logged in");
        } else {
            const errMsg = await res.json();
            alert("Error: " + JSON.stringify(errMsg));
        }
    }

    return (
        <Fragment>
            <div style={{
                marginLeft: '2rem',
                marginRight: '2rem',
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login as Student</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            {...register("email", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", {
                            required: true,
                        })} />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Fragment>);
}

export default LoginStudent;