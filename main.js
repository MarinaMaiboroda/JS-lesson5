var answers = ['anv4', 'anv2', 'anv1'];
// var un_correct_anv =[];

// function checkAnswer(user_answer) {
// 	var correct_anv = 0; 
// 	for (i=0; i<user_answer.length; i++){
// 	 	if (user_answer[i] == answers[i]){
// 	 		correct_anv = correct_anv + 1;
// 	 	}else{
// 	 		un_correct_anv.push(user_answer[i]);
// 	 	}
// 	} 

// 	document.write("Количество правельных: "+ correct_anv + "<br/> Неправельные ответы: "+ un_correct_anv);	
//  } 

// var btn = document.getElementById('send_btn');

// btn.onclick = function(event){
// 	event.preventDefault();
// 	var user_answers = document.getElementsByTagName('input');
// 	var checkedValue = [];

// 	for (i=0; i<user_answers.length; i++ ){ 
// 		if(user_answers[i].checked){
//            checkedValue.push(user_answers[i].value);
//         }
// 	}

// 	if (checkedValue.length < answers.length){
// 		alert('You have not answered all questions');
// 	}else{
// 		checkAnswer(checkedValue);
// 	}



// }

/*
jQuery == $ //Тоже самое*/

function checkAnswer(user_answer) {
    var correct_anv = 0; 
    var un_correct_anv = []; 
 	for (i=0; i<user_answer.length; i++){
	 	if (user_answer[i] == answers[i]){
 	 		correct_anv = correct_anv + 1;
 	 	}else{
 	 		un_correct_anv.push(user_answer[i]);
 	 	}
 	} 

 	$('#send_btn').after("<p>Количество правельных: "+ correct_anv + "</p><p>Неправельные ответы: "+ un_correct_anv +"</p>");
}


$('#send_btn').click(function(event){
	event.preventDefault();
	var user_answer = [];

	$('input').each(function(){
		if ($(this).is(':checked')){
			user_answer.push($(this).val());
		}
	});

	checkAnswer(user_answer);
});
