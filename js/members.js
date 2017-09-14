$(document).ready(function() {

    /* Bar graph members */
    $.ajax({
        type: "GET",
        url: "members-signup.php",
        cache: false,
        success: function(data) {
            var graph = [];
            for (var i = 0; i < data.length; i++) {
                var bar = [];
                bar.push(data[i].signups);
                bar.push(data[i].year);
                bar.push('#f3f3f3');
                graph.push(bar);
            }
            $('#divForGraph').jqBarGraph({
                data: graph,
                width: 800
            });
        }
    });

    /* Display all members */
    setTimeout(function() {
        $("table").find("tr:gt(0)").remove();
        $.ajax({
            type: "GET",
            url: "members-all.php",
            cache: false,
            success: function(data) {
                var tr;
                for (var i = 0; i < data.length; i++) {
                    tr = $('<tr/>');
                    tr.append("<td>" + data[i].firstname + "</td>");
                    tr.append("<td>" + data[i].surname + "</td>");
                    tr.append("<td>" + data[i].email + "</td>");
                    $('table').append(tr);
                }
            }
        });
    }, 1500);

});


/* Search member */
$('#submit-member-form').click(function() {
    $("table").find("tr:gt(0)").remove();
    var firstname = $('.fname').val();
    var surname = $('.sname').val();
    var email = $('.email').val();
    var details = {
        'fname=': firstname,
        '&sname=': surname,
        '&email=': email
    };

    var dataString = ''
    for (var key in details) {
        if (details[key] !== '') {
            dataString += key + details[key];
        }
    }

    $.ajax({
        type: "GET",
        url: "members.php",
        data: dataString,
        cache: false,
        success: function(data) {
            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + data[i].firstname + "</td>");
                tr.append("<td>" + data[i].surname + "</td>");
                tr.append("<td>" + data[i].email + "</td>");
                $('table').append(tr);
            }
        }

    });

});
