import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { AuthService } from '@app/@core/auth/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  version: string | null = environment.version;
  accessToken: string;
  idToken: string;
  identityClaims: any;
  profile: any;
  role: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.accessToken = this.authService.accessToken;
    this.idToken = this.authService.idToken;
    this.profile = this.authService.identityClaims;
    if (this.profile != null && this.profile != undefined) {
      this.identityClaims = JSON.stringify(this.profile);
      this.role = JSON.stringify(this.profile.role);
    }
  }
}
