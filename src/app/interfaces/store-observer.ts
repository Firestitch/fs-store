import { Observer } from 'rxjs';

export interface StoreObserver {
  name: string;
  observer: Observer<any>;
}
