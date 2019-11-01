[logo]: https://github.com/nobinary/Scaffidi/blob/master/images/Logo.png

**Purpose**

Responsive desktop/mobile website for creative studio with CSS animations. All artwork courtesy of Tim Scaffidi. 

**Tools/Languages**

- VisualStudio, Illustrator, Photoshop.

- HTML/CSS/JS

**Highlights**

Responsive flexbox image grid. 

/* HOME  */

.wrapper {
    display: flex;
    width: 100vw;
    align-content: flex-start;
    margin: 0;
  }

.wrapper img {
    max-width:100%;
    height: auto;
}

.main_image {
    width: 100%;
    height: auto;
    transition: all 0.8s ease;
}

.main_image:hover {
    transform: scale(1.2)
}