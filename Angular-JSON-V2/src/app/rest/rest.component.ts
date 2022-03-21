import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  albums;
  constructor(
    private photosService: PhotosService,
  ) { }

  ngOnInit(): void {
    this.albums = this.photosService.getAlbums();
    console.log('Starting');
  }

}
