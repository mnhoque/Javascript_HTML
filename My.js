let d = new Date();
//alert(d);
var str = d.toGMTString(); //Mon, 18 Dec 1995 17:28:35 GMT
//alert(str);

//var fullDate = this.d + " " + this.d + ":00";
var b=str.slice(0,10);
var c=str.split(' ');
var e=c[Symbol.iterator]();
var dagen =e.next().value;
var date =e.next().value; 
var month = e.next().value;
var year = e.next().value;
//alert(month);
var dateString= month+" "+ date +" "+year;
var date = new Date(dateString);
//alert(date.getMonth());
var result = (date.getMonth()+1)+"/"+date.getDate() +"/" + date.getFullYear();

//alert(dateString);

//alert(result);
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"*/
var number = Math.floor(Math.random() * 10) + 1;
//alert(number);
function myFunction() {
    var str = document.getElementById("searchTxt").value;
    var i = str.length;
    var x = str[i-1];
    alert(x);
    var arrVars = str.split(x);
    var lastVar = arrVars.pop();
    var restVar = arrVars.join("/");
    //alert(lastVar);
    var newStr=x+restVar;
    document.getElementById("demo").innerHTML = newStr;
    //alert(newStr);

    //alert(x);
  }
  var count = 0;
  function CheckMatch(){
    var match=false;
    var enteredNumber=0;
    count++;
    var newStr="";
    alert(number);
    enteredNumber = parseInt(document.getElementById("search_Txt").value);
    if(enteredNumber==number){
        
        newStr= "You are win and " + "You have tried "+ count+ "times";
        document.getElementById("demo1").innerHTML = newStr;
    }else{
        //count++;
        newStr= "You are loser and " + "You have tried "+ count+ "times";
        document.getElementById("demo1").innerHTML = newStr;
    }
  }
function calculateDays(){
    var enteredDate=(document.getElementById("date_Txt").value);
    alert(enteredDate);

    var date1 = new Date(enteredDate);
    alert(date1);

    var date2 = new Date(result);
    alert(date2);
    var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10); 

    alert(diffDays );
    var newstr= "The difference between "+enteredDate+" and "+result+" is "+diffDays;
    document.getElementById("show_days").innerHTML = newstr;
  }
  function my_Function() {
    var name = document.getElementById("btnClick").value;
    alert(name);
    var text="";
    if((name[0]=="p")&&(name[1]=="y")){
        text=name;
        alert(text);
    }else{
        text="py"+name;
        alert(text);
    }
    document.getElementById("show_Text").innerHTML=text;
  }
  function checkNearer() {
    var difference_To_firstNumber=0;
    var first_Number = parseInt(document.getElementById("f_Number").value);
    alert(first_Number);
    if(first_Number>=100){
        difference_To_firstNumber=first_Number-100;
    }else{
        difference_To_firstNumber=100-first_Number;
    }

    var difference_To_LastNumber=0;
    var last_Number = parseInt(document.getElementById("l_Number").value);
    alert(last_Number);
    if(last_Number>=100){
        difference_To_LastNumber=last_Number-100;
    }else{
        difference_To_LastNumber=100-last_Number;
    }

    if(difference_To_firstNumber>difference_To_LastNumber){
        document.getElementById("show_Result").innerHTML=(last_Number+" is nearer to "+100);
    }else{
        document.getElementById("show_Result").innerHTML=(first_Number+" is nearer to "+100);
    }

    //alert(first_Number+last_Number);
  }
  function GuessingGame(){
    var x = document.getElementById("first_one").elements.namedItem("guess").value;
    
    alert(x);
    }