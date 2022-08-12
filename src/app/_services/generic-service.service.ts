import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService<T> {

  URL = 'https://tmi-manager-api-dev.azurewebsites.net/api/exemple/GetClients';

  constructor(
    private http: HttpClient
  ) {
  }

  testUrlArray(): Promise<Array<T>> {
    return new Promise((resolve, reject)  => {
      this.http.get(this.URL).subscribe((data) => {
        const donnees = data as Array<T>;
        resolve(donnees);
      });
    });
  }

  getAll(table: string): Promise<Array<T>> {
    
    return new Promise((resolve, reject)  => {
      this.http.get(this.URL + table).subscribe((data) => {
        const donnees = data as Array<T>;
        resolve(donnees);
      });
    });
  }
 
  get(table: string, id: number): Promise<T> {
    
    return new Promise((resolve, reject)  => {
      this.http.get(this.URL + table + '/' + id).subscribe((data) => {
        const resulat = data as T;
        resolve(resulat);
      });
    });
  }

  ajouter(table: string, objet: T): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.post(this.URL + table, objet).subscribe((data) => {
        resolve(true);
      });
    });
  }

  modifier(table: string, id: number, objet: T): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.put(this.URL + table + '/' + id, objet).subscribe((data) => {
        const resulat = data as T;
        resolve(true);
      });
    });
  }

  supprimer(table: string, id: number): Promise<boolean> {
    
    return new Promise((resolve, reject)  => {
      this.http.delete(this.URL + table + '/' + id).subscribe((data) => {
        resolve(true);
      });
    });
  }

  jourSemaine(jour: number) {
    if (jour == 1)
      return "Lundi";
    if (jour == 2)
      return "Mardi";
    if (jour == 3)
      return "Mercredi";
    if (jour == 4)
      return "Jeudi";
    if (jour == 5)
      return "Vendredi";
    if (jour == 6)
      return "Samedi";
    if (jour == 7)
      return "Dimanche";

    return "" + jour ? jour : "";
  }

}
