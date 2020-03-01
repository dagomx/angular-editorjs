import { Component, OnInit } from '@angular/core';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  editor: any;

  ngOnInit() {
    this.editor = new EditorJS({
      /** 
       * Id of Element that should contain the Editor 
       */
      holderId: 'codex-editor',

      /** 
       * Available Tools list. 
       * Pass Tool's class or Settings object for each Tool you want to use 
       */
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: true
        }
      },
    });
  }

  save() {
    this.editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }

}
