import React from 'react';
import '../style/plant.css';
import {IPlant} from "../common/interfaces";

export interface IPlantProps extends IPlant {
    watering: (id: number | undefined) => void;
}

export interface IPlantState extends IPlant {

}

class PlantComponent extends React.Component<IPlantProps, IPlantState> {
    constructor(props: IPlantProps) {
        super(props);
        this.state = {
            id: undefined,
            name: '',
            description: '',
            image: '',
            isWatered: false,
            lastWatered: Date.now(),
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props
        });
    }

    componentDidUpdate(prevProps: Readonly<IPlantProps>, prevState: Readonly<IPlantState>, snapshot?: any) {
        if (prevProps !== this.props) {
            this.setState({
                ...this.props,
            })
        }
    }

    render () {
        const {image, name, description, isWatered, id, lastWatered} = this.state;
        return (
            <div className='plant-container'>
                <div className='plant-image-container'>
                    <img className={`plant-image ${isWatered ? 'watered' : ''}`} src={image} onClick={() => {this.props.watering(id)}} />
                </div>
                <div className='plant-data'>
                    <h2 className='plant-name'>{name}</h2>
                    <p className='plant-description'>{description}</p>
                    <p>{lastWatered.toString()}</p>
                </div>
            </div>
        );
    }
}

export default PlantComponent;
