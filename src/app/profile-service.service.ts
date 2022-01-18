import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile = {
    name : "John Doe",
    contactInfo : "JohnDoe@email.com",
    bio : "This is a placeholder",
    pfpUrl : "./assets/defaultProfilePicture.jpg"
  };

  getUserProfile(){
    return this.userProfile;
  }

  setUserProfile(name : string,
    contactInfo : string,
    bio : string){
      this.userProfile.name = name;
      this.userProfile.contactInfo = contactInfo;
      this.userProfile.bio = bio;
  }

  constructor() { }

}
