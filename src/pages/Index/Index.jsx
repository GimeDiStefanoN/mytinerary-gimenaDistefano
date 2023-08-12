import Hero from '../../components/Hero/Hero';
import Carrousel from '../../components/Carrousel/Carrousel';


// https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg
//Find your perfect trip, designed by insiders who know and love their cities!
function Index() {
    return (
        <>
            <main>
                <Hero
                backgroundImage="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg"
                titleHero="Find your perfect trip, designed by insiders who know and love their cities!"
                showButton={true}
                />
                <Carrousel/>
            </main>
        </>
    )
}

export default Index