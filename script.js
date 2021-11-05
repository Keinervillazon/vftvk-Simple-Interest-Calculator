function compute()
{
    var c = document.getElementById('amount').value;
    var i = document.getElementById('rate').value;
    var t = document.getElementById('years').value;
    var fecha= new Date();
    var year = parseInt(fecha.getFullYear())+parseInt(t);
    var receive = c*(i/100)*t;

    document.getElementById('amountval').innerHTML=' '+ c +',';
    document.getElementById('rateval').innerHTML=' '+ i +'%.';
    document.getElementById('receive').innerHTML=' '+ receive.toFixed(2) +',';
    document.getElementById('yearval').innerHTML=' '+ year +'.';
    checkdata();
}
function myOnload()
{
    var i = document.getElementById('rate').value;
    document.getElementById('ratevalue').innerHTML=' '+ i +'%';
    years();
    hiddenResults();
}
function years()
{
    select = document.getElementById("years");
for(i = 1; i <= 25; i++){
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}
}

function rateChange()
{
    var r = document.getElementById('rate').value;
    document.getElementById('ratevalue').innerHTML=' '+r+'%';
}
function showResults() {
    var v = document.getElementById("result");
        v.style.display = "block";
}
function hiddenResults() {
    var v = document.getElementById("result");
        v.style.display = "none";
}
function checkdata(){
    //create references to the input elements we wish to validate
    var amount = document.getElementById("amount");
    var rate = document.getElementById("rate");

    //Check if amount field is empty
    if(amount.value == ""){
          alert("Please enter a valid amount");
          amount.focus();
          return false;
    }else if(parseInt(amount.value) == 0){
          alert("Please enter a nonzero value");
          amount.focus();
          return false;

    }
    showResults();
    return true;
  }
  
