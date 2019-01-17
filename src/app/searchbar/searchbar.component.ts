import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  loginFormGroup: FormGroup;
  query: string;
  result: Object;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private spotify: SpotifyService) {
    this.loginFormGroup = fb.group({
      'search': [''],
    });
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit() {
    this.search();
  }

  onSubmit(value: any) {
    this.router.navigate(['searchbar'], { queryParams: { query : value.search } }).then(() => this.search());
  }

  search() {
    if (!this.query) {
      return;
    }
    this.spotify.searchTrack(this.query).subscribe(data => {
      this.result = data.tracks.items;
    });
  }

}
