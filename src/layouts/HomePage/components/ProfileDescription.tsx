import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchGetData } from "../../../client/client";
import ProfileModel from "../../../models/ProfileModel";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";

export const ProfileDescription = () => {

    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid = queryParams.get("unique_uid");

    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        
        fetchGetData(`/auth/profiles/unique_uid/${unique_uid}`)
        .then((response: any) => {
            //console.log(response.data);
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
        <section id="franklinfeudjo" className="my-5">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold">I'm <b className="fw-bold">{`${profile?.firstname} ${profile?.firstname}`}</b>, {profile?.qualification}</h1>
                        <h2 className="fw-light">Welcome to my creative universe</h2>
                        <a href="#skills" className="btn btn-primary mt-5">My web skills</a>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={require('./../../../images/portrait.jpg')} alt="John Doe" width="100%" />
                    </div>
                </div>
            </div>
        </section>
    )
}