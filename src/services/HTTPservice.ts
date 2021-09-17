import { Observable, throwError} from "rxjs";
import { ajax, AjaxResponse} from "rxjs/ajax";
import { catchError, map, take } from "rxjs/operators";

// TODO: Remove Ajax, use Axios instead.
class HttpService {
    private baseUrl = 'http://192.168.1.191:8072';
    public makeRequest(
        requestMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        requestRoute: string,
        requestBody?: object
    ) {

        const requestOptions: object = {
            body: JSON.stringify(requestBody),
            // crossDomain: true,
            method: requestMethod,
            url: `${this.baseUrl}${requestRoute}`,
            headers: {
                "Access-Control-Allow-Origin": '*',
            }
        }

        return ajax(requestOptions).pipe(
            take(1),
            map((ajaxResponse: AjaxResponse) => ajaxResponse.response),
            catchError((error: Error) => throwError(error)));
    }
}

let http = new HttpService();

export { http as HTTP };
