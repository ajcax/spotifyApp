import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

   newSongs :any[] = [];
   loading: boolean;
   error: boolean = false;
   mensajeError: string;

  constructor(private _spotifyService:SpotifyService) { 
    this.loading = true;
    this.error = false;
    this._spotifyService.getNewReleases()
    .subscribe( data => {
      this.newSongs = data
      this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
      console.log(errorService);
    });
  }

}
