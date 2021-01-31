$('[name=dyntable_length]').val(200);
$('[name=dataTables_length]').val(200);

 x = $('#dyntable').find('tr');

 Feedback =0;
 Permission =0;
 Complaint =0;
 Suggestion=0;
 No_Feedback =0;
 Feedback_less_than_4_words =0



for ( step = 1; step < x.length; step++){
  feedback_type= x[step].getElementsByTagName('td')[6].textContent;
  feedback_content = x[step].getElementsByTagName('td')[7].textContent;
  if(feedback_type.includes( "Feedback")){
    Feedback++;
  }
  if(feedback_type.includes("Permission")){
    Permission++;
    x[step].setAttribute("style", "background:yellow")
  }
  if (feedback_type === "") {
No_Feedback ++;
}
if (feedback_type.includes("Complaint")) {
  Complaint ++;
    }
if (feedback_type.includes("Suggestion")) {
      Suggestion ++;
        }
}
if(feedback_content.split(" ").length < 4){
  Feedback_less_than_4_words++;
  alert(feedback_content);
}

// console.log(Feedback)
// console.log(Permission)

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

["Feedback", "Permission", "Complaint","Suggestion", "No Feedback","Feedback less than 4 words"].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryHeader").appendChild(z);
});

var y = document.createElement("TR");
y.setAttribute("id", "SummaryBody");
document.getElementById("SummaryTable").appendChild(y);

[Feedback, Permission, Complaint, Suggestion, No_Feedback,Feedback_less_than_4_words].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryBody").appendChild(z);
});
