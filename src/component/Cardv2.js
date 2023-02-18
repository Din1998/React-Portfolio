import '../styles/cardv2.css'

import CardImg3 from '../Assist/default.jpg'

export default function CardV2(props) {
  return(
    <div className='card_wraper'>
      <div className='card__body'>
        <img src={props.img}/>
        <div className='info'>
          <h1>{props.heading}</h1>
          <p>{props.title}</p>
          <a target='_blank' href={props.Link}>Go Live</a>
        </div>
      </div>
    </div>
    
  )
}