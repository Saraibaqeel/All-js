
/* <!-- --------------        CHAPTER 37 TO 42       --------------- --> */
// --------Q #01----------
//var a=prompt("Enter base");
//var b=prompt("Enter Power");
//var c=Math.pow(a,b)
//alert(c);

// --------Q #02----------
//function saraib() {
    //var a=prompt("enter");
   // var b=(a%4);
   // if(b==0){
   //     alert("its leap");
   // }
   // else{
   //     alert("not leap");
   // }
//}


// --------Q #03----------

 //saraib();

  //var a;
 // var b;
  //var c;
  //var v;

   
 //function side() {


  // a=+prompt("Enter side A");
  // b=+prompt("Enter side B");
  // c=+prompt("Enter side C");
  //  d=(a+b+c);
  //   v=(d/2);
 // alert(v);
 //} 
 //function triangle(){
 
    
    
  //var e=v*(v-a)*(v-b)*(v-c);
  //alert(e);
 
 //}

    

 //side();
 //triangle();


 // --------Q #04----------


 //function main() {

     
 
    

 //var a=+prompt("Enter marks out of 100 of sub 1");
 //var b=+prompt("Enter marks out of 100  of sub 2");
 //var c=+prompt("Enter marks out of 100  of sub 3");
  
 
  
  // function marks() {
        
  //  var v=(a+b+c);
     //       var avg=(v/3);

     //       alert( "Average =" + avg);
        
   // }
  // function qw(){
   // var v=(a+b+c);
   // alert("Obtain  marks=" + v);
   
    //   var t=300;
    
    //   var per=(v/t)*100;
    //   alert(   per + "%"   );


 //  }

        
// marks();
//  qw();
//}


//main();



// --------Q #05----------

// function indexof(){
// const paragraph = "Here is Amna Zafar, The most pretty girl...!! Amna Zafar doing bachelor's from Duet";

// const searchTerm = "Amna";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// document.write('The index of the first '+searchTerm +" from the beginning is " +indexOfFirst+"<br>");


// document.write('The index of the 2nd '+searchTerm+ " is " +paragraph.indexOf(searchTerm, (indexOfFirst + 1))+"<br>");
// }

// indexof()

// --------Q #06----------

// function vowels(){

//     var sentence="The way we are talking"
//     document.write("String with vowels: "+ sentence+"<br>")
//     if(sentence.length>25){
//         alert("morethan 25 characters not allowed")
//     }
//     else if(sentence.length==0){
//         alert("0 length string error")
//     }
//     else{
//         var string=sentence.toLowerCase()
//         strings= string.replace( /[aeiou]/g, '' );              

//          document.write("String without vowels: "+strings+"<br>");
//  }

// }

// vowels()

// --------Q #07----------

// function vowels2() {
//     var str = "Pleases read this application and give me gratuity";
//     var result = str.match(/[aeiou]{2}/g);
//     document.write("Such occurrences are: "+result+"<br>")
// }
  
// vowels2();

// --------Q #08----------
//var a=+prompt("Enter distance in KM" );
 
//function meters(){
  //var met=(a*1000);
  //alert ( "Distance in Meters=" + met);
 
//}
//function feet(){
  // var fe=(a*3280.84);
  // alert("Distance in feet=" +fe);

//}
//function inches(){
  // var inc=(a*39370.1);
  // alert("Distance in inches=" + inc);

//}
//function centimeters(){
   //var cent=(a*100000);
  // alert("Distance in centimeters=" +cent);


//}
// meters();
 //feet();
 //inches();
 //centimeters();

 // --------Q #09----------

  //var a=+prompt("Enter hours");

  //if(a>40){
  //  var b=a-40;
   // var c=b*12;
   // alert(c);


 // }
  //else {
    // alert("You don't done overtime");
  //}


   // --------Q #10----------  


    //var inputArray = [];
 //var size = 3; //Maximum Array size

 //for(var i=0; i<size; i++) {
	
	
  // inputArray[i] = prompt('Enter Element ' + (i+1));
  
 //}
 //alert("your amount=" +inputArray[0]+inputArray[1]+inputArray[2])
 //alert(inputArray[0]+ " "+ "hundred notes");
 //if(inputArray[1]<5){
   //alert(inputArray[1]+ " "+"ten notes");
 //}

 //if(inputArray[1]>5){

   //alert("1 50 note"  )
   //alert(inputArray[1]-5+ " "+ "10 notes");

 //}
          /* <!-- --------------        CHAPTER 43 TO 48       --------------- --> */
   
          // --------Q# 01 & 02----------
  //function mobile(){
    // alert("Thanks for purchasing a phone from us");
  //}

