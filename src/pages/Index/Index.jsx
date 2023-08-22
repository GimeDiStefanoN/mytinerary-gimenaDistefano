import Hero from '../../components/Hero/Hero';
import Carrousel from '../../components/Carrousel/Carrousel';
import './Index.css'


function Index() {
    return (
        <>
            <main>
                <Hero
                backgroundImage="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg"
                titleHero="Find your perfect trip, designed by insiders who know and love their cities!"
                showButton={true}
                titleHeroClassName="index-titleHero" 
                />
                <Carrousel/>
            </main>
        </>
    )
}

export default Index