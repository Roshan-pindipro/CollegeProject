function getReport(){

  var grade = "";  //declare a variable for grade
  var  result="";  //declare a variable for result

  //read the marks
  var subject1Marks = parseInt(document.getElementById('txtSubmarks1').value);
  var subject2Marks = parseInt(document.getElementById('txtSubmarks2').value);
  var subject3Marks = parseInt(document.getElementById('txtSubmarks3').value);
  var subject4Marks = parseInt(document.getElementById('txtSubmarks4').value);
  var subject5Marks = parseInt(document.getElementById('txtSubmarks5').value);
  var subject6Marks = parseInt(document.getElementById('txtSubmarks6').value);
  
  //calculate the total marks (using double notation technique)
   var totalMarks = subject1Marks- (- subject2Marks) - (- subject3Marks) - (- subject4Marks)- (- subject5Marks) - (-subject6Marks);
  
  //get the average marks
  var averageMarks = totalMarks / 6;                  
  
  //find the grade and result using the ternary operator inside the switch statement                  
  switch(
  
      
          //usage of ternary operator inside switch

          (averageMarks > 60 && averageMarks <= 100) ? 1 : 
          (averageMarks > 50 && averageMarks < 60) ? 2 : 
          (averageMarks > 40 && averageMarks < 50) ? 3 : 0 
        )
          
          {
              case 1 :grade = "A";result="First Class";break;
              case 2 :grade = "B"; result="Second Class";break;
              case 3 :grade = "C"; result="Third Class";break;
              case 0 :grade = "D"; result="Fail";break;
          }
          
      
  //display the results   
  document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
  document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
  document.getElementById('txtStudentRegno').value = document.getElementById('txtRegno').value;
  document.getElementById('txtTotalMarks').value = totalMarks;
  document.getElementById('txtAvgMarks').value = averageMarks;
  document.getElementById('txtGrade').value = grade;
  document.getElementById('txtResult').value = result;

}

document.getElementById("myBtn").addEventListener("click", function(){
  getReport();
});