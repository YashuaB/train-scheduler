$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyCe6Q9XTRg82qXbPgBuZe15pWbkY1_CXTE",
    authDomain: "project-1-51592.firebaseapp.com",
    databaseURL: "https://project-1-51592.firebaseio.com",
    projectId: "project-1-51592",
    storageBucket: "project-1-51592.appspot.com",
    messagingSenderId: "568196330741"
  };

  firebase.initializeApp(config);



var database = firebase.database()




$("#submit").click(function(){
  

  var destination = $("#destination-input").val().trim()
  var frequency = $("#frequency-input").val().trim()
  var train = $("#train-input").val().trim()
  var firstTime = $("#train-time-input").val().trim()
  
   database.ref().push({
    destination: destination,
    frequency: frequency,
    train: train,
    firstTime: firstTime
  })
})
  
    database.ref().on("child_added", function (childSnapshot){
      
      var newDestination = childSnapshot.val().destination
      var newFrequency = childSnapshot.val().frequency
      var newName = childSnapshot.val().train
      var newTime = childSnapshot.val().firstTime


      var startTimeConv =  moment(newTime, "hh:mm").subtract(1, "years")

      var currentTime = moment()

      var difTime = moment().diff(moment(startTimeConv), "minutes")
      var timeRemainder = difTime % newFrequency

      var minTillArival =  newFrequency - timeRemainder 

      var nextTrain = moment().add(minTillArival, "minutes")
      var nextTrainConv = moment(nextTrain).format("hh:mm")

     
      $("#display").append(
        ' <tr><td>' + newName +
        ' </td><td>' + newDestination +
        ' </td><td>' + newFrequency +
        ' </td><td>' +  nextTrainConv +
        ' </td><td>' + minTillArival + ' </td></tr>');
      
    })
})

//import firebase from 'firebase/app';
//import 'firebase/database'; 

 

    