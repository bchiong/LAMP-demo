
$('#submit-member-form').click(function(){
//   alert('Hello world');
        var firstname = $('.fname').val();
        var surname = $('.sname').val();
        var email = $('.email').val();
        var details = {'fname=':firstname, '&sname=':surname, '&email=':email};
        // var dataString = 'firstname=' + firstname + '&surname=' + surname + '&email=' + email;
        var dataString = ''
        for (var key in details) {
            if (details[key] !== '') {
                dataString += key + details[key];
            } 
        }
   
      
   console.log(dataString);
//   console.log(dataString2 + '2');
        $.ajax({
            type: "GET",
            url: "members.php",
            data: dataString,
            cache: false,
            success: function (data) {
                // var obj = JSON.stringify(data);
                // $('search-result-table').text('')
                console.log(data);
                
        //         var tr;
        // for (var i = 0; i < data.length; i++) {
        //     tr = $('<tr/>');
        //     tr.append("<td>" + data[i].firstname + "</td>");
        //     tr.append("<td>" + data[i].surname + "</td>");
        //     tr.append("<td>" + data[i].email + "</td>");
        //     $('table').append(tr);
        // }
            }
            
        });
        
}); 