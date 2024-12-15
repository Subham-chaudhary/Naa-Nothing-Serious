import { validateUser, logout } from './router.js';
$('document').ready(function () {
    console.log('document loaded');
    validateUser();
    $.ajax({
        url: 'students.csv',
        datatype: 'text',
        success: function (data) {
            var lines = data.split("\n");
            var table = $("#myTable");
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].length == 0) {
                    continue;
                }
                var line = lines[i].split(',');
                table.append("<tr><td><lable for='check" + i + "' >" + line[0] + "</lable></td><td><lable for='check" + i + "' >" + line[1] + "</lable></td><td><lable for='check" + i + "' >" + line[2] + "</td><td><lable for='check" + i + "' >" + line[3] + "</lable></td><td class='text-center' scope='col'><input class='form-check-input bg-dark checkbox' type='checkbox' id='check" + i + "'></lable></td></tr>");
            }

        }
    })

    $('#search').on('input', function (e) {
        var search = $('#search').val().trim().toLowerCase();
        var table = $("#myTable");
        var rows = table.find('tr');
        for (var i = 0; i < rows.length; i++) {
            var name = $(rows[i]).find('td').eq(0).text().toLowerCase();
            var age = $(rows[i]).find('td').eq(1).text();
            var sem = $(rows[i]).find('td').eq(2).text();
            var reg = $(rows[i]).find('td').eq(3).text();
            if (name.includes(search) || age.includes(search) || sem.includes(search) || reg.includes(search)) {
                $(rows[i]).show();
            }
            else {
                $(rows[i]).hide();
            }
        }
    });
    $('#reset').on('click', function (e) {
        $('#search').val('');
        var table = $("#myTable");
        var rows = table.find('tr');
        for (var i = 0; i < rows.length; i++) {
            $(rows[i]).show();
        }
    });
    function checkCheckboxStatus() {
        if ($('table input[type="checkbox"]:checked').length > 0) {
            $('#btnedit, #btndelete').prop('disabled', false);
        } else {
            $('#btnedit, #btndelete').prop('disabled', true);
        }
    }

    function filter_Table() {
        let table = $("#myTable");
        let rows = table.find('tr');
        let checked = [];
        for (let i = 0; i < rows.length; i++) {
            let check = $(rows[i]).find('td').eq(4).find('input').prop('checked');
            if (check) {
                checked.push(i);
            }
        }
        return checked;
    }
    function filterTable(value, action) {
        var table = $("#myTable");
        var rows = table.find('tr');
        for (var i = 0; i < rows.length; i++) {
            var check = $(rows[i]).find('td').eq(4).find('input').prop('checked');
            if (action == "delete") {
                if (check == value) {
                    console.log($(rows[i]).find('td').eq(0).text());
                    $(rows[i]).remove();
                }
            }
            if (action == "edit") {
                if (check == value) {
                    $(rows[i]).show();
                    // for (var j = 0; j < 4; j++) {
                    //     var cell = $(rows[i]).find('td').eq(j);
                    //     if (value == 1) {
                    //         cell.attr('contenteditable', 'true');
                    //     }
                    //     else {
                    //         cell.attr('contenteditable', 'false');
                    //         $(rows[i]).find('td').eq(4).find('input').prop('checked', false);
                    //     }
                    // }
                }
                else {
                    $(rows[i]).hide();
                }
            }


        }

    }


    $('#btnedit').on('click', function () {
        if ($(this).hasClass('btn-success')) {
            $('tbody td').attr('contenteditable', 'false');
            $('tbody input[type="checkbox"]').prop('disabled', false);
            $(this).removeClass('btn-success').addClass('btn-primary');
            filterTable(0, "edit");
            return;
        }
        $('tbody td').attr('contenteditable', 'true');
        $('tbody input[type="checkbox"]').prop('disabled', true);
        $(this).removeClass('btn-primary').addClass('btn-success');
        filterTable(1, "edit");
    });
    $('#btndelete').on('click', function () {
        console.log(filter_Table());
        // filterTable(1, "delete");
    });
    // Recheck on change event
    $('#myTable').on('click', function () {
        checkCheckboxStatus();
    });

    $('#logout').on('click', function () {
        logout();
    })
});
