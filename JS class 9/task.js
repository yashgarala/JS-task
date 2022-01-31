

    var table_data="<table> <tr><th>Name</th><th>Email</th><th>Contact Us</th><th>Technology</th><th>gender</th></tr>";
function getRow( all_data)
{
    // let copy_icon='<i  class="fa fa-copy"></i>'
    let col="";
    console.log(all_data);
    // for(let x in all_data)
    for(let x=0;x<all_data.length;x++)
    {
        // console.log(all_data[x].value);
       
        col+="<td>"+all_data[x].value+"</td>";
    }
    
    console.log(col);
    var gender=document.querySelectorAll('input[name="gender"]');
    for(let x of gender )
    {
        if(x.checked){
            col+="<td>"+x.value+"</td>";
        }
    }
    // let row="<td>"+"<b>"+a+"</b>"+"</td>"+"<td>"+b+"</td>"+"<td>"+copy_icon+"</td>";
    table_data+="<tr>"+col+"</tr>";
    return table_data;
}
function getlog()
{
    var all_data=document.getElementsByClassName("form-control");
        table_data=getRow(all_data);
    
    // console.log(all_data);
    var table_div=document.getElementById("table-div");
    table_div.innerHTML=table_data;
}

contact.onblur = function()
{
    if(contact.value.length!=10)
    {
        number_error.innerHTML="mobile number must be 10 digit";
    }
    else{
        number_error.innerHTML="";
    }
}