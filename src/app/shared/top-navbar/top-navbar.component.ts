import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ContactComponent } from 'src/app/feature/contact/contact.component';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  activeLink: number = 1;
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  linkClick(link:number){
    this.activeLink = link;
  }

  openContactComponent(){
    const initialState = {
      title: 'Contact'
    };
    this.bsModalRef = this.modalService.show(ContactComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
