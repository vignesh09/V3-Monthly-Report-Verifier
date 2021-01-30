$('[name=dyntable_length]').val(200);
$('[name=dataTables_length]').val(200);

 x = $('#dyntable').find('tr');

 Feedback =0;
 Permission =0;
 Complaint =0;

for ( step = 1; step < x.length; step++){
  if(x[step].textContent.includes("Feedback")){
    Feedback++;
  }
  if(x[step].textContent.includes("Permission")){
    Permission++;
    x[step].setAttribute("style", "background:yellow")
  }
}

console.log(Permission)
console.log(Feedback)

tb = document.getElementById('SummaryTable');
if(tb) {
  tb.remove();
}

x = document.createElement("TABLE");
x.setAttribute("id", "SummaryTable");
document.getElementById('dyntable_length').appendChild(x);

var y = document.createElement("TR");
y.setAttribute("id", "SummaryHeader");
document.getElementById("SummaryTable").appendChild(y);

["Feedback", "Permission", "Complaint"].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryHeader").appendChild(z);
});

var y = document.createElement("TR");
y.setAttribute("id", "SummaryBody");
document.getElementById("SummaryTable").appendChild(y);

[Feedback, Permission, Complaint].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryBody").appendChild(z);
});
