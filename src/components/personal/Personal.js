import PersonalHero from "./Hero";
import PersonalDetails from "./Details";
import PersonalAction from "./Action";

const Personal = () => {
    return (
        <>
            <PersonalHero sectionStyle='hero' />
            <PersonalDetails sectionStyle='second' />
            <PersonalAction sectionStyle='third' />
        </>
    );
}

export default Personal;
