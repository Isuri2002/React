import profilePic from './assets/me.jpg';
function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="image" />
            <h2 className='card-title'>Isuri</h2>
            <p className='card-text'>I'm an undergraduate of UoM</p>
        </div>
    )
}
export default Card;