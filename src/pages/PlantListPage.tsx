import React from 'react';
import {IPlant} from "../common/interfaces";
import PlantCardComponent from "../components/PlantCardComponent";
import '../style/plant-list.css';
import {connect} from 'react-redux';
import {savePlants, openDynamicModal} from "../redux/actions";
import {navigate} from "../common/functions";

import {Database} from "../services/DatabaseService";

export interface IPlantListProps {
    plants: IPlant[],
    savePlants: (plants: IPlant[]) => void,
    openDynamicModal: (modalData: any) => void,
}

export interface IPlantListState {
    plants: IPlant[];
}

class PlantListPage extends React.Component<IPlantListProps, IPlantListState> {
    fbService: any;
    fbDatabase: any;

    constructor(props: IPlantListProps) {
        super(props);
        this.state = {
            plants: this.props.plants,
        }

        this.watering = this.watering.bind(this);
    }

    public static defaultProps = {
        plants: [],
        savePlants: void 0,
        openDynamicModal: void 0,
    }

    componentDidMount() {
        Database.getPlants();
    }

    componentDidUpdate(prevProps: Readonly<IPlantListProps>, prevState: Readonly<IPlantListState>, snapshot?: any) {
        if (prevProps !== this.props) {
            this.setState({
                plants: this.props.plants,
            });
        }
    }

    watering (id: number | undefined): void {
        let plantName = '';
        const plants = this.state.plants.map( plant => {
            if (plant.id === id) {
                plant.lastWatered = new Date(Date.now());
                plant.wateringDeadline = new Date(Date.now() + (plant.wateringCycle * 86400000));
                plantName = plant.name;
            } return plant;
        });
        this.props.savePlants(plants);
        // this.props.openDynamicModal({
        //     modalType: 'infoModal',
        //     title: `${plantName} successfully watered`
        // });
    }

    navigateRegister = () => {
        navigate('/register');
    }

    render(): JSX.Element {
        const {plants} = this.state;
        return (
            <div className='plant-list-page'>
                <h1>Plant List here!</h1>
                <button id='register-button' onClick={this.navigateRegister}>Register Plant</button>
                {plants && (
                    <div className='plant-list-container'>
                        {plants.map( (plant, index) =>
                            <PlantCardComponent {...plant} watering={this.watering} key={index}/>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: any): object => ({
        plants: state.plants.plants,
});

const mapDispatchToProps: object = {
    savePlants,
    openDynamicModal,
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantListPage);
