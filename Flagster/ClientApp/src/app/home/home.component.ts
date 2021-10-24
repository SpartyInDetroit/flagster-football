import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  private touches = new Map<string, number>()

  private tds = new Map<string, number>()

  public getTouches(name: string): number {
    if (this.touches.has(name)) {
      return this.touches.get(name);
    }

    return 0;
  }

  public decrementTouchesCounter(name: string) {
    let t = this.getTouches(name);
    if (t > 0) {
     t--;
    }
    this.touches.set(name, t);
  }

  public incrementTouchesCounter(name: string) {
    let t = this.getTouches(name);
    t++;
    this.touches.set(name, t);
  }

  public getTds(name: string): number {
    if (this.tds.has(name)) {
      return this.tds.get(name);
    }

    return 0;
  }

  public decrementTdCounter(name: string) {
    let t = this.getTds(name);
    if (t > 0) {
      t--;
    }
    this.tds.set(name, t);
  }

  public incrementTdCounter(name: string) {
    let t = this.getTds(name);
    t++;
    this.tds.set(name, t);
  }
}
