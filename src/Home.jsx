import { Fragment } from "react";
import homeBackground from './assets/bg-home.jpg';

const Home = () => {
    return (
        <Fragment>
            <>
                <div
                    id="intro-example"
                    className="p-5 text-center bg-image"
                    style={{
                        height: "auto",
                        width: "100%",
                        maxWidth: "100000px",
                        // backgroundSize: "100%",
                        marginTop: "-1.5rem",
                        backgroundImage: `url(${homeBackground})`,
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                    }}
                >
                    <div className="mask" style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        //height: "80vh",
                        padding: "3rem",
                        maxHeight: "100000px",
                        height: "auto",
                        }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }} className="text-white">
                                <img src="logo-no-background.png" alt="" width="45%" />
                                <h1 className="display-1 mb-3">Create. Share. Test.</h1>
                                <h5 className="mb-4">
                                    Create your own exams and share them with your students.
                                </h5>
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    href="/signup"
                                    role="button"
                                    // rel="nofollow"
                                    // target="_blank"
                                >
                                    Sign Up as teacher or Student
                                </a>
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    href="/exams"
                                    // target="_blank"
                                    role="button"
                                >
                                    Explore exams
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background image */}
            </>

        </Fragment>
    );
}

export default Home;