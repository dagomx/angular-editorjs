import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import RawTool from '@editorjs/raw';

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
      // Id of Element that should contain the Editor 
      holderId: 'codex-editor',

      autofocus: true,
      placeholder: 'Type your content here...',

      onReady: () => {
        console.log('Editor.js is ready to work!')
      },

      // Available Tools list. 
      // Pass Tool's class or Settings object for each Tool you want to use 
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: true
        },
        raw: RawTool
      },
    });
  }

  save() {
    this.editor.save().then((outputData) => {
      console.log('Article data: ', outputData);
      console.log('JSON data:', JSON.stringify(outputData));
    }).catch((error) => {
      console.log('Saving failed: ', error);
    });
  }

}
