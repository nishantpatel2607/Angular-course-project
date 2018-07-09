//The following service is an example of http dervice.
//Here we are capturing the response from the server in observable.
//https://angular.io/guide/observables



import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable() 
export class ProductsService{
    private _productsUrl = './assets/products.json';  

    constructor(private _http: Http) {}

    getAllProducts(): Observable<IProduct[]> {
        return this._http.get(this._productsUrl )
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        let product: Observable<IProduct>;
    
        product = this.getAllProducts()
        .map((products: IProduct[]) => products.find(p => p.id === id));
        //.do(data => console.log(JSON.stringify(data)));
        return product;
    }

    postProduct(product: IProduct): Observable<IProduct>{
         return this._http.post(this._productsUrl, product)
            .map((res: Response) => <IProduct> res.json())
            .catch(this.handleError);
    }

    putProduct(id:number, product: IProduct): Observable<IProduct>{
         return this._http.put(this._productsUrl + '/' + id, product)
        .map((res:Response) => <IProduct> res.json())
        .catch(this.handleError);
    }

    deleteProduct(id:number){
        this._http.delete(this._productsUrl + '/' + id);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}