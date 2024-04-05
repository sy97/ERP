function tableCreate(){
var tc = new Array();
var html = '';
			
var name = $("#inName").val();
var job = $("#inJob").val();
var age = $("#inAge").val();
var hobby = $("#inHobby").val();
			
html += '<tr>';
html += '<td>'+name+'</td>';
html += '<td>'+job+'</td>';
html += '<td>'+age+'</td>';
html += '<td>'+hobby+'</td>';
html += '</tr>';
			
$("#dynamicTable").append(html);
			
$("#inName").val('');
$("#inJob").val('');
$("#inAge").val('');
$("#inHobby").val('');
}