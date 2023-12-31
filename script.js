/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["UX/UI Designer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


/* modal */
const modals = document.querySelectorAll('.modal');
const openModalButton = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelectorAll('.close');

openModalButton.forEach((button) => {
  button.addEventListener ('click' , () => {
    const modalId = button.getAttribute ( 'data-modal-id');
    openModal(modalId);
  });
});

function openModal(modalId){
  const modal = document.getElementById(modalId);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}


closeModalButton.forEach((button) => {
  button.addEventListener('click', () => {
      const modalId = button.closest('.modal').id;
      closeModal(modalId);
  });
});

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

/*download pdf*/
document.addEventListener("DOMContentLoaded", function () {
  const downloadButtons = document.querySelectorAll(".download-button");
  downloadButtons.forEach(function (button) {
    button.addEventListener("click", downloadPDF);
  });

  function downloadPDF() {
    const pdfFilePath = './assets/gunjan_resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfFilePath;
    anchor.target = '_blank';
    anchor.download = 'gunjan_resume.pdf';
    anchor.click();
  }
});


// function sendEmail() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;

//   var templateParams = {
//       to_email: "gunjanaggarwal06@gmail.com",
//       from_name: name,
//       from_email: email,
//       message: message,
//   };
//   emailjs.init("2Y5abB1e5GDqqVEbz");
//   emailjs.send('service_vpzy1zc','template_qvbesw8', templateParams)
//       .then(function(response) {
//           alert("Email sent successfully!");
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//       }, function(error) {
//           alert("Email sending failed.");
//       });
// }


// import nodemailer from 'nodemailer';

// var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from:
//     // <https://forwardemail.net/guides/send-email-with-custom-domain-smtp>
//     user: 'gunjanaggarwal06@gmail.com',
//     pass: 'Gunjan@06'
//   },
// });

// await transporter.sendMail({
//   from: 'gunjanaggarwal06@gmail.com',
//   to: 'aditya@garageplug.com',
//   subject: 'hello world',
//   html: '<h1>hello world</h1>'
// });


function sendEmail() { 
  Email.send({ 
    Host: "smtp.elasticemail.com", 
    port: 2525,
    Username: "gunjanaggarwal06@gmail.com", 
    Password: "1165AEB2365C3F280F4B16E609CE77EEFADE", 
    To: 'gunjan@garageplug.com', 
    From: 'gunjanaggarwal06@gmail.com', 
    Subject: "Sending Email using javascript", 
    Body: "Well that was easy!!", 
  }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
}

sendEmail();