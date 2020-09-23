import { Component } from '@angular/core';
import { Feature, geom } from 'openlayers';



@Component({
  selector: 'app-root',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  selectLayer = 'Circle'
  selectEdit = false

  endCircle(feat: Feature) {
    const polygon = feat.getGeometry() as geom.Polygon;
    console.log(polygon.getCoordinates());

  }

  _x_cordinate = 114.1617943950622
  _y_cordinate = 30.496726507764578

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }
  onDrawEnd() {
    console.log('onDrawEnd');
  }
}
