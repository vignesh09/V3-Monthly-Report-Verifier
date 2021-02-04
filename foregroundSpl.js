// $("[name=dyntable_length]").val(200);

// $("#dyntable_length").append("<div id=\"first_message\"><h1>After selecting 500 from the dropdown menu click the button</h1><br /><button id= \"get_report_button\">Get Report</button></div>");

  // event.preventDefault();
  // document.addEventListener("mousewheel", this.mousewheel.bind(this), { passive: false });
  $("#first_message").remove();
x = $("#dyntable").find("tr");
$("#dyntable_length").attr("style", "width: 100% !important");
// $('#SummaryTable').attr('style', 'width: 100% !important');
Feedback = [];
Permission = [];
Complaint = [];
Suggestion = [];
No_Feedback = [];
Feedback_less_than_4_words = [];
Video_not_viewed = [];


//**********************************************************************New logic**************************************88
Suggestion = [];
Feedback_less_than_4_words = [];
Feedback = [];
video_not_viewed_data = [];
permission_complaint_data = [];
for (step = 1; step < x.length; step++) {
  feedback_type = x[step].getElementsByTagName("td")[6].innerHTML;
  feedback_content = x[step].getElementsByTagName("td")[7].innerHTML;
  feedback_cutoffTime = x[step].getElementsByTagName("td")[4].innerHTML;
  video_viewed_times = x[step].getElementsByTagName("td")[3].textContent;

  if (feedback_type.includes("Feedback")) {
    Feedback.push([feedback_cutoffTime, feedback_type, feedback_content]);
    if (
      feedback_content.split(" ").length < 4 &&
      feedback_content.split(" ").length > 0
    ) {
      Feedback_less_than_4_words.push([
        feedback_cutoffTime,
        feedback_type,
        feedback_content,
      ]);
      // alert(feedback_content);
    }
  }

  if (feedback_type.includes("Suggestion")) {
    Suggestion.push([feedback_cutoffTime, feedback_type, feedback_content]);
  }

  if (feedback_type.includes("Permission")) {
    Permission.push([feedback_cutoffTime, feedback_type, feedback_content]);
    x[step].setAttribute("style", "background:yellow");
  }

  if (feedback_type.includes("Complaint")) {
    Complaint.push([feedback_cutoffTime, feedback_type, feedback_content]);
    x[step].setAttribute("style", "background:yellow");
  }
  if (feedback_type === "") {
    No_Feedback.push([feedback_cutoffTime, feedback_type, feedback_content]);
  }
  if (video_viewed_times === " ") {
    Video_not_viewed.push([
      feedback_cutoffTime,
      feedback_type,
      feedback_content,
    ]);
  }
  if (video_viewed_times === " " || feedback_type === "") {
    video_not_viewed_data.push([
      feedback_cutoffTime,
      feedback_type,
      feedback_content,
    ]);
    found_permission = false;
    for (i = step + 1; i <= step + 6 && i<x.length; i++) {
      feedback_type = x[i].getElementsByTagName("td")[6].innerHTML;
      feedback_content = x[i].getElementsByTagName("td")[7].innerHTML;
      feedback_cutoffTime = x[i].getElementsByTagName("td")[4].innerHTML;
      video_viewed_times = x[i].getElementsByTagName("td")[3].textContent;

      if (
        feedback_type.includes("Complaint") ||
        feedback_type.includes("Permission")
      ) {
        found = false;
        permission_complaint_data.forEach((item, i) => {
          if (item[0] === feedback_cutoffTime) {
            found = true;
          }
        });

        if (!found) {
          permission_complaint_data.push([
            feedback_cutoffTime,
            feedback_type,
            feedback_content,
          ]);
          found_permission = true;
        }
      }
    }
    if (!found_permission) {
      permission_complaint_data.push(["", "", ""]);
    }
  }
}

//*************************************************************************************************************************

// console.log(Feedback)
// console.log(Permission)

tb = document.getElementById("SummaryTable");
if (tb) {
  tb.remove();
}
tb = document.getElementById("summarytable_container");
if (tb) {
  tb.remove();
}
x = document.createElement("TABLE");
x.setAttribute("id", "SummaryTable");
document.getElementById("dyntable_length").appendChild(x);

var y = document.createElement("TR");
y.setAttribute("id", "SummaryHeader");
document.getElementById("SummaryTable").appendChild(y);

[
  "Feedback",
  "Video Not viewed",
  "Permission",
  "No Feedback",
  "Complaint",
  "Feedback less than 4 words",
  "Suggestion",
].forEach((item, i) => {
  var z = document.createElement("TD");
  z.setAttribute("style","border:1px solid black;");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryHeader").appendChild(z);
});

var y = document.createElement("TR");
y.setAttribute("id", "SummaryBody");
document.getElementById("SummaryTable").appendChild(y);

[
  Feedback,
  Video_not_viewed.length,
  Permission.length,
  No_Feedback.length,
  Complaint.length,
  Feedback_less_than_4_words.length,
  Suggestion.length,
].forEach((item, i) => {
  var z = document.createElement("TD");
  z.setAttribute("style","border:1px solid black;");
  var t = document.createTextNode(item);
  z.appendChild(t);
  document.getElementById("SummaryBody").appendChild(z);
});
$("#SummaryTable").attr("style", "width: 100% !important");
$("#SummaryTable").css("border", "1px solid black");
$("#SummaryTable").css("border-collapse", "collapse");

