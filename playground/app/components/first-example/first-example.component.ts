import { Component } from '@angular/core';
import { FsStore } from '../../../../src';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html'
})
export class FirstExampleComponent {

  data = null;
  constructor(private FsStore: FsStore) {
    FsStore.observe('data').subscribe((store) => {
      this.data = store.value;
    });
  }

  public clear() {
    this.FsStore.clear();
  }

  public set() {
    this.FsStore.set('data', { name: 'John Doe' });
  }

  public get() {
    alert(JSON.stringify(this.FsStore.get('data')));
  }
}