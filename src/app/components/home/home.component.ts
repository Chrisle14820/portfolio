import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleUser,
  faSquarePhone,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faCircleUser = faCircleUser;
  faPhone = faSquarePhone;
  faFilePdf = faFilePdf;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
