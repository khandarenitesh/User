import { Injectable } from "@angular/core";
import { IUSer } from "./user.model";

@Injectable()
export class AuthService {
     
    currentUSer!:IUSer;
    loginUser(userName:string,password:string){
        this.currentUSer = {
            id: 1,
            userName:userName,
            firstName:'Nitesh',
            lastName:'Khandare'                

        }
    }
    isAuthenticated(){
        return !!this.currentUSer;
    }

}
