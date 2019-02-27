import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ContactComponent } from 'src/app/feature/contact/contact.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
