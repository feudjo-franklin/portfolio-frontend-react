import { Link, useLocation } from "react-router-dom"
import { LegalNoticeModal } from "./components/LegalNoticeModal"
import { useEffect, useState } from "react";
import ProfileModel from "../../models/ProfileModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { fetchGetData } from "../../client/client";

export const Footer = () => {

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

    return (
        <footer className="border-top">
            <div className="container py-5">
                <div className="row gy-4 align-items-center">
                    <div className="col-12 col-md-4">
                        <a className="navbar-brand text-dark text-uppercase fw-bold" href="#">
                            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">{profile?.firstname}</span> {profile?.lastname}
                        </a>
                    </div>
                    <div className="col-12 col-md-4 text-md-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="#" className="text-decoration-none text-dark" data-bs-toggle="modal"
                                data-bs-target="#legalNotice">Legal notice</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-dark" data-bs-toggle="tooltip"
                                title="LinkedIn">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-dark" data-bs-toggle="tooltip"
                                title="Instagram">
                                    <i className="fab fa-instagram-square fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-dark" data-bs-toggle="tooltip" title="Twitter">
                                    <i className="fab fa-twitter-square fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <LegalNoticeModal />
        </footer>
    )
}