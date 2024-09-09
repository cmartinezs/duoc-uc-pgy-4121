import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonButton, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  @ViewChild(IonTitle, { read: ElementRef })
  ionTitle!: ElementRef<HTMLIonTitleElement>

  constructor(
    private animationController: AnimationController
  ) { }

  ngAfterViewInit(): void {
    this.animateHeader();
    this.animateSubHeader();
  }

  ngOnInit() {
  }

  animateHeader() {
    this.animationController.create()
      .addElement(this.ionTitle.nativeElement)
      .duration(500)
      .fromTo('transform', 'translateX(0px) scale(1)', 'translateX(00px) scale(2)')
      .fromTo('opacity', '1', '0')
      .play()
  }

  animateSubHeader() {
    const subheader = document.getElementById('subheader')
    if(subheader) {
      this.animationController.create()
      .addElement(subheader)
      .duration(3000)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ])
      .play()
    }
  }

}
