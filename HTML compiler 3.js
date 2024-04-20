function compileHTML() {
    var htmlInput = document.getElementById('html-input').value;
    var htmlCode = document.getElementById('html-code');
    var output = document.getElementById('output');
  
    htmlCode.innerHTML = htmlInput;
    output.innerHTML = '<h2>Compiled HTML:</h2>' + htmlInput;
  }
//Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

//Build Gulp Task
exports.build = series(scssTask, jsTask);
