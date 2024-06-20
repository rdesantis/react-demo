import About from "./About";
import HomeHero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <>
            <HomeHero sectionStyle='hero' />
            <Highlights sectionStyle='second' />
            <Testimonials sectionStyle='third' />
            <About sectionStyle='fourth' />
        </>
    );
}

export default Home;
