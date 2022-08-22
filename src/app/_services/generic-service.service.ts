import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lienBackEnd } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService<T> {

  constructor(
    private http: HttpClient
  ) {
  }

  testUrlArray(url: string): Promise<Array<T>> {
    return new Promise((resolve, reject)  => {
      this.http.get(url).subscribe((data) => {
        const donnees = data as Array<T>;
        resolve(donnees);
      });
    });
  }

  getAll(url: string): Promise<Array<T>> {
    return new Promise((resolve, reject)  => {
      this.http.get(lienBackEnd + url).subscribe((data) => {
        const donnees = data as Array<T>;
        resolve(donnees);
      });
    });
  }
 
  get(url: string, id: number | string): Promise<T> {
    return new Promise((resolve, reject)  => {
      this.http.get(lienBackEnd + url + '/' + id).subscribe((data) => {
        const resulat = data as T;
        resolve(resulat);
      });
    });
  }

  ajouter(url: string, objet: T): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.post(lienBackEnd + url, objet).subscribe((data) => {
        resolve(true);
      });
    });
  }

  modifier(url: string, id: number, objet: T): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.put(lienBackEnd + url + '/' + id, objet).subscribe((data) => {
        const resulat = data as T;
        resolve(true);
      });
    });
  }

  supprimer(url: string, id: number): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.delete(lienBackEnd + url + '/' + id).subscribe((data) => {
        resolve(true);
      });
    });
  }

}
