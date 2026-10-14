import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Buffer } from "buffer";
import { fetchGetData, fetchGetDataArrayBuffer } from "../../../client/client";
import ProfileModel from "../../../models/ProfileModel";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";
import SocialNetworkModel from "../../../models/SocialNetworkModel";

export const ProfileDescription = () => {

    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid = queryParams.get("unique_uid");

    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [profilePicture, setProfilePicture] = useState("");


    useEffect(() => {
        
        fetchGetData(`/auth/profiles/unique_uid/${unique_uid}`)
        .then((response: any) => {
            //console.log(response.data);
            const responseJson = response.data;

            const loadedSocialNetworks: SocialNetworkModel[] = [];

            for(const key in responseJson.socialNetworkViewDTOS){
                const socialNetwork: SocialNetworkModel = {
                    id: responseJson.socialNetworkViewDTOS[key].id,
                    name: responseJson.socialNetworkViewDTOS[key].name,
                    iconId: responseJson.socialNetworkViewDTOS[key].iconId,
                    url: responseJson.socialNetworkViewDTOS[key].url,
                    displayOrder: responseJson.socialNetworkViewDTOS[key].displayOrder
                }
                loadedSocialNetworks.push(socialNetwork);
            }

            const loadedProfile: ProfileModel = {
                id: responseJson.id,
                email: responseJson.email,
                firstname: responseJson.firstname,
                lastname: responseJson.lastname,
                qualification: responseJson.qualification,
                authorities: responseJson.authorities,
                githubLink: responseJson.githubLink,
                socialNetworks: loadedSocialNetworks
            };

            setProfile(loadedProfile);
            setIsLoading(false);
        })
        console.log("profile : ", profile)

        fetchGetDataArrayBuffer(`/auth/profiles/${unique_uid}/download-profile-picture`)
        .then((response: any) => {
            
            const buffer = Buffer.from(response.data, 'binary').toString('base64');
            setProfilePicture(buffer);

        })
        .catch((error: any) => {
            if (error.response?.status === 400) {
                // ⚠️ Pas de photo de profil → on utilise une image par défaut
                console.log("No profile picture yet");
                // setPhoto à une image par défaut, ou laisse vide
            } else {
                console.error("Error fetching profile picture:", error);
            }
        });

    }, [unique_uid]);

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
                        <h1 className="fw-bold">I'm <b className="fw-bold">{`${profile?.firstname} ${profile?.lastname}`}</b>, {profile?.qualification}</h1>
                        <h2 className="fw-light">Welcome to my creative universe</h2>
                        <a href="#skills" className="btn btn-primary mt-5">My web skills</a><br/>
                        <a href={`${profile?.githubLink}`}>Github</a>
                    </div>
                    <div className="col-12 col-md-6">
                        {profilePicture?
                            (<img src={`data:image/jpeg;base64,${profilePicture}`} alt={`${profile?.firstname} ${profile?.lastname}`} width="100%" />)
                            :
                            (<img src={require('./../../../images/portrait.jpg')} alt={`${profile?.firstname} ${profile?.lastname}`} width="100%" />)
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}