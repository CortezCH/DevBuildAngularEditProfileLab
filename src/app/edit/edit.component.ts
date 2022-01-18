import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user = {
    name : "",
    contactInfo: "",
    bio : "",
    pfpUrl : ""
  };

  constructor(private profileService : ProfileService,
    private router : Router) {
    this.user.name = profileService.getUserProfile().name;
    this.user.contactInfo = profileService.getUserProfile().contactInfo;
    this.user.bio = profileService.getUserProfile().bio;
    this.user.pfpUrl = profileService.getUserProfile().pfpUrl;
  }

  updateUser(){
    let name = ( <HTMLInputElement> document.getElementById("updatedName") ).value;
    let contact = ( <HTMLInputElement> document.getElementById("updatedContactinfo") ).value;
    let bio = ( <HTMLInputElement> document.getElementById("updatedBio") ).value;
    this.profileService.setUserProfile(name, contact, bio);
  }

  goToProfile($myParam: string = ''): void {
    const navigationDetails: string[] = ['/profile'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

}
