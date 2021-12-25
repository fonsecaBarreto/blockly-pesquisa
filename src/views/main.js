import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';

import * as PTBR from 'blockly/msg/pt-br';
import { setup } from '../blocks/index'
Blockly.setLocale(PTBR);
setup(Blockly);




var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Basico",
        "contents": [
          {
            "kind": "block",
            "type": "change_bgcolor"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Outro",
        "contents": [
          {
            "kind": "block",
            "type": "controls_ifelse"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      }
    ]
}; 

(function(){
    const codeDisplay = document.querySelector("#code-display>code")

    document.addEventListener("DOMContentLoaded", function () {

        const workspace = Blockly.inject('blocklyDiv',
            {
                toolbox: document.getElementById('toolbox'),
                media: 'media/',
                scrollbars:true,
                toolbox
            });
    
        const lang = 'JavaScript';
        const button = document.getElementById('blocklyButton');
        button.addEventListener('click', function () {
            const code = Blockly[lang].workspaceToCode(workspace);
            codeDisplay.innerHTML=code
        })
    });
    
})()


