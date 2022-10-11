import Hero from '~/components/Home/Hero';
import banner from '~/assets/12.jpg';
import Destination from '~/components/destination/Destination';
import Trip from '~/components/trip/Trip';

function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={banner}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
        </>
    );
}

export default Home;
