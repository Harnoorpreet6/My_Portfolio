<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/d0e8431583.js" crossorigin="anonymous"></script>
  <link href="css/grid.contact.css" rel="stylesheet" />
  <link href="css/main.css" rel="stylesheet" />
  <script type="module" src="js/contact.js"></script>
  <script type="module" src="js/main.js"></script>
  <title>Contact Page</title>
</head>

<body>
  <header class="grid-con">
    <!-- Navigation and Intro -->
    <div id="logo" class="box l-col-start-1 l-col-end-3 col-start-1 col-end-2"><img src="images/logo.png" ></div>
    
     <div id="hamburger" class="mobile-only">
        <i class="fas fa-bars"></i>
    </div>
    <div id="intro" class="box l-col-start-10 l-col-end-13">Harnoorpreet Kaur</div>
    <div class="box l-col-start-1 l-col-end-2"><a href="index.html" id="home">Home</a></div>
    <div class="box l-col-start-3 l-col-end-4"><a href="aboutme.html" id="aboutme">About me</a></div>
    <div class="box l-col-start-5 l-col-end-6"><a href="values.html" id="values">Values</a></div>
    <div class="box l-col-start-7 l-col-end-8"><a href="projects.html" id="projects">Projects</a></div>
    <div class="box l-col-start-9 l-col-end-10"><a href="resume.html" id="resume">Resume</a></div>
    <div class="box l-col-start-12 l-col-end-13"><a href="contact.php" id="contact">Contact</a></div>
    <nav id="mobile-menu" class="mobile-only hidden">
        <a href="index.html">Home</a>
        <a href="aboutme.html">About Me</a>
        <a href="values.html">Values</a>
        <a href="projects.html">Projects</a>
        <a href="resume.html">Resume</a>
        <a href="contact.php">Contact</a>
    </nav>

    
  </header>

  <!-- Contact Intro -->
  <section class="grid-con">
    <div id="intro1" class="box col-start-1 col-end-5 l-col-start-4 l-col-end-9">CONTACT ME</div>
    <div id="intro2" class="box col-start-1 col-end-5 l-col-start-4 l-col-end-9">Web design / Branding / UX Designer</div>
  </section>

  <!-- Contact Form -->
  <section id="update-contact-form" class="grid-con">
    <h2 class="hidden">Contact Form</h2>
    
    <div id="form-input" class="box col-start-1 col-end-5 l-col-start-4 l-col-end-9">
      <form id="updateContactForm" name="submit" method="post">
        <label for="f_name">*First Name</label>
        <input name="f_name" type="text" />

        <label for="l_name">*Last Name</label>
        <input name="l_name" type="text" />

        <label for="email">*Email</label>
        <input name="email" type="email" />

        <label for="message">*Message</label>
        <textarea name="message"></textarea>

        <input name="submit" type="submit" value="Send" id="submit-button" />
      </form>
    </div>
  </section>

  
</body>
</html>
