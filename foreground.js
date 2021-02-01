
$('[name=dyntable_length]').val(200);

 x = $('#dyntable').find('tr');

 Feedback =0;
 Permission =[];
 Complaint =[];
 Suggestion=[];
 No_Feedback =[];
 Feedback_less_than_4_words =[];
 Video_not_viewed = []



for ( step = 1; step < x.length; step++){
  feedback_type= x[step].getElementsByTagName('td')[6].textContent;
  feedback_content = x[step].getElementsByTagName('td')[7].textContent;
  feedback_cutoffTime = x[step].getElementsByTagName('td')[4].textContent;
  video_viewed_times=x[step].getElementsByTagName('td')[3].textContent;

  if(feedback_type.includes( "Feedback")){
    Feedback++;
  }
  if(feedback_type.includes("Permission")){
    Permission.push([feedback_cutoffTime,feedback_type,feedback_content]);
    x[step].setAttribute("style", "background:yellow")
  }
  if (feedback_type === "") {
No_Feedback.push([feedback_cutoffTime,feedback_type,feedback_content]);
}
if(video_viewed_times === ""){
  Video_not_viewed.push([feedback_cutoffTime,feedback_type,feedback_content]);
}
if (feedback_type.includes("Complaint")) {
  Complaint.push([feedback_cutoffTime,feedback_type,feedback_content]);
    }
if (feedback_type.includes("Suggestion")) {
      Suggestion.push([feedback_cutoffTime,feedback_type,feedback_content]);
        }
}
if(feedback_content.split(" ").length < 4 && feedback_content.split(" ").length > 0){
  Feedback_less_than_4_words.push([feedback_cutoffTime,feedback_type,feedback_content]);
  // alert(feedback_content);
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

["Feedback", "Permission", "Complaint","Suggestion","Video Not viewed", "No Feedback","Feedback less than 4 words"].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryHeader").appendChild(z);
});

var y = document.createElement("TR");
y.setAttribute("id", "SummaryBody");
document.getElementById("SummaryTable").appendChild(y);

[Feedback, Permission.length, Complaint.length, Suggestion.length, Video_not_viewed.length, No_Feedback.length,Feedback_less_than_4_words.length].forEach((item, i) => {
  var z = document.createElement("TD");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryBody").appendChild(z);
});

summarytable_large='<div class="container"> <div class="table-responsive"> <div class="table-wrapper"> <div class="table-title"> <div class="row"> <div class="col-sm-8"><h2>Summary Report</b></h2></div> </div> </div> <table class="table table-bordered" id="summarytable-large"> <thead> <tr> <th>Video/Feedback Missed Date</th> <th>Status</th> <th>Feedback Type</th> <th>Permission Date</th> <th>Permission</th> <th>Permission Content</th> </tr> </thead><tbody>'

data = "";
for (var i = 0; i < Permission.length; i++) {
  data = data.concat('<tr> <td>',Permission[0][0],'</td> </tr>')
}
 // <tr> <td>John Doe</td> <td>Administration</td> <td>(171) 555-2222</td> </tr>
alert(data)
 summarytable_large=summarytable_large.concat(data,' </tbody> </table> </div> </div> </div>');

$('#dyntable_length').append(summarytable_large);

// $('head').append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script><style>.table-responsive{overflow-x: inherit !Important;}')


$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script><style>th{color:white;}.table-responsive{overflow-x: inherit !Important;}')
//
// $('head').append('<script> console.log("hello world");$(document).ready(function(){ $(\'[data-toggle="tooltip"]\').tooltip(); var actions = $("table td:last-child").html();$(".add-new").click(function(){ $(this).attr("disabled", "disabled"); var index = $("table tbody tr:last-child").index(); var row = \'<tr>\' + \'<td><input type="text" class="form-control" name="name" id="name"></td>\' + \'<td><input type="text" class="form-control" name="department" id="department"></td>\' + \'<td><input type="text" class="form-control" name="phone" id="phone"></td>\' + \'<td>\' + actions + \'</td>\' + \'</tr>\'; $("table").append(row); $("table tbody tr").eq(index + 1).find(".add, .edit").toggle(); $(\'[data-toggle="tooltip"]\').tooltip(); }); $(document).on("click", ".add", function(){ var empty = false; var input = $(this).parents("tr").find(\'input[type="text"]\'); input.each(function(){ if(!$(this).val()){ $(this).addClass("error"); empty = true; } else{ $(this).removeClass("error"); } }); $(this).parents("tr").find(".error").first().focus(); if(!empty){ input.each(function(){ $(this).parent("td").html($(this).val()); }); $(this).parents("tr").find(".add, .edit").toggle(); $(".add-new").removeAttr("disabled"); } }); $(document).on("click", ".edit", function(){ $(this).parents("tr").find("td:not(:last-child)").each(function(){ $(this).html(\'<input type="text" class="form-control" value="\' + $(this).text() + \'">\'); }); $(this).parents("tr").find(".add, .edit").toggle(); $(".add-new").attr("disabled", "disabled"); }); $(document).on("click", ".delete", function(){ $(this).parents("tr").remove(); $(".add-new").removeAttr("disabled"); }); }); </script>')
