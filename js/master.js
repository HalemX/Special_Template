// Handle Burger Menu
let toggler = document.querySelector(".burger-icon");
let menu = document.querySelector(".menu-lock");

toggler.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});

// Stop Propagation In Ul
menu.onclick = function (e) {
  e.stopPropagation();
};

document.addEventListener("click", function (e) {
  if (e.target !== toggler && e.target !== menu) {
    // If Menu Is Show
    if (menu.classList.contains("show")) {
      menu.classList.toggle("show");
    }
  }
});

// Handle Intro Text
setTimeout(() => {
  document.querySelector(".intro-text").classList.add("show");
}, 100);

// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color-opt");
let colorsLi = Array.from(document.querySelectorAll(".colors-list li"));
let img = document.querySelector(".image-box img");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--Main-Color", mainColor);

  // Reset Active Class
  colorsLi.forEach((li) => {
    if (li.dataset.color === mainColor) {
      colorsLi.forEach((li) => {
        li.classList.remove("active");
      });
      li.classList.add("active");
    }
  });
}
// Handle Img
if (localStorage.getItem("color-img") !== null) {
  img.classList.add(localStorage.getItem("color-img"));
}

// Check If There's Local Storage Random Background Item

// Random Background Option
let backgroundOption = true;

// Var To Control Interval
let timeInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background-option");

// Options Rand BackGround In Setting Box
let randBackEle = Array.from(document.querySelectorAll(".rand-bg span"));

// Check If Rand Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Reset Active Class
  randBackEle.forEach((span) => {
    if (span.dataset.rand === backgroundLocalItem) {
      randBackEle.forEach((span) => {
        span.classList.remove("active");
      });
      span.classList.add("active");
    }
  });
}

// Start Settings Box
let gearIcon = document.querySelector(".icon");
let mainSettingBox = document.querySelector(".settings-box");

// On Click On Icon
gearIcon.onclick = handleSettingBox;

function handleSettingBox() {
  // Toggle Class fa-spin For Rotation On The Gear
  gearIcon.classList.toggle("fa-spin");

  // Toggle Open Class To Main Setting Box
  mainSettingBox.classList.toggle("open");
}

// Options Colors In Setting Box & Switch colors

// Handle Active Class On Spans Random Background
handleActive(colorsLi);

//Loop On All Li
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--Main-Color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color-opt", e.target.dataset.color);

    // Handle Color Img By Add Class = e.target.dataset.img
    img.removeAttribute("class");
    img.classList.add(e.target.dataset.img);
    localStorage.setItem("color-img", e.target.dataset.img);
  });
});

// Handle Active Class On Spans Random Background
handleActive(randBackEle);

//Loop On All Spans To Select Random Background
randBackEle.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.dataset.rand === "true") {
      backgroundOption = true;
      changBackgroundImage();

      // Set Yes To Background Option On Local Storage
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(timeInterval);

      // Set No To Background Option On Local Storage
      localStorage.setItem("background-option", false);
    }
  });
});
// End  Settings Box

// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01", "02", "03", "04", "05"];
// Start Landing Page
function changBackgroundImage() {
  if (backgroundOption === true) {
    // Set Interval Every 3s
    timeInterval = setInterval(() => {
      // Get Random Number
      let randNum = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image
      landingPage.style.backgroundImage = `url("imgs/${imgsArray[randNum]}.jpg")`;
    }, 10000);
  }
}
changBackgroundImage();
// End Landing Page

// Start Btn To Scroll Up
let btnUp = document.querySelector(".up");

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// End Btn To Scroll Up

// Start About Us
let aboutUs = document.querySelector(".about-us");
let imgBox = document.querySelector(".image-box");
let infoBox = document.querySelector(".info-box");
let time = 0;
let timeFeature = 0;

