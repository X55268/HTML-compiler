function compileHTML() {
    var htmlInput = document.getElementById('html-input').value;
    var htmlCode = document.getElementById('html-code');
    var output = document.getElementById('output');
  
    htmlCode.innerHTML = htmlInput;
    output.innerHTML = '<h2>Compiled HTML:</h2>' + htmlInput;
  }