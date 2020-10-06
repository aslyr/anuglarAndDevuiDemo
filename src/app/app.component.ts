import { Component } from '@angular/core';
import {AccordionItemClickEvent, IFileOptions, IUploadOptions} from 'ng-devui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App1';
  fileOptions: IFileOptions = {
    multiple: true,
    accept: '.*',
  };
  uploadedFiles: Array<object> = [];
  uploadedFiles1: Array<object> = [];
  uploadOptions: IUploadOptions = {
    uri: '/upload',
    headers: {},
    maximumSize: 1000,
    method: 'POST',
    fileFieldName: 'dFile'
  };
  onSuccess(result){
    console.log(result);
  }

  onChange(event){
    console.log(event);
  }
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  menu = [
    {
      title: '内容一',
      open: true,
      children: [{ title: '子内容1', link: 'http://www.baidu.com' , linkType: 'hrefLink' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容二',
      children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容三（默认展开）',
      open: true,
      children: [{ title: '子内容1(禁用)', disabled: true }, { title: '子内容2(默认激活)', active: true }, { title: '子内容3' }],
    },
  ];

  itemClick(event: AccordionItemClickEvent) {
    console.log(event.item);
  }
}
