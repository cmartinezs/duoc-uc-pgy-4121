import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  @ViewChild(IonTitle, {read: ElementRef})
  profileTitle!: ElementRef<HTMLIonTitleElement>

  constructor(
    private animationController: AnimationController
  ) { }

  ngAfterViewInit(): void {
    this.viewChildAnimation()
    this.selectorAnimation();
  }
  
  viewChildAnimation() {
    if (this.profileTitle) {
      console.log('Componente ion-title iniciado')
      this.animationController.create()
      .addElement(this.profileTitle.nativeElement)
      .duration(5000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .play();
    } else {
      console.log('Componente ion-title no iniciado')
    }
  }

  selectorAnimation() {
    const el = document.querySelector('#profileTitle')
    if (el) {
      console.log('Componente selector ion-title iniciado')
      this.animationController.create()
      .addElement(el)
      .duration(1500)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.1, transform: 'scale(1)', opacity: '1' },
        { offset: 0.11, transform: 'translateX(100px)', opacity: '1' },
        { offset: 0.15, transform: 'translateX(200px)', opacity: '1' },
        { offset: 0.2, transform: 'translateX(100px)', opacity: '1' },
        { offset: 0.3, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 0.5, transform: 'scale(2)', opacity: '0.1' },
        { offset: 0.8, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]).play();
    } else {
      console.log('Componente selector ion-title no iniciado')
    }
  }

  ngOnInit() {
  }

}
