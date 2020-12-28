import {FB_CONFIG} from "./Config";
import firebase from "firebase";

class DatabaseService {
    // Firebase and database
    app: any;
    database: any;

    // Redux Store
    store: any;

    constructor() {
        console.group('Firebase Init >>');
        this.app = firebase.initializeApp(FB_CONFIG);
        this.database = this.app.database().ref('plants');
        console.log('Firebase Initiated!');
        console.log('Database: ', this.database);
        console.groupEnd();
    }
}

export default DatabaseService;
