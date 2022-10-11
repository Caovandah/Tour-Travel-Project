import Hero from '~/components/Home/Hero';
import banner from '~/assets/night.jpg';
import Footer from '~/components/Footer/Footer';

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
            <Footer />
        </>
    );
}

export default About;
