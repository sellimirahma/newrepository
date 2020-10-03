function functiondelete(e){
	$('body').html('')
	console.log(e.target.value)
		$('body').append('<div class="cl"><p class="para">to be able buy a gun you have to verify the condition below</p><label for="ID">Enter your ID</label><input type="text" id="idnumber" name="idnumber"><br><br>'+
			'<label for="passeport" >Enter your passeport number</label><input type="text" id="passnumber" name="passnumber"><br>'+
			'<br><label for="bank">Enter your balance</label><input type="text" id="bank" name="bank"><br><br><label for="status">'+
			'Enter your civil status code</label><input type="text" id="status" name="status"><br><br><button class="btt" onclick="myFunction1()">'+
			'confirm order</button>'+
			'<select name="cars" id="cars">'+
			 ' <option id="1" value="100">100km</option>'+
			 ' <option value="200">200km</option>'+
			  '<option value="300">300km</option>'+'<label for="cars">Choose distance:</label>'+
			  
			'</select><div id="result"></div></div>')

}



// var verification={code1:'waeljouini88',code2:'rahmasellimi',code3:'cohort7verification'}
//  var bankNumbers=[{number1:100},{number2:200},{number3:300}]

 var person=function (name,cin,age,code,balance){
 	return{
 		name:name,
 		cin:cin,
 		age:age,
 		code:code,
 		banace:balance
 	}
 }

 var persons=[person('wael',123,22,123456,500000),person('rahma',456,16,12345678,700000)]
 

// function check1(verification){
		

// }

// function check2(){
// 	for(var i=0 ;i<bankNumbers.length ;i++){
// if($('#bank').value()>10){
// 	return true
// }
// }
// return false
// }

//  function check2(bankNumbers){
// 	for (var i=0;i<bankNumbers.length;i++){
//     for (var key in obj){
	//	if($('#bank').value()<($('#bank').value()) && bankNumbers[i][key]>$('#price')){
// 	}
// return true
// }
//  return false
//  }

 function myFunction1(){
$('#result').html('')
		for(var i=0;i<persons.length;i++){
			console.log($('#status').val(),persons[i].code)
			if($('#status').val()==persons[i].code){
				$('#result').append('<div><h1>yes you can buy it</h1></div>')
				if(Number($('#cars')[0].value)<=100){
				$('#result').append('<div><h1>arrival in 1hour !</h1></div>')
				}else if(100<Number($('#cars')[0].value)<200){
				$('#result').append('<div><h1>arrival in 2hours !</h1></div>')
				}else if(200<Number($('#cars')[0].value)){
				$('#result').append('<div><h1>arrival in 3hours !</h1></div>')
				}



				return;
			}
		}
		$('#result').append('<div><h1>No you can not buy it</h1></div>');

		
 //  if (){
 console.log(Number($('#cars')[0].value))
 // }
 //   
   }


