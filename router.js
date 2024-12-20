function checkLogin(user) {
    if (user && !(notonLogin())) {
        window.location.href = "/";
    } else if (!user && notonLogin()) {
        logout();
    }
}

function notonLogin() {
    let currpage = window.location.pathname;
    if (currpage == "/login.html" || currpage == "/login") {
        return false;
    }
    return true;
}
function logout() {
    try {
        localStorage.removeItem("username");
        window.location.href = "login";
    } catch (e) {
        console.log(e);
    }
}

function validateUser() {
    localStorage.setItem("username", null);
    let username = localStorage.getItem("username");
    if (username === null) {
        return checkLogin(false);
    }
    var found = false;
    $.ajax({
        url: 'pass.csv',
        dataType: 'text',
        success: function (data) {
            var lines = data.split("\n");
            for (var i = 0; i < lines.length && !found; i++) {
                var line = lines[i].split(',');
                if (line.length > 0 && line[0] === username) {
                    found = true;
                }
            }
        },
        error: function (xhr, status, error) {
            console.error("Error: " + error + "\nStatus: " + status + "\nReadyState: " + xhr.readyState);
        },
        complete: function () {
            checkLogin(found);
            return;
        }
    });
}


export { checkLogin, logout, validateUser };
