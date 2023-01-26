import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clients } from 'src/app/entities/user/client';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private baseUrl ="http://localhost:8080/api";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient,private userAuthService: UserAuthService) {}
 addClient(client:any): Observable<Object>{
  return this.httpClient.post<any>(`${this.baseUrl+"/saveclient"}`,client);
 }
  loging(user: clients): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl+"/authenticate"}`,user,{headers: this.requestHeader});
  }

  roleMatch(allowedRoles : any) {
    
    const userRoles: any = this.userAuthService.getRoles();


    if (userRoles != null && userRoles) {

      for (let i = 0; i < userRoles.length; i++) {

        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            
            return true;
          }

        }

      }

    }
    return false;
  }

  permissionMatch(allowedPermissions : any ){

    const userPermissions: any = this.userAuthService.getPermissions();

    if (userPermissions != null && userPermissions) {

      for (let i = 0; i < userPermissions.length; i++) {

        for (let j = 0; j < allowedPermissions.length; j++) {
          if (userPermissions[i].namePermission === allowedPermissions[j]) {
            return true;
          }

        }

      }

    }

    return false;
  }
}
