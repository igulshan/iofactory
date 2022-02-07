function generate_table() {
    var data = document.getElementsByTagName("input")[0];
    var datas=data.value.split(',')
    var arr = datas.map(Number);
    var width=arr.length;
    var height=Math.max(...arr);
    var water =0;
    var s=0;
    var i=0;
    var temparr=[];
    for (var j=0;j<arr.length;j++){
        temparr.push(0);
        if (arr[j]>0){
            water= water+ Math.min(s,arr[j])* (j-i-1);
          var k=i+1;
          while(k<j){
            temparr[k]=Math.min(s,arr[j]);
            k++
          }
            s=arr[j];
            i=j;
        }
    }
    
    var p=document.createElement("p");
    p.innerText=water+'Units';
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(p);
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < height+1; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < width; j++) {
        var cell = document.createElement("td");
        cell.innerText=' ';
        if(temparr[j]>0 && i>height-temparr[j]){
          cell.setAttribute("class","blue");
        }
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 1;
    tbl.setAttribute("border", "1");
}