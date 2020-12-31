import React from 'react';
import {IPlant} from "../common/interfaces";
import {connect} from "react-redux";
import '../style/plant-details.css';

export interface IParams {
    id: string;
}

export interface IPlantDetailsPageProps {
    plants: IPlant[];
    match: {
        params: IParams;
    };
}

export interface IPlantDetailsPageState extends IPlant {

}

class PlantDetailsPage extends React.Component<IPlantDetailsPageProps, IPlantDetailsPageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            id: undefined,
            image: '',
            name: '',
            description: '',
            lastWatered: new Date(),
            wateringDeadline: new Date(),
            wateringCycle: 0,
        }
    }

    componentDidMount() {
        const { match: { params }} = this.props;
        this.props.plants.forEach(plant => {
            if (plant.id === parseInt(params.id)) {
                this.setState({
                    ...plant
                });
            }
        });
    }

    componentDidUpdate(prevProps: Readonly<IPlantDetailsPageProps>, prevState: Readonly<IPlantDetailsPageState>, snapshot?: any) {
        if (prevProps !== this.props) {
            const { match: { params }} = this.props;
            this.props.plants.forEach(plant => {
                if (plant.id === parseInt(params.id)) {
                    this.setState({
                        ...plant
                    });
                }
            });
        }
    }

    render(): JSX.Element {
        const {name, description, lastWatered, wateringDeadline, wateringCycle, image} = this.state;
        return (
            <div className='details-container'>
                <div className='header'>
                    <div>
                        <img src={image} alt='hehe' id='plant-picture'/>
                    </div>
                    <div className='header-name'>
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className='body'>
                    <div>{description}</div>
                    <div className="data">
                        <p>{`Last time watered: ${lastWatered.getMonth() + 1}/${lastWatered.getDate()}/${lastWatered.getFullYear()}`}</p>
                        <p>{`Next watering time: ${wateringDeadline.getMonth() + 1}/${wateringDeadline.getDate()}/${wateringDeadline.getFullYear()}`}</p>
                        <p>{`Watering cycle: ${wateringCycle}`}</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: any): object => ({
    plants: state.plants.plants,
});

export default connect(mapStateToProps, null)(PlantDetailsPage);
