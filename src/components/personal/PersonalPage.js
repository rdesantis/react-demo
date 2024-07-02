import PersonalHero from "./Hero";
import PersonalDetails from "./Details";
import PersonalAction from "./Action";

const PersonalPage = () => {
    return (
        <>
            <PersonalHero sectionStyle='hero' />
            <PersonalDetails sectionStyle='second' />
            <PersonalAction sectionStyle='third' />
        </>
    );
}

export default PersonalPage;
