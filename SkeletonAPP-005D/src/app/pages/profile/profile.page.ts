import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  @ViewChild(IonTitle, { read: ElementRef})
  ionTitleRef!: ElementRef<HTMLIonTitleElement>

  constructor(
    private animationController: AnimationController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.viewChildAnimation();
    this.animationById()
  }

  animationById(){
    const element = document.getElementById('subHeader');
    if(element){
      this.animationController
      .create()
      .addElement(element)
      .duration(3000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ])
      .play()
    }
  }

  viewChildAnimation(){
    this.animationController
      .create()
      .addElement(this.ionTitleRef.nativeElement)
      .duration(3000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0')
      .play()
  }
}
