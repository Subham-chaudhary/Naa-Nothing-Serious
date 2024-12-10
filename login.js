import {validateUser} from './router.js';
$('document').ready(function () {
    console.log('document loaded');
     validateUser();
    $('form').on('submit', function (e) {
        console.log('form submitted');
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username, password);
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        if (!password.match(/[0-9]/) || !password.match(/[A-Z]/) || !password.match(/[a-z]/)) {
            alert('Password must contain at least one digit, one uppercase letter and one lowercase letter.');
            return;
        }
        $.ajax({
            url: 'pass.csv',
            dataType: 'text',
            success: function (data) {
                var lines = data.split("\n");
                var found = false;
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i].split(',');
                    console.log(line);
                    if (line[0] == username && line[1] == password) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    alert('Wrong username or password.');
                    return;
                }
                localStorage.setItem("username", username);
                alert('Login successful.' + '\nWelcome ' + username);
                window.location.href = "index.html";
            }
        });
    });
});