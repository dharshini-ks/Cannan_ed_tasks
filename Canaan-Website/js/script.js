function showMessage() {
    window.open("https://forms.gle/JF94SBthpnK1NHiK8", "_blank");
}

const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function(e){

        e.preventDefault();

        let email = document.getElementById("email").value;
        let response = document.getElementById("responseMsg");

        let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailPattern.test(email)){
            response.style.color = "green";
            response.innerHTML =
            "Message Sent Successfully!";
            form.reset();
        }
        else{
            response.style.color = "red";
            response.innerHTML =
            "Please Enter a Valid Email Address!";
        }

    });
}
window.addEventListener("scroll", function(){
    let btn = document.getElementById("scrollBtn");

    if(window.scrollY > 200){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

function scrollTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}