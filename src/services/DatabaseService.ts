import Store from "../redux/store";
import { HTTP } from "./HTTPservice";
import {take} from "rxjs/operators";
import {IPlant, ISeed} from "../common/interfaces";
import {Observable} from "rxjs";


class DatabaseService {

    // TODO: API urls has to come from config/environment file.
    public getPlants(): void {
        const route = '/list';
        HTTP.makeRequest('GET', route).pipe(take(1)).subscribe((response) => {
            console.log('GET PLANTS response: ', response);
        });
    }

    // TODO: decide if the response should be stored in redux or just give it back
    public getPlant(id: string): Observable<XMLHttpRequest> {
        const route = `/plant/${id}`;
        return HTTP.makeRequest('GET', route).pipe(take(1));
    }

    public postPlant(seed: ISeed): void {
        // TODO: put the the plant into body and attach it to the request.

        const route = '/plant';
        const body = {...seed};
        HTTP.makeRequest('POST', route).pipe(take(1)).subscribe((response) => {
            console.log('POST PLANT response: ', response, body);
        });
    }

    public waterPlant(id: string): void {
        const route = `/plant/${id}`;
        HTTP.makeRequest('PUT', route).pipe(take(1)).subscribe((response) => {
            console.log('WATER PLANT response: ', response);
        });
    }

    public deletePlant(id: string) {
        const route = `/plant/${id}`;
        HTTP.makeRequest('DELETE', route).pipe(take(1)).subscribe(response => {
            console.log('DELETE PLANT response: ', response);
        });
    }

    public updatePlant(id: string, patchList: object): void {
        // TODO: put the patchList into the body and attach it to the request
        const route = `/plant/${id}`;
        HTTP.makeRequest('PATCH', route).pipe().subscribe(response => {
            console.log('UPDATE PLANT response: ', response);
        })
    }
}

let dataBaseService = new DatabaseService();

export {dataBaseService as Database};
