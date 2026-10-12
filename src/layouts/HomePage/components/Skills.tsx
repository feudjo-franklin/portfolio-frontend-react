import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchGetData } from "../../../client/client";
import SkillModel from "../../../models/SkillModel";
import { getSkillIcon } from "../../../Utils/icons/skillIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";

export const Skills = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    let unique_uid = queryParams.get("unique_uid");

    const [skills, setSkills] = useState<SkillModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        if (!unique_uid) return;  // ⚠️ évite un appel avec "null"

        fetchGetData(`/auth/profiles/${unique_uid}/skills`)
        .then((Response: any) => {
            console.log(Response.data)
            const responseJson = Response.data;

            const loadedSkills: SkillModel[] = [];

            let loadedCategories: string[] = [];

            for(const key in responseJson) {

                if (!loadedCategories.includes(responseJson[key].category)){
                    loadedCategories.push(responseJson[key].category);
                }
                

                loadedSkills.push(
                    {
                        id: responseJson[key].id,
                        name: responseJson[key].name,
                        iconId: responseJson[key].iconId,
                        level: responseJson[key].level,
                        category: responseJson[key].category,
                        displayOrder: responseJson[key].displayOrder
                    }
                );
            }
            setSkills(loadedSkills);
            setCategories(loadedCategories);
            setIsLoading(false)

        })

    }, [unique_uid]);

    if (isLoading) {
            return (
                <SpinnerLoading />
            )
        }  
        
    const capitalize = (str: string): string => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="mb-0">My skills</h2>
                <h3 className="fw-light fs-5">
                    {categories.length >= 2
                        ? `${capitalize(categories[0])} and ${capitalize(categories[1])} development`
                        : capitalize(categories[0]) || ""
                    }
                </h3>
                {/* <!-- Development --> */}
                <div className="row gy-4 mt-4">
                    <div className="col-12 col-md-7">

                        {/* <!-- Progress bar --> */}
                        {
                        skills.filter((skill: SkillModel) => skill.category === categories[0])
                            .sort((skillA: SkillModel, skillB: SkillModel) => skillA.displayOrder - skillB.displayOrder)
                            .map((skill: SkillModel) => (
                                <div key={skill.id} className="mb-3 p-3 bg-white">
                                    <div className="row align-items-center">
                                        <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon
                                                    icon={getSkillIcon(skill.iconId)}
                                                    className="fa-2x me-3 text-primary"
                                                />
                                                <p className="fw-bold m-0">{skill.name}</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="progress" data-bs-toggle="tooltip" title={`${skill.level}%`}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${skill.level}%` }}
                                                    aria-valuenow={skill.level}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            ))
                        }
                        
                    </div>
                    <div className="col-12 offset-md-1 col-md-4">
                        <img src={require("./../../../images/code.jpg")} alt="screen showing php code" width="100%" />
                    </div>
                </div>

                {/* <!-- Design --> */}
                <div className="row gy-4 mt-4">
                    <div className="col-12 col-md-4">
                        <img src={require("./../../../images/design.jpg")} alt="screen showing designs" width="100%" />
                    </div>
                    <div className="col-12 order-first offset-md-1 col-md-7 order-md-last">

                        {/* <!-- Progress bar --> */}
                        {
                        skills.filter((skill: SkillModel) => skill.category === categories[1])
                            .map((skill: SkillModel) => (
                                <div key={skill.id} className="mb-3 p-3 bg-white">
                                    <div className="row align-items-center">
                                        <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                            <div className="d-flex align-items-center">
                                                <FontAwesomeIcon
                                                    icon={getSkillIcon(skill.iconId)}
                                                    className="fa-2x me-3 text-primary"
                                                />
                                                <p className="fw-bold m-0">{skill.name}</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="progress" data-bs-toggle="tooltip" title={`${skill.level}%`}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${skill.level}%` }}
                                                    aria-valuenow={skill.level}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            ))
                        }

                    </div>

                </div>
            </div>

        </section>
    )
}