
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
// import gif1 from "/Users/eljuan/Desktop/React portfolio/my-portfolio/src/images/104286-coding-screen.gif"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are the skills I have aquired so far in my coding journey.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className='skill-image' src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg"} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://e7.pngegg.com/pngimages/265/442/png-clipart-jquery-ui-javascript-web-browser-pasargad-text-trademark-thumbnail.png"} alt="Image" />
                                <h5>jQuery</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://nodejs.org/static/images/logo-hexagon-card.png"} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img className='skill-image' src={"https://cdn.cdnlogo.com/logos/g/55/github.svg"} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}