// Start Handle Page Element When Scroll
window.onscroll = function () {
  // Add Class Show To Image Box
  let aboutUsOffsetTop = aboutUs.offsetTop;

  let aboutUsOuterHeight = aboutUs.offsetHeight;

  let windowHeight = this.innerHeight;

  if (window.scrollY > aboutUsOffsetTop + aboutUsOuterHeight - windowHeight) {
    // Add Class Show To Image Box
    imgBox.classList.add("show");
    infoBox.classList.add("show");
  }
  // End About Us

  // Start Our Skills
  let OurSkills = document.querySelector(".our-skills");

  let OurSkillsOffsetTop = OurSkills.offsetTop;

  let OurSkillsOuterHeight = OurSkills.offsetHeight;

  if (
    window.scrollY >
    OurSkillsOffsetTop + OurSkillsOuterHeight - windowHeight
  ) {
    let allSkills = document.querySelectorAll(".skill-progress span");
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }

  // End Our Skills

  // Start Our Gallery
  let ourGallery = document.querySelector(".gallery");
  let allImg = Array.from(
    document.querySelectorAll(".gallery .images-box img")
  );

  let ourGalleryOffsetTop = ourGallery.offsetTop;

  if (window.scrollY >= ourGalleryOffsetTop - 700) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        allImg[i].classList.add("show");
      }, (time += 200));
    }
  }

  // End Our Gallery

  // Start Our Features
  let ourFeatures = document.querySelector(".features");
  let allFeature = Array.from(
    document.querySelectorAll(".features .feature-box")
  );

  let ourFeaturesOffsetTop = ourFeatures.offsetTop;

  if (window.scrollY >= ourFeaturesOffsetTop - 700) {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        allFeature[i].classList.add("show");
      }, (timeFeature += 200));
    }
  }
  // End Our Features

  // Start Time Line
  let timeLine = document.querySelector(".timeline");

  let timelIneOffsetTop = timeLine.offsetTop;

  let allDiv = Array.from(
    document.querySelectorAll(".timeline .timeline-content div")
  );

  if (window.scrollY > timelIneOffsetTop - 200) {
    for (let i = 0; i < 2; i++) {
      allDiv[i].classList.add("show");
    }
  }
  if (window.scrollY > timelIneOffsetTop + 100) {
    allDiv[2].classList.add("show");
  }
  if (window.scrollY > timelIneOffsetTop + 200) {
    for (let i = 3; i < 5; i++) {
      allDiv[i].classList.add("show");
    }
  }
  if (window.scrollY > timelIneOffsetTop + 400) {
    allDiv[5].classList.add("show");
  }
  // End Time Line

  // Start Testimonials
  let testimonials = document.querySelector(".testimonials");

  let testimonialsOffsetTop = testimonials.offsetTop;

  if (window.scrollY > testimonialsOffsetTop - 550) {
    testimonials.classList.add("show");

    document.querySelector(".testimonials h2").classList.add("show");

    document
      .querySelectorAll(".testimonials .content .ts-box")
      .forEach((div) => {
        div.classList.add("show");
      });
  }
  // End Testimonials

  // Start Handle Btn Up
  if (this.scrollY > 600) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
  // End Handle Btn Up

  // Start Contact
  let contact = document.querySelector(".contact");

  let contactOffsetTop = contact.offsetTop;

  if (window.scrollY > contactOffsetTop - 550) {
    document.querySelector(".contact h2").classList.add("show");
    document.querySelector(".contact form .right").classList.add("show");
    document.querySelector(".contact form .left").classList.add("show");
  }

  // End Contact
};
// End Handle Page Element When Scroll

// Start Create Popup On Every Img
let allImg = document.querySelectorAll(".gallery .images-box img");

// Loop On All Img And Create Popup
allImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Popup Overlay Div
    let overlayDiv = document.createElement("div");

    // Add Class To Popup Overlay Div
    overlayDiv.className = "popup-overlay";

    // Add Div To Body
    document.body.appendChild(overlayDiv);

    // Create Popup Box
    let popupBox = document.createElement("div");

    // Add Class To Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading Img
      let imgHeading = document.createElement("h3");
      imgHeading.innerHTML = img.alt;

      // Add Heading Img To Popup Box
      popupBox.appendChild(imgHeading);
    }

    // Create Img
    let popupImg = document.createElement("img");

    // Add Src To Img = Loop On Imgs
    popupImg.src = img.src;

    // Add Img To Popup Box
    popupBox.appendChild(popupImg);

    // Add Popup Box To Body
    document.body.appendChild(popupBox);

    // Create Close Btn
    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "X";

    // Add Class To Close Btn
    closeBtn.className = "close-btn";

    // Add  Close Btn To Popup Box
    popupBox.appendChild(closeBtn);
  });
});

// Close Btn
document.addEventListener("click", (e) => {
  if (e.target.className == "close-btn") {
    // Remove Popup
    e.target.parentElement.remove();

    // Remove OverLay
    document.querySelector(".popup-overlay").remove();
  }
});
// End Create Popup On Every Img

// Function Scroll To Select Element
// Select All Bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
scrollToSome(allBullets);
// Select All Links
let allLinks = document.querySelectorAll(".links a");
scrollToSome(allLinks);

function scrollToSome(elements) {
  // Loop On elements
  elements.forEach((ele) => {
    // Add Event Click On Each Bullet
    ele.addEventListener("click", (e) => {
      // Get Data Section  Attribute From Bullet === Class Section
      let dataSec = e.target.dataset.section;

      // Scroll To Data Section  === Class Section
      document.querySelector(dataSec).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Function Handle Active Class In Page
function handleActive(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      elements.forEach((ele) => {
        ele.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });
}

// Start Bullets Opt
let bulletsSpan = document.querySelectorAll(".show-bullet span");
let bulletsContainer = document.querySelector(".nav-bullets");

// Handle Active Class On Spans Bullets Opt
handleActive(bulletsSpan);

// Check Local Storage About Bullet Opt
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".show-bullet .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".show-bullet .no").classList.add("active");
  }
}

// Loop On All Bullet Span Opt
bulletsSpan.forEach((span) => {
  span.addEventListener("click", () => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }
  });
});

// End Bullets Opt

// Start Reset Btn
document.querySelector(".reset-opts").onclick = function () {
  // Clear Local Storage To Reset All Things On Reload
  localStorage.clear();

  // Reload Website
  window.location.reload();
};

