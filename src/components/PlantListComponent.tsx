import React from 'react';
import {IPlant} from "../common/interfaces";
import PlantComponent from "./PlantComponent";
import '../style/plant-list.css';
import {connect} from 'react-redux';
import {savePlants} from "../redux/actions";
import {FB_CONFIG} from "../services/firebase/Config";
import firebase from "firebase";

export interface IPlantListProps {
    plants: IPlant[],
    savePlants: (plants: IPlant[]) => void,
}

export interface IPlantListState {
    plants: IPlant[];
}

class PlantListComponent extends React.Component<IPlantListProps, IPlantListState> {
    fbService: any;
    fbDatabase: any;

    constructor(props: IPlantListProps) {
        super(props);
        this.state = {
            plants: this.props.plants,
        }

        // this.fbDatabase = this.fbService.database.ref().child('plants');
        this.watering = this.watering.bind(this);
        this.resetList = this.resetList.bind(this);
    }

    public static defaultProps = {
        plants: [],
        savePlants: void 0,
    }

    componentDidUpdate(prevProps: Readonly<IPlantListProps>, prevState: Readonly<IPlantListState>, snapshot?: any) {
        if (prevProps !== this.props) {
            this.setState({
                plants: this.props.plants,
            });

        }
    }


    render(): JSX.Element {
        const {plants} = this.state;
        console.log('plants at render: ', plants);
        return (
            <div>
            <div className='plant-list-container'>
                <h1>Plant List here!</h1>
                {plants.map( (plant, index) =>
                    <PlantComponent {...plant} watering={this.watering} key={index}/>
                )}
            </div>
                <button onClick={this.resetList}>Reset list</button>
            </div>
        )
    }

    watering (id: number | undefined): void {
        const plants = this.state.plants.map( plant => {
            if (plant.id === id) {
                plant.isWatered = true;
                plant.lastWatered = new Date(Date.now());
            } return plant;
        });
        this.props.savePlants(plants);
    }

    resetList (): void {
        const plants = this.state.plants.map(plant => {
            plant.isWatered = false;
            return plant;
        });
        this.props.savePlants(plants);
    }
}

const mapStateToProps = (state: any): object => {
    return {
        plants: state.plants.plants,
    }
}

const mapDispatchToProps: object = {
    savePlants,
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantListComponent);
