import './Card.css';
import Button from '../Button/Button';
import { Icon } from '@iconify/react';

const Card = (props) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={props.png} alt={props.alt} /></figure>
                <div className="card-body">
                    <div className="contenedorNombres">
                        <h2 className="card-title">{props.name}</h2>
                        <div className='contenedorPais'>
                            <Icon className="iconLocal" icon="icon-park-solid:local" />
                            <p className='card-subtitle'> {props.country}</p>
                        </div>

                    </div>
                    <div className="card-actions justify-end">
                        <Button text='More Details' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card