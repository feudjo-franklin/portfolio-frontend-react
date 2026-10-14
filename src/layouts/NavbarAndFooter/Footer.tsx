import { Link, useLocation } from "react-router-dom"
import { LegalNoticeModal } from "./components/LegalNoticeModal"
import { useEffect, useState } from "react";
import ProfileModel from "../../models/ProfileModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { fetchGetData } from "../../client/client";
import SocialNetworkModel from "../../models/SocialNetworkModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSocialIcon } from "../../Utils/icons/socialIcons";

export const Footer = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid = queryParams.get("unique_uid");

    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (!unique_uid) {
            setIsLoading(false);   // 👈 arrête le spinner
            return;
        }
        
        fetchGetData(`/auth/profiles/unique_uid/${unique_uid}`)
        .then((response: any) => {
            console.log(response.data);
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

    }, [unique_uid]);

    if (!unique_uid) {
        return (
            <footer className="border-top">
                <div className="container py-5 text-center text-muted">
                    <small>
                        © {new Date().getFullYear()} FeudjoWorld — All rights reserved
                    </small>
                </div>
            </footer>
        );
    }

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
                            {
                                profile?.socialNetworks?.sort((socialNetworkA: SocialNetworkModel, socialNetworkB: SocialNetworkModel) => socialNetworkA.displayOrder - socialNetworkB.displayOrder)
                                .map((socialNetwork: SocialNetworkModel) => (
                                    <li className="list-inline-item">
                                        <a href={socialNetwork.url} className="text-decoration-none text-dark" data-bs-toggle="tooltip"
                                        title="LinkedIn">
                                            <FontAwesomeIcon
                                                icon={getSocialIcon(socialNetwork.iconId)}
                                            />
                                        </a>
                                    </li>
                                ))
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
            <LegalNoticeModal />
        </footer>
    )
}