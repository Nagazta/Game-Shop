import '../styles/Section.css'
import sectionImage from '../../assets/people.jpg'
import { useNavigate } from 'react-router-dom';

export default function Section1() {
    const navigate = useNavigate();

    return(
        <div className="section">
            <div className="section-content-left">
                <h2 className="title">GAMES THAT YOU <br/>
                    LOVE, GET HERE <br/>
                    NOW!
                </h2>
                <p className="description">
                    Want to support us? Buy the games from us <br/>
                    by clicking the link below. <br/>
                </p>
                <div className="wrapped-button">
                <button className="get-Started sec" onClick={() => navigate('/register')}>Get Started</button>
                </div>
            </div>

            <div className="section-content-right">
                <img src={sectionImage} alt="Section 1 Image" className="section-image"/>
            </div>

        </div>
    )
}