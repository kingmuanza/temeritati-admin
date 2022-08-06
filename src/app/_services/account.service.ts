import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {

    url = "http://localhost:56074/api/";
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    login(login: string, password: string): Observable<any> {
        const params = new HttpParams()
            .set('login', login)
            .set('password', password);

        console.log('submit', params);

        return this.http.post(this.url + "connected-user/Authentificate", { params: params });
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }


}