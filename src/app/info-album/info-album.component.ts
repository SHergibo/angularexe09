import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-info-album',
  templateUrl: './info-album.component.html',
  styleUrls: ['./info-album.component.css']
})
export class InfoAlbumComponent implements OnInit {
  id: string;
  infos: Object;
  constructor(private route: ActivatedRoute, private location: Location, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.spotify.getAlbum(this.id).subscribe(res => {
      this.infos = res;
    });
  }

  back() {
    this.location.back();
  }

}
