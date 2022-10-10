import Hero from '~/components/Home/Hero';
import banner from '~/assets/night.jpg';

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
        </>
    );
}

export default About;
