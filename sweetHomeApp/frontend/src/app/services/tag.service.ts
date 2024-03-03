import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tagActive: string;

  constructor() { }

  updateTagActive(tag: string) {
    this.tagActive = tag;
  }
}
