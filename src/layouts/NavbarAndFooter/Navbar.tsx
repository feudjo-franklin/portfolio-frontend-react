import React, { useEffect, useState } from "react"
import ProfileModel from "../../models/ProfileModel"
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { fetchGetData } from "../../client/client";
import { useLocation } from "react-router-dom";

export const Navbar = () => {

    const [httpError, setHttpError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid = queryParams.get("unique_uid");

    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        
        fetchGetData(`/auth/profiles/unique_uid/${unique_uid}`)
        .then((response: any) => {
            console.log(response.data);
            const responseJson = response.data;

            const loadedProfile: ProfileModel = {
                id: responseJson.id,
                email: responseJson.email,
                firstname: responseJson.firstname,
                lastname: responseJson.lastname,
                qualification: responseJson.qualification,
                authorities: responseJson.authorities,
                publicLinks: responseJson.publicLinks,
            };

            setProfile(loadedProfile);
            setIsLoading(false);
        })

    }, []);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
        <div className="container m-5">
            <p>{httpError}</p>
        </div>
        )
    }

    return(
    <header className="py-4">
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand text-uppercase fw-bold" href="#">
                    <span className="bg-primary bg-gradient p-1 rounded-3 text-light">{profile?.firstname}</span> {profile?.lastname}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#johndoe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
    
}