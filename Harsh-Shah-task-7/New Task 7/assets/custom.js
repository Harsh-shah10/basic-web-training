function validateFormOnSubmit(contact) {
    reason = "";
    reason += validateFName(contact.fname);
    reason += validateLName(contact.lname);
    reason += validateEmail(contact.email);
    reason += validateUrl(contact.url);
    reason += validatePhone(contact.phone);
    reason += validatePet(contact.pet);
    reason += validateDisclaimer(contact.disclaimer);
    reason += validateAddress(contact.address);
    reason += validateHobby(contact.hobby);
    reason += validatePassword(pass);
    reason += validateCPassword(cpass)
    
    

    // keeps the below script ok
    console.log(reason);
    if (reason.length > 0) {

        return false;
    } else {
        return false;
    }
}

// validate required fields

    // First name block
function validateFName(fname) {
    var error = "";
    var alphaExp = /^[a-zA-Z]+$/;

    if (fname.value.length == 0) {  //length cannot be zero
        fname.style.background = 'Red';
        document.getElementById('fname-error').innerHTML = "The first name field has not been filled in";
        var error = "1";
    }
    else if (!isNaN(fname)) {  //first name  cannot be no
        fname.style.background = 'Red';
        document.getElementById('fname-error').innerHTML = "Only characters are allowed";
        var error = "1";
    }
    else if (!fname.value.match(alphaExp)) { //test for illegal characters
        fname.style.background = 'Red';
        document.getElementById('fname-error').innerHTML = "Please enter a valid character.";
        var error = "2"; 
    }
    else {
        fname.style.background = 'White';
        document.getElementById('fname-error').innerHTML = '';
    }
    return error;
}


    // Last Name block
