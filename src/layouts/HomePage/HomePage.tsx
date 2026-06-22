import { ContactMe } from "./components/ContactMe"
import { ProfileDescription } from "./components/ProfileDescription"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export const HomePage = () => {
    return (
        <main>
            <ProfileDescription />
            <Skills />
            <Projects />
            <ContactMe />
        </main>
    )
}