import React from 'react';
import {connect} from "react-redux";
import {IPlant} from "../common/interfaces";
import {addPlant} from "../redux/actions";
import {navigate} from "../common/functions";

export interface IPlantRegisterPageProps {
    addPlant: (plant: IPlant) => void;
}

export interface IPlantRegisterPageState {
    name: string;
    wateringCycle: number;
    description: string;
}

class PlantRegisterPage extends React.Component<IPlantRegisterPageProps, IPlantRegisterPageState> {
    constructor(props: IPlantRegisterPageProps) {
        super(props);
        this.state = {
            name: '',
            wateringCycle: 0,
            description: '',
        }
    }

    private handleSubmit = () => {
        const registrationTime: number = Date.now();
        const plant: IPlant = {
            id: registrationTime,
            image: 'http://localhost:3000/images/placeholderflower.png',
            name: this.state.name,
            description: this.state.description,
            wateringCycle: this.state.wateringCycle,
            lastWatered: new Date(registrationTime),
            wateringDeadline: new Date(registrationTime + (this.state.wateringCycle * 86400000)),
        }
        this.props.addPlant(plant);
        navigate('/list');
    }


    // event has to be any otherwise the dynamic [name] > data storing method breaks
    private handleChange = (e: any) => {
        const {value} = e.target;
        const name = e.target.name as keyof IPlantRegisterPageState;
        this.setState({
            [name]: value,
        } as Pick<IPlantRegisterPageState, keyof IPlantRegisterPageState>);
    }

    render(): JSX.Element {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Plant Name</label>
                    <input
                        name='name'
                        type="text"
                        id='plantName'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">Plant Description</label>
                    <input
                        name='description'
                        type="text"
                        id='plantDescription'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="wateringCycle">Watering Cycle</label>
                    <input
                        name='wateringCycle'
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.wateringCycle}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps: object = {
    addPlant,
}

export default connect(null, mapDispatchToProps)(PlantRegisterPage);
