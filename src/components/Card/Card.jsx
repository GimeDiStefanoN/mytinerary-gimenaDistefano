import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {
    return (
        <>
            <div className="card w-96 glass">
                <figure><img src={props.png} alt={props.alt} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <h4 className="card-subtitle">{props.country}</h4>
                    <p className="card-text">{props.description}</p>
                    <div className="card-actions justify-end">
                        <Button text='More Details'/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card