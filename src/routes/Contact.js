import Hero from '~/components/Home/Hero';
import banner from '~/assets/2.jpg';

function Contact() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={banner}
                title="Contact"
                // text="Choose Your Favourite Destination"
                // buttonText="Travel Plan"
                // url="/"
                btnClass="hide"
            />
        </>
    );
}

export default Contact;
