function compute()
{
    var principal  = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;

    var interest  = principal * years * ( rate/100 );
    var year = new Date().getFullYear()+parseInt(years);
    checkdata();

    document.getElementById('result').innerHTML='If you deposit \<mark>'+ principal  +',\</mark>\<br\>at an interest rate of \<mark>'+ rate +'%.\</mark>\<br\>You will receive an amount of \<mark>'+ interest.toFixed(2) +',\</mark>\<br\>in the year \<mark>'+year+'\</mark>\<br\>';
}

function myOnload()
{
    years();
    hiddenResults();
}
function years()
{
    select = document.getElementById('years');
    for(i = 1; i <= 10; i++){
        option = document.createElement('option');
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}

function updateRate()
{
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML=' '+rateval+'%';
}
function showResults() {
    //Show calculation results area
    var v = document.getElementById('result');
    v.style.display = 'block';
}
function hiddenResults() {
    //Hidde calculation results area
    var v = document.getElementById('result');
    v.style.display = 'none';
}
function checkdata(){
    //create references to the input elements we wish to validate
    var amount = document.getElementById('principal');

    //Check if amount field is empty
    if(amount.value == ''){
          alert('Please enter a valid amount');
          amount.value='';
          amount.focus();
          hiddenResults();
          return false;
    }else if(parseInt(amount.value) <= 0 ){
          alert('Please enter a positive number or greater than zero');
          amount.value='';
          amount.focus();
          hiddenResults();
          return false;
    }
    showResults();
    return true;
  }
  
