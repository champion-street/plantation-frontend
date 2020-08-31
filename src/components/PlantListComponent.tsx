import React from 'react';
import {IPlant} from "../common/interfaces";
import PlantComponent from "./PlantComponent";
import '../style/plant-list.css';

export interface IPlantListProps {

}

export interface IPlantListState {
    plants: IPlant[];
}

class PlantListComponent extends React.Component<IPlantListProps, IPlantListState> {
    constructor(props: IPlantListProps) {
        super(props);
        this.state = {
            plants: [
                {
                    id: 1,
                    name: 'Monstrea',
                    description: 'Nagyon szep, levelei hasitottak',
                    image: './images/monstrea.jpg',
                    isWatered: false,
                }, {
                    id: 2, name: 'Futoka', description: 'Ez is szep, levelei futnak', image: './images/futoka.jpg', isWatered: false,
                }, {
                    id: 3, name: 'Zoldike', description: 'Megintcsak szep, leveleinek szele vilagos', image: './images/zoldike.jpg', isWatered: false,
                }
            ]
        }
    }

    render() {
        const {plants} = this.state;
        return (
            <div className='plant-list-container'>
                <h1>Plant List here!</h1>
                {plants.map( plant => {
                    return (<PlantComponent name={plant.name} image={plant.image} description={plant.description} id={plant.id} isWatered={plant.isWatered}/>);
                })}
            </div>
        )
    }
}

export default PlantListComponent;