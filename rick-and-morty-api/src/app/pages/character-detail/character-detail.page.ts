import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  characterId: string | null = 'sin parametro';
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.characterId = this.route.snapshot.paramMap.get('id');
  }

}
