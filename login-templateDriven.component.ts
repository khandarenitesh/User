import { Component } from '@angular/core'
import { AuthService } from './auth.service'

@Component ({
    selector:'login',
    templateUrl:'./login.component.html',
    styles:[`
        em {float:right; color:yellow; padding-left:10px;}

    `]
})
export class LoginComponent{
    constructor(private authService:AuthService){

    }
    userName:any
    password:any
    mouseoverLogin:any
    login(formvalues: any){
        this.authService.loginUser(formvalues.userName, formvalues.password)
        console.log(formvalues)
    }
    
}
