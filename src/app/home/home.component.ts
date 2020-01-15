import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    
  }
  slides = [
    {img: "assets/banner/1.jpg"},
    {img: "assets/banner/2.jpg"},
    {img: "assets/banner/3.jpg"},
    {img: "assets/banner/4.jpg"},
    {img: "assets/banner/5.jpg"},
  ];
  sponsorSlides = [
    {img: "assets/sponsers/technotech.png"},
    {img: "assets/sponsers/vishal.png"},
    {img: "assets/sponsers/winglaze.png"},
    {img: "assets/sponsers/nidhi.jpg"},
    {img: "assets/sponsers/reebok.jpg"},
    {img: "assets/sponsers/saffron.jpg"},
    {img: "assets/sponsers/tradesmen.jpg"},
    {img: "assets/sponsers/zuventus.jpg"},
    {img: "assets/sponsers/aditya.png"},
    {img: "assets/sponsers/ams.png"},
    {img: "assets/sponsers/arihant.png"},
    {img: "assets/sponsers/ashish.png"},
    {img: "assets/sponsers/bas.png"},
    {img: "assets/sponsers/chitra.png"},
    {img: "assets/sponsers/dinesh.png"},
    {img: "assets/sponsers/dlc.png"},
    {img: "assets/sponsers/eastern.png"},
    {img: "assets/sponsers/fancy.png"},
    {img: "assets/sponsers/galaxy.png"},
    {img: "assets/sponsers/golden.png"},
    {img: "assets/sponsers/konark.png"},
    {img: "assets/sponsers/krish.png"},
    {img: "assets/sponsers/madhab.png"},
    {img: "assets/sponsers/mfa.png"},
    {img: "assets/sponsers/microlight.png"},
    {img: "assets/sponsers/mukesh.png"},
    {img: "assets/sponsers/om.png"},
    {img: "assets/sponsers/rabindranath.png"},
    {img: "assets/sponsers/riddhi.png"},
    {img: "assets/sponsers/rlight.png"},
    {img: "assets/sponsers/rupam.png"},
    {img: "assets/sponsers/sds.png"},
    {img: "assets/sponsers/shubham.png"},
    {img: "assets/sponsers/sphere.png"},
    {img: "assets/sponsers/ss.png"},
    {img: "assets/sponsers/technotech.png"},
    {img: "assets/sponsers/vishal.png"},
    {img: "assets/sponsers/winglaze.png"},
    {img: "assets/sponsers/nidhi.jpg"},
    {img: "assets/sponsers/reebok.jpg"},
    {img: "assets/sponsers/saffron.jpg"}

  ]
 
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": true,
    "autoplay": true
  };
  sponsorSlideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "dots":false,
    "infinite": true,
    "autoplay": true,
    "vertical": true
  }
}
