import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { clients } from 'src/app/entities/user/client';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{

  ngOnInit(): void {
   

  }
  constructor(private formBuilder: FormBuilder,private ClientServiceService:ClientServiceService,private router:Router){

  }
  client!:clients;
  image!:File;
  path:any;
  name:any="";
  prenom:any="";
  email:any="";
  password:any="";


  ImageEvent(event:any){
   
   this.image= event.target.files[0];
   

  }

  nameEvent(event:any){
this.name=event.target.value;
  }
  prenomEvent(event:any){
    this.prenom=event.target.value;
      }
      emailEvent(event:any){
        this.email=event.target.value;
          }
          passwordEvent(event:any){
            this.password=event.target.value;
              }

  addclient(){
    const formData=new FormData();
    if(this.image!=null){
    formData.append('image',this.image,this.image.name);}
    if(this.email!=null)
    formData.append('email',this.email);
    formData.append('password',this.password);
    formData.append('name',this.name);
    formData.append('prenom.',this.prenom);
    this.client=new clients();
   this.client.email=this.email+"";
   this.client.password=this.password;
   this.client.image=this.image;
   this.client.name=this.name;
   this.client.prenom=this.prenom;
    this.ClientServiceService.addClient(this.client).subscribe(data =>{
      console.log(data);
      

    },error =>{
      
      this.router.navigateByUrl('/error500');
    });
    
    console.log("client est add");
    
  }
          
}
