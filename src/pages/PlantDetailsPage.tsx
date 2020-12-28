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
            console.log('params: ', params);
            console.log('this.props.plants: ', this.props.plants);
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
                    <img src={image} alt='hehe'/>
                    <h1>{name}</h1>
                </div>
                <div className='body'>
                    <div>{description}</div>
                    <div className="data">
                        <span>{`Last time watered: ${lastWatered.getMonth()}/${lastWatered.getDate()}/${lastWatered.getFullYear()}`}</span>
                        <span>{`Next watering time: ${wateringDeadline.getMonth()}/${wateringDeadline.getDate()}/${wateringDeadline.getFullYear()}`}</span>
                        <span>{`Watering cycle: ${wateringCycle}`}</span>
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
