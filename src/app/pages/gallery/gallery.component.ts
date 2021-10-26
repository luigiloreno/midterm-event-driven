import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  masonryImages: any = [];
  limit = 15;

  dummyPictures = [
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
    [false, 'https://source.unsplash.com/579x518/?Virgin Islands (British)'],
    [false, 'https://source.unsplash.com/503x548/?Angola'],
    [false, 'https://source.unsplash.com/511x630/?Mauritania'],
    [false, 'https://source.unsplash.com/414x767/?Sri Lanka'],
    [false, 'https://source.unsplash.com/443x704/?St. Helena'],
    [false, 'https://source.unsplash.com/441x1145/?Namibia'],
    [false, 'https://source.unsplash.com/491x1097/?Samoa'],
    [false, 'https://source.unsplash.com/570x851/?Eritrea'],
    [false, 'https://source.unsplash.com/560x1072/?Iraq'],
    [false, 'https://source.unsplash.com/551x598/?Togo'],
    [false, 'https://source.unsplash.com/518x813/?Romania'],
    [false, 'https://source.unsplash.com/497x524/?Kenya'],
    [false, 'https://source.unsplash.com/549x826/?Martinique'],
    [false, 'https://source.unsplash.com/559x627/?Tokelau'],
    [false, 'https://source.unsplash.com/594x513/?Belize'],
  ];

  constructor() { }

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }
}