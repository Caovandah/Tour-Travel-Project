import Hero from '~/components/Home/Hero';
import banner from '~/assets/1.jpg';

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
        </>
    );
}

export default Service;
