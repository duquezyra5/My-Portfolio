let result=0;
let days = Number (prompt ("Enter No of Days}}
if(!(days----String)){
    switch (days&7)  {
	    case0:
		  result="Tuesday";
		  break;;
		case1:
		  result="Wednesday";
		  break;
	    case2:
		  result="Thursday";
		  break;
		case3:
		  result="Friday";
		  break;
		case4:
		 result="Saturday";
		 break;
		case5:
		result="Sunday";
		break;
		case6:
		result="Monday";
	}
  documents.getElementById("show").innerhtml=
  <h1>On ${DAYS} Day It is$(result} </h1>
  <h4>Note: -This Code automatically
  Generate from Calender of March 2023</h4>
  <p>On the basis of above code you can Find
  what day will be on nthday</p>
  ;
  }else{
      document.getElementById(
	  "show"
	  ).innerHTML= <h2> only Number input is Accepted</h2>;