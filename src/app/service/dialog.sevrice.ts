import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';

export interface DialogConfig {
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  /**
   * Open a custom component in an overlay
   */
  
}
