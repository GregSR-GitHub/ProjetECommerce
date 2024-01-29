import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PanierService {
    private refresh = new Subject<any>();

public getRefresh(): Observable<any> {
   return this.refresh.asObservable();
}

public setRefresh(value: any): void {

   this.refresh.next({panier : value});
} 
}
