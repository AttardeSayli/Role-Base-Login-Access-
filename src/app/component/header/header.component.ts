import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  isLoggedIn: boolean = false;
  private loginStatusSubscription: Subscription | undefined;

  constructor(private authService: AuthServiceService, private router: Router) {}

  logout() {
    console.log('Logout Initiated');
    this.authService.logOut().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Logout Failed:', err);
        this.router.navigate(['/home']); 
      },
    });
  }

  ngOnInit(): void {
    this.loginStatusSubscription = this.authService.loginStatus$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      console.log('Login Status Updated:', this.isLoggedIn);
    });
  }

  ngOnDestroy(): void {
    this.loginStatusSubscription?.unsubscribe();
  }
}
