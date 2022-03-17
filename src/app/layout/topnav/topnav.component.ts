import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: []
})
export class TopnavComponent implements OnInit {

  Search: String = '';
  link1 : string | null = '';
  link2 : string | null = '';
  link3 : string | null = '';
  link4 : string | null = '';



  constructor( private router: Router) { 
 this.updateLink();
  }

  updateLink() {
    this.link1 = localStorage.getItem('Link1');
    this.link2 = localStorage.getItem('Link2');
    this.link3 = localStorage.getItem('Link3');
    this.link4 = localStorage.getItem('Link4'); 
  }

  createLink() {
    const url = this.router.url.split('/');
    const text = `${url[1]}/${this.Search}`;
    if (this.link1 && !this.link2 && !this.link3 && !this.link4) {
      localStorage.setItem('Link2', text);     
    } else if (this.link1 && this.link2 && !this.link3 && !this.link4) {
      localStorage.setItem('Link3', text);     
    } else if (this.link1 && this.link2 && this.link3 && !this.link4) {
      localStorage.setItem('Link4', text);      
    } else if(this.link1 && this.link2 && this.link3 && this.link4) {
      localStorage.setItem('Link1', this.link2);  
      localStorage.setItem('Link2', this.link3);
      localStorage.setItem('Link3', this.link4);
      localStorage.setItem('Link4', text);  
    } else {
      localStorage.setItem('Link1', text);      
    }
    return text;
  }

  search() {
    if (this.Search.length==0) {
      return;
    }
    const text = this.createLink();
    this.updateLink(); 
    this.router.navigate([text]); 
    this.Search = '';    
  }

  activatedLink(text: string) {
    this.router.navigate([text]);
  }



  ngOnInit(): void {
  }

}
