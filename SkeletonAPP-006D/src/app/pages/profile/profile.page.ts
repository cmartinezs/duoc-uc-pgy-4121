import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  @ViewChild(IonTitle, { read: ElementRef })
  ionTileHeader!: ElementRef<HTMLIonTitleElement>;

  constructor(
    private animationController: AnimationController
  ) { }

  ngAfterViewInit(): void {
    this.headerAnimation();
    this.subHeaderAnimation();
  }

  headerAnimation() {
    this.animationController
    .create()
    .addElement(this.ionTileHeader.nativeElement)
    .duration(3000)
    .iterations(2)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0')
    .play()
  }

  subHeaderAnimation(){
    const el = document.getElementById('subHeader');
    if(el){
      this.animationController
      .create()
      .addElement(el)
      .duration(3000)
      .iterations(2)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ])
      .play()
    }
  }

  ngOnInit() {
  }




}
