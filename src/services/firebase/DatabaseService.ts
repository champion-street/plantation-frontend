import React, {Component, createContext} from "react";
import {FB_CONFIG} from "./Config";
import firebase from "firebase";
import DatabaseContext from './DatabaseContext'


class DatabaseService extends Component<any, any>{
    // Firebase and database
    firebaseref: {
        app: any;
        database: any;
    };

    // Redux Store
    store: any;

    constructor(props: any) {
        super(props);
        console.group('Firebase Init >>');
        this.firebaseref = {
          app: firebase.initializeApp(FB_CONFIG),
          database: null,
        };
        this.firebaseref.database = this.firebaseref.app.database().ref('plants');
        console.log('Firebase Initiated!');
        console.log('Database: ', this.firebaseref.database);
        console.groupEnd();
    }

    render() {
        return undefined;
    }
}

export default DatabaseService;
