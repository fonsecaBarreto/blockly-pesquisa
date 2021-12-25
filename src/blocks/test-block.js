

export function TestBlock(Blockly){

    Blockly.defineBlocksWithJsonArray([
        {
      "type": "change_bgcolor",
      "message0": "Trocar Cor %1",
      "args0": [
          {
              "type": "field_dropdown",
              "name": "VALUE",
              "options": [
                  ["Azul", "#11f"],
                  ["Vermelho", "#f11"],
                  ["Verde", "#1f1"],
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 355
    }
    ]);

    Blockly.JavaScript['change_bgcolor'] = function(block) {
        let value = '\'' + block.getFieldValue('VALUE') + '\'';
        return 'changeBgColor(' + value + ');\n';
    };

    function changeBgColor (color = "red") {
        const body = document.querySelector("body");
        console.log(body)
        body.style.backgroundColor = color
    }


}