import Header from '../components/Landing/Header'
import Section1 from '../components/Landing/Section1'
import Section2 from '../components/Landing/Section2'
import Section3 from '../components/Landing/Section3'

export default function LandingPage() {
    return(
        <div className="landing-page">
            <Header />
            <Section1 />
            <Section2/>
            <Section3/>
            
        </div>
    )
}