function validateLName(lname) {
    var error = "";
    var alphaExp = /^[a-zA-Z]+$/;

    if (lname.value.length == 0) {  //length cannot be zero
        lname.style.background = 'Red';
        document.getElementById('lname-error').innerHTML = "The Last name field has not been filled in";
        var error = "1";
    }
    else if (!isNaN(lname)) {  //length cannot be zero
        lname.style.background = 'Red';
        document.getElementById('lname-error').innerHTML = "Only characters are allowed";
        var error = "1";
    }
    else if (!lname.value.match(alphaExp)) { //test for illegal characters
        fname.style.background = 'Red';
        document.getElementById('lname-error').innerHTML = "Please enter a valid character..";
        var error = "2"; 
    }
    else {
        lname.style.background = 'White';
        document.getElementById('lname-error').innerHTML = '';
    }
    return error;
}

    // email address block
    function validateEmail(email) {
    var error = "";
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value == "") {
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        var error = "3";
    } 
    else if (email.length < 3){ //test email for illegal characters
        let athIndex = email.indexOf("@");
        let dothIndex = email.indexOf(".");

        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        var error = "4";
    } 

    else if (!email.value.match(mailformat)) { //test for valid email format
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Please enter a valid email format..";
        var error = "5"; 
    }

    else if (email.value.match(illegalChars)) {
        email.style.background = 'Red';
        var error = "6";
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } 
    else {
        email.style.background = 'White';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

    // validate URL
    var urlformat= /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;


    function validateUrl(url) {
            
        if (url.value.length == 0) {  //length cannot be zero
            url.style.background = 'Red';
            document.getElementById('url-error').innerHTML = "The url field has not been filled in";
            var error = "7";
        }
        
        else if (!url.value.match(urlformat)) { //test for valid email format
            email.style.background = 'Red';
            document.getElementById('url-error').innerHTML = "Please enter a valid URL format..";
            var error = "5"; 
        }

        // else if (url.includes("https") || url.includes("http") ) {     
        //         url.style.background = 'Red';
        //         document.getElementById('url-error').innerHTML = "url must include http or https";
        //         var error = "7";
        //         return error = true;               
        // }  Some issue wit implementation
        
        else {
            lname.style.background = 'White';
            document.getElementById('lname-error').innerHTML = '';
            
        }
        return error;
        
    }

    // why its not working no idea :..
    // function validateUrl(url){
    //     if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {  //url

    //     lname.style.background = 'White';
    //     document.getElementById('lname-error').innerHTML = '';
    
    //     }
    //     else {
    //         url.style.background = 'Red';
    //         document.getElementById('url-error').innerHTML = "The url does not have http";
    //         var error = "8";
    //     }
    //     return error;
    // }


// validate phone for required and format
function validatePhone(phone) {
    var error = "";
   

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Please enter a phone number";
        phone.style.background = 'Red';
        var error = '8';
    
    } else if (phone.value.length < 10) {
        var error = "10";
        document.getElementById('phone-error').innerHTML = "The phone number is too short.";
        phone.style.background = 'Red';


        
    } 
    else if (phone.value.search(/(0|91)?[7-9][0-9]{9}/)==-1) {
        var error = "10";
        document.getElementById('phone-error').innerHTML = "The phone number should start with 7 8 or 9.";
        phone.style.background = 'Red';
     
    }
    else {
        phone.style.background = 'White';
        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}



function validatePet(pet) {
    if ((contact.pet[0].checked == false) && (contact.pet[1].checked == false)) {
        document.getElementById('pet-error').innerHTML = "Gender required";
        var error = "22";
    } else {
        document.getElementById('pet-error').innerHTML = '';
    }
    return error;
}


function validateDisclaimer(disclaimer) {
    var error = "";

    if (document.getElementById("disclaimer").checked === false) {
        document.getElementById('disclaimer-error').innerHTML = "Required";
        var error = "4";
    } else {
        document.getElementById('disclaimer-error').innerHTML = '';
    }
    return error;
}


//address

function validateAddress(address) {
    var num = document.forms["contact"]["address"];
    var y = num.value;


    if (y.length == 0){
       
            address.style.background = 'Red';
            document.getElementById("add-error").innerHTML = "Length of address cannot be zero";
            var error = "10";
    }
    else if (y.length > 125){
        document.getElementById("add-error").innerHTML = "Length of address should not be more than 125";
            var error = "10";

    }
    else {
        address.style.background = 'White';
        document.getElementById('add-error').innerHTML = '';
    }
    return error;
}

// hobbby

function validateHobby(hobby) {
    var hob = document.forms["contact"]["hobby"].value;
    
    if (hobby.value == "Select Hobby"){
            hobby.style.background = 'Red';
            document.getElementById("hobby-error").innerHTML = "Choose any hobby";
            var error = "18";
    }
    else {
        hobby.style.background = 'White';
        document.getElementById('add-error').innerHTML = '';
    }
    return error;
}

// password 

function validatePassword(pass) {


    if (pass.value.length == 0){
            pass.style.background = 'Red';
            document.getElementById("pass-error").innerHTML = "please enter a password";
            var error = "10";
    }
    else if(pass.value.length < 8){
        pass.style.background = 'Red';
        document.getElementById("pass-error").innerHTML = "Password length should be greater than 8 characters";
        var error = "10";
        
    }
    else if (pass.value.length > 14){
        document.getElementById("pass-error").innerHTML = "Password length should be maximum 14 characters long";
        var error = "10";

    }
    else if(pass.value.search(/[0-9]/)==-1){
        document.getElementById("pass-error").innerHTML = "atleast 1 digit. required";
        var error = "10";
    }
    else if(pass.value.search(/[a-z]/)==-1){
        document.getElementById("pass-error").innerHTML = "atleast 1 lower case alphabet required";
        var error = "10";
    }
    else if(pass.value.search(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)==-1){
        document.getElementById("pass-error").innerHTML = "atleast 1 Special character required";
        var error = "10";
    }
    else {
        pass.style.background = 'White';
        document.getElementById('pass-error').innerHTML = '';
    }
    return error;
}








// Verifying password



    function validateCPassword(cpass) {
  
    if (cpass.value.length == 0) {  //length cannot be zero
        cpass.style.background = 'Red';
        document.getElementById('cpass-error').innerHTML = "Password cannot be blank";
        var error = "1";
    }    
    else if (cpass.value != pass.value) {
        document.getElementById('cpass-error').innerHTML = "Password is not same";
        cpass.style.background = 'Red';
        var error = '8';

    } else {
        cpass.style.background = 'White';
        document.getElementById('cpass-error').innerHTML = '';
    }
    return error;
}

// previewing the image
function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }

