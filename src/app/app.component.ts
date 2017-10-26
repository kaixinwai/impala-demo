import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef
} from '@angular/core';
import { GenericMarker, PortalHostOverlay } from 'impala/bmap';
import { CustomData } from './custom-data';
import { Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  zoom: number;

  center: BMap.Point;

  map: BMap.Map;

  @ViewChild('popup')
  popupTemplateRef: TemplateRef<any>;

  private popupHostOverlay: PortalHostOverlay;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private defaultInjector: Injector,
    private viewContainerRef: ViewContainerRef,
    private changeDetector: ChangeDetectorRef) {
  }

  onMapLoaded(map: BMap.Map) {
    this.map = map;
    this.center = new BMap.Point(120, 31);
    this.zoom = 11;
    this.changeDetector.detectChanges();

    const marker: GenericMarker<CustomData> = new GenericMarker(this.center, {}, {
      name: 'hello',
      lon: this.center.lng,
      lat: this.center.lat
    });
    map.addOverlay(marker);
    marker.addEventListener('mouseover', () => {
      this.showCustomerPopup(marker.data);
    });
    marker.addEventListener('mouseout', () => {
      this.hidePopup();
    });

    const popupHostOverlay = this.popupHostOverlay = new PortalHostOverlay(this.componentFactoryResolver,
      this.appRef, this.defaultInjector);
    map.addOverlay(popupHostOverlay);
  }

  showCustomerPopup(customer: CustomData) {
    this.popupHostOverlay.detach();

    const portal: Portal<any> = new TemplatePortal(this.popupTemplateRef, this.viewContainerRef);
    this.popupHostOverlay.attach(portal, customer.lon, customer.lat);
  }

  hidePopup() {
    this.popupHostOverlay.detach();
  }

}
