$(document ).ready(function() {

    loadData();
    
    function loadData(){
        employeesRef.get().then(function (querySnapshot) {
            loadTableData(querySnapshot)
        })
    }

    function loadTableData(querySnapshot){
        var tableRow='';
        querySnapshot.forEach(function(doc) {
            var document = doc.data();
            tableRow += '<tr>';
            tableRow += '<td class="fname">' + document.fName + '</td>';
            tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style+"color:green"></i></td>';
            tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style+"color:green"></i></td>';
            tableRow += '</tr>';
        })
        $('tbody.tbodyData').html(tableRow);
    }
    
    //get all the data on app startup
    $('#createEmployee').click(function(){
        $('.employeeForm').css("display", "block");
        $('#dynamicBtn').text('Save Changes')
    });

    $('#dynamicBtn').click(function(){
        //employee form values
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var age = $("#age").val();
        var gender = $("#gender").val();
        var yearsOfExperience = $("#yearsOfExperience").val();
        var isfulltime = $('#isFullTime').is(":checked")

        //check if you need to create or update an employee
        if($(this).text() == "Save Changes"){
            var docuName = fname.charAt(0) + "." + lname;
            db.collection("employees").doc(docuName).set({
                fName: fname,
                lName: lname
            }).then(function(docRef) {
                $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Employee was created!</div>').delay(2500).fadeOut('slow');
                $('.employeeForm').css("display", "none");
                loadData();
            })
        }
        else{
            var docuName = fname.charAt(0) + "." + lname;
            var sfDocRef = db.collection("employees").doc(docuName);
            sfDocRef.set({
                fName: fname,
                lName: lname
            }, {merge: true})
            .then(function() {
                $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong>,/div>');
                $('.employeeForm').css("display", "none");
                loadData();
            })
        }
    });

    // Cancel the Employee form
    $('#cancel').click(function(){
        $('.employeeForm').css("display", "none");
    });

    // Get the data of the employee you want to edit
    $("tbody.tbodyData").on("click","td.editEmployee", function(){
        $('.employeeForm').css("display", "block");
        $('#dynamicBtn').text('Update Employee');

        $("#fname").val($(this).closest('tr').find('.fname').text());
        $("#lname").val($(this).closest('tr').find('.lname').text());
        $("#email").val($(this).closest('tr').find('.email').text());
        $("#age").val($(this).closest('tr').find('.age').text());
        $("#gender").val($(this).closest('tr').find('.gender').text());
        $("#yearsOfExperience").val($(this).closest('tr').find('.yearsofexperience').text());
        $("#isFullTime").prop('checked', $(this).closest('tr').find('.isfulltime').text() === 'true');
    });

    // Delete employee
    $("tbody.tbodyData").on("click","td.deleteEmployee", function(){
        //Get the Employee Data
        var fName = $(this).closest('tr').find('.fname').text(); //First Name
        var lName = $(this).closest('tr').find('.lname').text(); //Last Name
    });

    $("#searchEmployee" ).change(function() {
        console.log('You entered: ', $(this).val());
      });
});