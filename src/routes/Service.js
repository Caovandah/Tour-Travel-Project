import Hero from '~/components/Home/Hero';
import banner from '~/assets/1.jpg';
import Footer from '~/components/Footer/Footer';

function Service() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={banner}
                title="Service"
                // text="Choose Your Favourite Destination"
                // buttonText="Travel Plan"
                // url="/"
                btnClass="hide"
            />
            <Footer />
        </>
    );
}

export default Service;
