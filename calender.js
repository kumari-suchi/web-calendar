let dt=new Date();
function RenderDate(){

dt.setDate(1);
console.log(dt.getDay());

//current date
//document.getElementById("date_str").innerHTML=dt.toDateString();


let endDate=new Date(
    dt.getFullYear(),
    dt.getMonth()+1,
    0                
).getDate();
//console.log(endDate);

let preDate=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0                
).getDate();

let today=new Date();
//Month
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
/*console.log(dt.getMonth());*/
//console.log(months[dt.getMonth()]);
document.getElementById("mon").innerHTML=months[dt.getMonth()];
document.getElementById("date_str").innerHTML=new Date().toDateString();

let day=dt.getDay();
let arr="";
for (let x = day; x >0; x--) {
    arr+="<div id='preday'>" + (preDate-x+1) + "</div>";
    
}

//day
//let arr="";
for (let i = 1; i <=endDate; i++) {
    if(i==today.getDate() && dt.getMonth()==today.getMonth())
    {
        arr+="<div id='today'>" + i + "</div>";
    }
    else{
        arr+="<div>" + i + "</div>";
    }
}
document.getElementsByClassName("day")[0].innerHTML=arr;
}
function moveDate(para)
{
 if(para=='prev')
 {
    dt.setMonth(dt.getMonth()-1);
 }
 else{
    dt.setMonth(dt.getMonth()+1);
 }
 RenderDate();
}