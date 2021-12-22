
import { Observable, of } from 'rxjs';
type Route1 = string |number;
type NewType_1 = Route;

type NewType = NewType_1;

export class PreloadSelectedModulesList {
    preload({ route, load }: { route: NewType; load: Function; }): Observable<any> {
        return route && route ? load() : of(null);
    }
}
