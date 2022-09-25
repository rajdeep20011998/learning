import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { iconObject } from './model';
//import { fabric } from "fabric";
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';
import * as $ from "jquery";
import { Canvas } from 'fabric/fabric-impl';






@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss']
})

export class SlideNavComponent {

  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;

  todo = [
    
    //'../../assets/documentbot.png,Documentbot',
    
    //'../../assets/Emailboat.png,Emailbot',
    
    //'../../assets/microsoft-5 1.png,Microsoft',   
    
    //'../../assets/onedrive-1.png,Onedrive',
       
    //'../../assets/googledrive.png,Onedrive',
       
    '../../assets/whatsapp.svg,Whats-app',
    
   // '../../assets/Document.png,Document',
    
    //'../../assets/salforce.png,Salesforce',
    
    '../../assets/Gmail.svg,Gmail',
    
    //'../../assets/Fleshdesk.png,Fleshdesk',
    '../../assets/google.svg,Google'
];

  done = [''];

  getContent(item: string, index: number) {
    return item.split(',')[index] || '';
  }
  
  


  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizeSVG() {
    this.canvas.rasterizeSVG();
  }

  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }

  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  public confirmClear() {
    this.canvas.confirmClear();
  }

  public changeSize() {
    this.canvas.changeSize();
  }

  public addText() {
    this.canvas.addText();
  }

  public getImgPolaroid(event) {
    this.canvas.getImgPolaroid(event);
  }

  public addImageOnCanvas(url) {
    this.canvas.addImageOnCanvas(url);
  }

  public readUrl(event) {
    this.canvas.readUrl(event);
  }

  public removeWhite(url) {
    this.canvas.removeWhite(url);
  }

  public addFigure(figure) {
    this.canvas.addFigure(figure);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public sendToBack() {
    this.canvas.sendToBack();
  }

  public bringToFront() {
    this.canvas.bringToFront();
  }

  public clone() {
    this.canvas.clone();
  }

  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }

  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  public setId() {
    this.canvas.setId();
  }

  public setOpacity() {
    this.canvas.setOpacity();
  }

  public setFill() {
    this.canvas.setFill();
  }

  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  public setTextAlign(value) {
    this.canvas.setTextAlign(value);
  }

  public setBold() {
    this.canvas.setBold();
  }

  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  public hasTextDecoration(value) {
    this.canvas.hasTextDecoration(value);
  }

  public zoom(value=10) {
    this.canvas.zoom(value);
  }

}