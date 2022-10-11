import Hero from '~/components/Home/Hero';
import banner from '~/assets/night.jpg';
import Footer from '~/components/Footer/Footer';
import AboutUs from '~/components/About/AboutUs';

function About() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={banner}
                title="About"
                // text="Choose Your Favourite Destination"
                // buttonText="Travel Plan"
                // url="/"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    );
}

export default About;
