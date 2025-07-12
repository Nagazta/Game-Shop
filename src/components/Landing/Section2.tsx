import firstImg from '../../assets/Warzone.jpg'
import secondImg from '../../assets/Horizon.jpg'
import thirdImg from '../../assets/Skyrim.jpg'

export default function Section2(){
    return(
        <>
            <div className="section">
                <div className='title'>
                    <h2>GAME OF THE YEAR</h2>
                </div>
            </div>
           <div className="images">
                <img src={firstImg} alt="Image one"className='img-card'/>
                <img src ={secondImg} alt = "Image two" className='img-card'/>
                <img src = {thirdImg} alt = "Image three" className='img-card'/>
            </div>
        </>
 
    )
}