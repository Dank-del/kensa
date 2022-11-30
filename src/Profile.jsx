import { createAvatar } from "@dicebear/avatars";
import * as style from '@dicebear/adventurer';
import { Fragment, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import './Profile.css';

const Profile = () => {
    const { currentUser, fetchCurrentUser } = useCurrentUser();
    const [pfp, setPfp] = useState(null);
    const [usrData, setUsrData] = useState(null);
    useEffect(() => { fetchCurrentUser() }, [])

    useEffect(() => {
        console.log(currentUser);
        if (currentUser) {
            if (currentUser.teacher) {
                setPfp(createAvatar(style, { seed: currentUser.teacher.email, dataUri: true }));
                setUsrData({
                    role: "Teacher",
                    user: currentUser.teacher
                });
            }
            else if (currentUser.student) {
                setPfp(createAvatar(style, { seed: currentUser.student.email, dataUri: true }));
                setUsrData({
                    role: "Student",
                    user: currentUser.student
                });
            } else {
                setPfp(null);
            }
        }
    }, [currentUser])
    console.log(usrData)
    return (
        <Fragment>
            <div>
                <div className="page-content page-container" id="page-content">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        // maxWidth: "100%",
                        // width: "auto"
                    }}>
                        {pfp && <div className="row container d-flex justify-content-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25">
                                                    <img
                                                        src={pfp}
                                                        className="img-radius"
                                                        alt="User-Profile-Image"
                                                    />
                                                </div>
                                                <h6 className="f-w-600">{usrData.user.name}</h6>
                                                <p>{usrData.role}</p>
                                                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                                    Information
                                                </h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <h6 className="text-muted f-w-400">{usrData.user.email}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Age</p>
                                                        <h6 className="text-muted f-w-400">{usrData.user.age}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">IdentityHash</p>
                                                        <h6 className="text-muted f-w-400">{usrData.user.identityHash}</h6>
                                                    </div>
                                                </div>
                                                {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                    Projects
                                                </h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Recent</p>
                                                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                    </div>
                                                </div> */}
                                                {/* <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="facebook"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-facebook feather icon-facebook facebook"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="twitter"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-twitter feather icon-twitter twitter"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            data-toggle="tooltip"
                                                            data-placement="bottom"
                                                            title=""
                                                            data-original-title="instagram"
                                                            data-abc="true"
                                                        >
                                                            <i
                                                                className="mdi mdi-instagram feather icon-instagram instagram"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>

            </div>
        </Fragment>
    );
}
export default Profile;