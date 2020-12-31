import React from 'react';
import './App.css';
import history from "./services/history";
import {Router, Route, Switch} from "react-router-dom";
import PlantListPage from "./pages/PlantListPage";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import {connect} from "react-redux";
import {savePlants} from "./redux/actions";
import {IPlant} from "./common/interfaces";
import DatabaseService from './services/firebase/DatabaseService';
import {examplePlants} from "./common/sampleData";
import PlantDetailsPage from "./pages/PlantDetailsPage";
import PlantRegisterPage from "./pages/PlantRegisterPage";

export interface IAppProps {
    dynamicModalData: any;
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
        dynamicModalData: {},
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
                        <Route exact={true} path={['/', '/home']} component={HomePage}/>
                        <Route exact={true} path='/list' component={PlantListPage}/>
                        <Route exact={true} path='/plant/:id' component={PlantDetailsPage}/>
                        <Route exact={true} path='/register' component={PlantRegisterPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}

const mapStateToProps = (state: any): object => ({
    dynamicModalData: state.dynamicModal,
});

const mapDispatchToProps: object = {
    savePlants,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