// --------Q #03----------

// function myFunction1() {
//     document.getElementById("myTable").deleteRow(1);
//   }

//   function myFunction2() {
//     document.getElementById("myTable").deleteRow(2);
//   }

//   function myFunction3() {
//     document.getElementById("myTable").deleteRow(3);
//   }


// function myFunction4() {
//     document.getElementById("myTable").deleteRow(4);
//   }

//   function myFunction5() {
//     document.getElementById("myTable").deleteRow(5);
//   }

//   function myFunction6() {
//     document.getElementById("myTable").deleteRow(6);
//   }

//   function myFunction7() {
//     document.getElementById("myTable").deleteRow(7);
//   }

//   function myFunction8() {
//     document.getElementById("myTable").deleteRow(8);
//   }

//   function myFunction9() {
//     document.getElementById("myTable").deleteRow(9);
//   }

//   function myFunction10() {
//     document.getElementById("myTable").deleteRow(10);
//   }

//
// --------Q #04----------
 //function changePic1() {
   //document.getElementById("myImg").src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626276301";
    //}
     //function changePic2(){
      //document.getElementById("myImg").src = "https://drop.ndtv.com/TECH/product_database/images/610201613909AM_635_moto_z_force.jpeg";
      //}

     
      // --------Q #05----------
       //var count = 0;
      
       //var displayCount = document.getElementById("displayCount");
         //function countButton(){
         //count++;
      //displayCount.innerHTML = count;
       //}
       //function resetButton(){
         //count --;
         //displayCount.innerHTML = count;
       //}

       //* <!-- --------------        CHAPTER 49 TO 52       --------------- --> */
       // --------Q #01----------
       //function display() {
         
       //  message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
       // message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
       //  message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
       //  document.write(message);
      // }
     
    // --------Q #02----------
     // function readmore(){
       // var text="It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.";
        //var para =document.getElementById('para');
        //para.innerHTML=text;
      
     // }
     // --------Q #03----------

// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }

  /* <!-- --------------        CHAPTER 53 TO 58       --------------- --> */


// --------Q #01----------



//function showImage(e){

  //  var showImage=document.getElementById("modal")
    //showImage.src=e.src;
//}
// --------Q #01----------
//var fontSize = 1;
//function zoomIn() {
	//fontSize += 1;
	//document.body.style.fontSize = fontSize + "em";
//}
//function zoomOut() {
	//fontSize -= 1;
	//document.body.style.fontSize = fontSize + "em";
//}

            /* <!-- --------------        CHAPTER 59 TO 67       --------------- --> */




            // --------Q #01----------           



// ----------      PART 1      ----------

//var a=document.getElementById("main-content")
//console.log(a)



// ----------      PART 2      ----------

//var a=document.getElementById("main-content")
//console.log(a.childNodes)



// ----------      PART 3      ----------

//var a=document.getElementById("main-content")
//a.appendChild(render)



// ----------      PART 4      ----------

//var a= document.getElementById("first-name").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("firstname")
//a.appendChild(p)



// ----------      PART 5      ----------

//var a= document.getElementById("last-name").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("last-name")
//a.appendChild(p)

//var a= document.getElementById("email").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("email")
//a.appendChild(p)



// --------Q #02----------



// ----------      PART 1      ----------

//var a=document.getElementById("main-content")
//console.log(a.nodeType)



// ----------      PART 2      ----------

//var a=document.getElementById("lastName")
//console.log(a.childnode[0].nodeType)



// ----------      PART 3      ----------

//var a=document.getElementById("lastName")
//console.log=target.setAttribute('id', 'Last end')



// ----------      PART 4      ----------

//var a=document.getElementById("main-content")
//console.log(a.firstChild)

//var a=document.getElementById("main-content")
//console.log(a.lastChild)



// ----------      PART 5      ----------

//var a=document.getElementById("lastName")
//console.log(a.nextSibling)

//var a=document.getElementById("lastName")
//console.log(a.previousSibling)

//var a=document.getElementById("email")
//console.log(a.parentNode)

//var a=document.getElementById("email")
//console.log(a.nodeType)


     











