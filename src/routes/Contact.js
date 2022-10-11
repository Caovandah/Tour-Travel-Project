import Hero from '~/components/Home/Hero';
import banner from '~/assets/2.jpg';
import Footer from '~/components/Footer/Footer';

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
            <Footer />
        </>
    );
}

export default Contact;
