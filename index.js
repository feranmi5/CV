const form = document.getElementById("addForm");

function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   const middle= form.elements["m_name"].value;
   const last = form.elements["l_name"].value;
   const email= form.elements["email"].value;
   const address=form.elements["address"].value;
   const phone= form.elements["phone"].value;
   const gender= form.elements["gender"].value;
   
   function letters1(inputtxt){
       var letters = /^[A-Za-z]+$/;
       if(inputtxt.match(letters)){
           return true;
       }
       else{
           alert("Error, First name entered incorrectly, letters only");
           return false;
       }
   }

   function letters2(inputtxt){
       var letters = /^[A-Za-z]+$/;
       if(inputtxt.match(letters)){
           return true;
       }
       else{
           alert("Error, middle name entered incorrectly, letters only");
           return false;
       }
   }

    function letters3(inputtxt){
        var letters = /^[A-Za-z]+$/;
        if(inputtxt.match(letters)){
            return true;
       }
       else{
           alert("Error, Last name entered incorrectly, letters only");
           return false;
       }
   }

   letters1(first);
   letters2(middle);
   letters3(last);

   function AcceptEmail(email) {
       var emailformat = /^[a-zA-Z0-9.!#%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(email.value.match(emailformat)){
           alert("Accept email address");
           return true;
       }
       else{
           alert("Email is not valid");
           return false;
       }
   }

   if (address === ' '){
       alert("Home address is empty")
   }
   if(number === ' '){
       alert("Phone number is empty")
   }

   window.localStorage.setItem("f_name",first);
   window.localStorage.setItem("m_name",middle);
   window.localStorage.setItem("l_name",last);
   window.localStorage.setItem("email",email);
   window.localStorage.setItem("address",address);
   window.localStorage.setItem("phone",phone);

}

form.addEventListener('submit',onSubmit)