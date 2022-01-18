import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
