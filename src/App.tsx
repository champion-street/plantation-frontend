import React from 'react';
import './App.css';
import history from "./services/history";
import {Router, Route, Switch} from "react-router-dom";
import PlantListComponent from "./components/PlantListComponent";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import {connect} from "react-redux";
import {savePlants} from "./redux/actions";
import {IPlant} from "./common/interfaces";
import DatabaseService from './services/firebase/DatabaseService';
import {examplePlants} from "./common/sampleData";

export interface IAppProps {
    savePlants: (plants: IPlant[]) => void;
}

class App extends React.Component<IAppProps> {

    databaseService: any;

    constructor(props: any) {
        super(props);

        // @ts-ignore
        this.databaseService = new DatabaseService();
    }

    public static defaultProps = {
        savePlants: void 0,
    }

    componentDidMount() {
        const plants = [...examplePlants];
        this.props.savePlants(plants);
    }

    render(): any {
        return (
            <div className="App">
                <HeaderComponent/>
                <Router history={history}>
                    <Switch>
                        <Route exact={true} path={['/', '/home']} component={HomeComponent}/>
                        <Route exact={true} path='/list' component={PlantListComponent}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}

const mapDispatchToProps: object = {
    savePlants,
}

export default connect(null, mapDispatchToProps)(App);
