import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {FbAuthResponse, User} from '../../../shared/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {
    
    public error$: Subject<string> = new Subject<string>()
    
    get token(): string | null {
        const expDate = new Date(localStorage.getItem('fb-token-exp'))
        
        if(new Date() > expDate){
            this.logout()
            return null
        }
        return localStorage.getItem('fb-token')
    }
    
    constructor(private http: HttpClient) { }
    
    private setToken(response: FbAuthResponse | null) {
        if (response === null)
            localStorage.clear()
        else {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
            localStorage.setItem('fb-token', response.idToken)
            localStorage.setItem('fb-token-exp', expDate.toString())
        }
    }
    
    private handleError(error: HttpErrorResponse) {
        const {message} = error.error.error
        
        switch (message){
            case 'INVALID_EMAIL':
                this.error$.next('Incorrect email')
                break
            
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email doesn\'t exists')
                break
            
            case 'INVALID_PASSWORD':
                this.error$.next('Incorrect password')
                break
        }
        
        return throwError(error)
    }
    
    login(user: User): Observable<any> {
        user.returnSecureToken = true
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
            .pipe(
                tap(this.setToken),
                catchError(this.handleError.bind(this))
            )
    }
    
    logout() {
        this.setToken(null)
    }
    
    isAuthenticated(): boolean {
        return !!this.token
    }
}
