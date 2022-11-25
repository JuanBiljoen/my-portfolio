import pic1 from "../images/mePic.jpg"



export const About = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Juan Viljoen resume..png').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Juan Viljoen resume..png';
                alink.click();
            })
        })
    }
 
      
            
                <button onClick={onButtonClick}></button>


    return (
        <div className="about-container">
        <div className="about" id="aboutme" xs={12} md={6} xl={7}>
            <h2>About me</h2>
            <p>
                I am a fine jewellery designer looking to start a career in web development. I have a passion for creating beautiful looking products and a huge interest in creating attractive webpages and apps. I am looking for an oppurtunity to extend my knowledge and skills in web development. <br></br><br></br>
                
                <img className="background-about-image" src={"https://i.pinimg.com/564x/81/8f/4a/818f4a120483279ef50b769acf8188a6.jpg"} alt="astronaut" xs={12} md={6} xl={7}></img>

                In my spare time I'm either working on an old Vespa or taking my dog for a hike/fishing trip. I am very passionate about music, classic cars and motorbikes.</p>
                <h4>Click here to download my resume</h4>
                
                <button className="resume-button" onClick={onButtonClick}>Download resume</button>

                    <div className="profileImg"><img role="presentation" className="me-pic" src={pic1} width="100" alt="profile pic" /></div>
    
                    
                </div>
            
        </div>
        
    )
}  