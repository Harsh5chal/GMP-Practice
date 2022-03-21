import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  //get data
  getAlbums(){
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
  //Photos
  getPhotos(albumId){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumsId=${albumId}`);
  }
}
