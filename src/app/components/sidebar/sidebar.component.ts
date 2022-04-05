import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCircleUser,
  faFolderClosed,
  faBars,
  faEnvelope,
  faSquarePhone,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface ITab {
  title: string;
  content: string;
  removable: boolean;
  disabled: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  faCircleUser = faCircleUser;
  faBars = faBars;
  faCode = faFolderClosed;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faPhone = faSquarePhone;
  faHouse = faHouse;
  isHamburguer = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }
  goToLink(link: string): void {
    this.router.navigateByUrl(link);
  }
}
