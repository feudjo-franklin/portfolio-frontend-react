import { useLocation } from "react-router-dom"
import { ContactMe } from "./components/ContactMe"
import { ProfileDescription } from "./components/ProfileDescription"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { WelcomePage } from "../Welcome/WelcomePage"

export const HomePage = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const unique_uid = queryParams.get("unique_uid");

    if (!unique_uid) {
        return <WelcomePage />;
    }

    return (
        <main>
            <ProfileDescription />
            <Skills />
            <Projects />
            <ContactMe />
        </main>
    )
}