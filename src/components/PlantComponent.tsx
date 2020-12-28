import React from 'react';
import '../style/plant.css';
import {IPlant} from "../common/interfaces";
import {colorCalculator} from "../common/functions";

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
            lastWatered: new Date(Date.now()),
            wateringDeadline: new Date(Date.now()),
            wateringCycle: 0,
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
        const {image, name, id, lastWatered, wateringDeadline, wateringCycle} = this.state;
        const wateredDate = new Date(lastWatered);
        return (
            <div className='plant-container'>
                <div className='plant-image-container'>
                    <img className={`plant-image ${colorCalculator(wateringDeadline, lastWatered)}-percent`} src={image} onClick={() => {this.props.watering(id)}} />
                </div>
                <div className='plant-data'>
                    <h2 className='plant-name'>{name}</h2>
                    <p>{`Watering Cycle: ${wateringCycle} day${wateringCycle > 1 ? 's' : ''}`}</p>
                    <p>Last watered: {wateredDate.getMonth() + 1}/{wateredDate.getDate()}/{wateredDate.getFullYear()}</p>
                    <p>{`Deadline: ${wateringDeadline.getMonth() + 1}/${wateringDeadline.getDate()}/${wateringDeadline.getFullYear()}`}</p>
                </div>
            </div>
        );
    }
}

export default PlantComponent;
