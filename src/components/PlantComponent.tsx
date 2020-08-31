import React from 'react';
import '../style/plant.css';
import {IPlant} from "../common/interfaces";

export interface IPlantProps extends IPlant {

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
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props
        });
    }

    changeWatering = (): void => {
        this.setState({
            isWatered: true
        });
    }



    render () {
        const {image, name, description, isWatered} = this.state;
        return (
            <div className='plant-container'>
                <div className='plant-image-container'>
                    <img className={`plant-image ${isWatered ? 'watered' : ''}`} src={image} onClick={this.changeWatering} />
                </div>
                <div className='plant-data'>
                    <h2 className='plant-name'>{name}</h2>
                    <p className='plant-description'>{description}</p>
                </div>
            </div>
        );
    }
}

export default PlantComponent;