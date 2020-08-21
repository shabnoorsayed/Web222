// Data for the "HTML Lists" Page

const fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

const directory = [
  { type: 'file', name: 'file1.txt' },
  { type: 'file', name: 'file2.txt' },
  {
    type: 'directory',
    name: 'HTML Files',
    files: [
      { type: 'file', name: 'file1.html' },
      { type: 'file', name: 'file2.html' }
    ]
  },
  { type: 'file', name: 'file3.txt' },
  {
    type: 'directory',
    name: 'JavaScript Files',
    files: [
      { type: 'file', name: 'file1.js' },
      { type: 'file', name: 'file2.js' },
      { type: 'file', name: 'file3.js' }
    ]
  }
];

fruitList = "<ol>"
for (var i = 0; i < fruits.length; i++) {
  fruitList += "<li>" + fruits[i] + "</li>" 
  }
  fruitList += "</ol>";
  document.getElementById("fruits").innerHTML = fruitList;

directoryList = "<ul>"
for (var i = 0; i < directory.length; i++) {
  if(directory[i].type === "file") {
    directoryList += "<li>" + directory[i].name + "</li>";
    } else if(directory[i].type === "directory") {
        directoryList += "<li>" + directory[i].name + "</li>";
        for(var j = 0; j < directory[i].files.length; j++) {
            directoryList += "<ul><li>" + directory[i].files[j].name + "</li></ul>";
        }
    }
  }
document.getElementById("directory").innerHTML = directoryList;