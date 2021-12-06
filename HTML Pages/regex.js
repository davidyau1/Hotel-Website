
function submitClick()
{
    let phoneId=document.getElementById("phone");
    let emailId=document.getElementById("email");
    document.getElementById("txtSubmitHelp").innerHTML="";
    let name=document.getElementById("name").className=='valid';
    let phone=phoneId.className=='valid';;
    let email=emailId.className=='valid';;
    let enquiry=document.getElementById("enquiry").className=='valid';;
    if(name&&phone&&email&&enquiry){
        if(phoneId.value!=""|| emailId.value!=""){
            location.replace("./Submit.html")
        }
        else{
            document.getElementById("txtSubmitHelp").innerHTML="Please enter at least one valid contact method";
        }
    }

    else {
        document.getElementById("txtSubmitHelp").innerHTML="Please enter Name, Enquiry, Phone and Email";
    }
}

function validateName(tf, helpText){
    let value=tf.value;
    let regex=/([A-Z]){2,}/i;
    let test=regex.test(value);
    
    if(test){
        tf.className="valid";
        helpText.innerHTML="";
        return true;
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "Please Enter At Least 2 Letters";
        return false;
    }

}
function validateEmail(tf, helpText){
    let value=tf.value;
    let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let test=regex.test(value);
    if(test){
        tf.className="valid";
        helpText.innerHTML="";
        return true;
    }
    else {
        if(value!=""){
        tf.className = "invalid";
        helpText.innerHTML = "Invalid postcode (Please Enter Valid Email or Leave Empty";
        return false;
        }
        else{
            helpText.innerHTML="";
            tf.className="valid";
            return true
        }
    }

}
function validatePhone(tf, helpText){
    let value=tf.value;
    let regex=/^\d{8,10}$/;;
    let test=regex.test(value);
    if(test){
        tf.className="valid";
        helpText.innerHTML="";
        return true;
    }
        else{if(value!=""){
            tf.className = "invalid";
            helpText.innerHTML = "Enter Valid Phone Number (Numbers Only) or Leave Empty";
            return false;
        }
        else{
            helpText.innerHTML="";
            tf.className="valid";
            return true
        }
            
    }
    
        
    
}
function validateEnquiry(tf, helpText){
    let value = tf.value;
    //check if empty
    if (value) { //not empty
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "Enquiry Cannot Be Empty";
        return false;
    }
}
