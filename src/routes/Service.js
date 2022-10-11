import Hero from '~/components/Home/Hero';
import banner from '~/assets/1.jpg';
import Footer from '~/components/Footer/Footer';
import Trip from '~/components/trip/Trip';

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
            <Trip />
            <Footer />
        </>
    );
}

export default Service;
