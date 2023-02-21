import '../styles/heroCard.css'
import heroImg from'../Assist/din.png'
export default function HeroCard() {
  return(
    <div className="hero_card">
      <div className="heroCard_body">
        <img className='hero_img' src={heroImg}/>
      </div>
      
    </div>
  )
}