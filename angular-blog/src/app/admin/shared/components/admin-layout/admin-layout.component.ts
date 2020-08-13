import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent{
    
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }
    
    isAuthenticated(): boolean{
        return this.auth.isAuthenticated()
    }
    
    logout(event: Event): void {
        event.preventDefault()
        this.auth.logout()
        this.router.navigate(['admin', 'login']);
    }
}
