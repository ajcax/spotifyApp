import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  constructor(private router:Router) { }

  @Input() items: any[] = [];

  showArtist(item:any) {

    let artistId;
    if(item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistId])
  }

}
