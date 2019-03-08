var config = {
  apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
  authDomain: "fir-recent-user.firebaseapp.com",
  databaseURL: "https://fir-recent-user.firebaseio.com",
  storageBucket: "fir-recent-user.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database()

var destination;
var frequency;
var train;
var arrival;
var minAway;