summarytable_large =
  '<div class="container" id="summarytable_container"> <div class="table-responsive"> <div class="table-wrapper"> <div class="table-title"> <div class="row"> <div class="col-sm-8"><h2>Summary Report</b></h2></div> </div> </div> <table class="table table-bordered" id="summarytable-large"> <thead> <tr> <th>Video/Feedback Missed Date</th> <th>Status</th> <th>Feedback Type</th> <th>Permission Date</th> <th>Permission</th> <th>Permission Content</th> </tr> </thead><tbody>';

data = "";

for (var i = 0; i < video_not_viewed_data.length; i++) {
  
  if(permission_complaint_data[i][1].includes("Complaint")){

    data = data.concat("<tr style=\"background:yellow;\"> <td>", video_not_viewed_data[i][0], "</td>");
  
  }
  else{
  data = data.concat("<tr> <td>", video_not_viewed_data[i][0], "</td>");
}
  data = data.concat("<td>", video_not_viewed_data[i][1], "</td>");
  data = data.concat("<td>", video_not_viewed_data[i][2], "</td>");
  data = data.concat("<td>", permission_complaint_data[i][0], "</td>");
  data = data.concat("<td>", permission_complaint_data[i][1], "</td>");
  data = data.concat("<td>", permission_complaint_data[i][2], "</td> </tr>");
}
// <tr> <td>John Doe</td> <td>Administration</td> <td>(171) 555-2222</td> </tr>
// alert(data)

//Permission - all permissions[]
//permission_complaint_data - next six videos permission and complaint data irruku
permission_complaint_time = permission_complaint_data.map(data => data[0]);

extra_permission = [];
// alert(permission_complaint_time);
// Permission.forEach(item => {
//   // alert(permission_complaint_time.includes(item[0]))
//    if(!permission_complaint_time.includes(item[0])) {
//     extra_permission.push(item)
//    }
// });

for(i=video_not_viewed_data.length;i<permission_complaint_data.length; i++){
  extra_permission.push(permission_complaint_data[i]);
}
extra_permission.forEach(item=>{
  data = data.concat("<tr><td></td>");
  data = data.concat("<td></td>");
  data = data.concat("<td></td>");
  data = data.concat("<td>", item[0], "</td>");
  data = data.concat("<td>", item[1], "</td>");
  data = data.concat("<td>", item[2], "</td> </tr>");

});

extra_complaint = [];
Complaint.forEach(d => {
   if(!permission_complaint_time.includes(d[0])) {
    extra_complaint.push(d)
   }
});

extra_complaint.forEach(item=>{
  data = data.concat("<tr><td></td>");
  data = data.concat("<td></td>");
  data = data.concat("<td></td>");
  data = data.concat("<td>", item[0], "</td>");
  data = data.concat("<td>", item[1], "</td>");
  data = data.concat("<td>", item[2], "</td> </tr>");

});

summarytable_large = summarytable_large.concat(
  data,
  " </tbody> </table> </div> </div> </div>"
);

$("#dyntable_length").append(summarytable_large);
$("#summarytable_container").attr("style", "width: 100% !important");

//************************************If special video permission is there */


// $('head').append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script><style>.table-responsive{overflow-x: inherit !Important;}')

$("head").append(
  '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script><style>th{color:white;}.table-responsive{overflow-x: inherit !Important;}'
);
//
// $('head').append('<script> console.log("hello world");$(document).ready(function(){ $(\'[data-toggle="tooltip"]\').tooltip(); var actions = $("table td:last-child").html();$(".add-new").click(function(){ $(this).attr("disabled", "disabled"); var index = $("table tbody tr:last-child").index(); var row = \'<tr>\' + \'<td><input type="text" class="form-control" name="name" id="name"></td>\' + \'<td><input type="text" class="form-control" name="department" id="department"></td>\' + \'<td><input type="text" class="form-control" name="phone" id="phone"></td>\' + \'<td>\' + actions + \'</td>\' + \'</tr>\'; $("table").append(row); $("table tbody tr").eq(index + 1).find(".add, .edit").toggle(); $(\'[data-toggle="tooltip"]\').tooltip(); }); $(document).on("click", ".add", function(){ var empty = false; var input = $(this).parents("tr").find(\'input[type="text"]\'); input.each(function(){ if(!$(this).val()){ $(this).addClass("error"); empty = true; } else{ $(this).removeClass("error"); } }); $(this).parents("tr").find(".error").first().focus(); if(!empty){ input.each(function(){ $(this).parent("td").html($(this).val()); }); $(this).parents("tr").find(".add, .edit").toggle(); $(".add-new").removeAttr("disabled"); } }); $(document).on("click", ".edit", function(){ $(this).parents("tr").find("td:not(:last-child)").each(function(){ $(this).html(\'<input type="text" class="form-control" value="\' + $(this).text() + \'">\'); }); $(this).parents("tr").find(".add, .edit").toggle(); $(".add-new").attr("disabled", "disabled"); }); $(document).on("click", ".delete", function(){ $(this).parents("tr").remove(); $(".add-new").removeAttr("disabled"); }); }); </script>')

