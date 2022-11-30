import React from "react";

export default function Gallery(){

    const scrollLeft = () => {
       document.getElementById("scrollDiv").scrollLeft -= 300;
    }
    
    const scrollRight = () => {
        document.getElementById("scrollDiv").scrollLeft += 300;
    }

    return(
        <section className="galleryMain" id="Gallery">
            <h1>Our Gallery</h1>

            <div className="galleryImages">
                <button className="scrollButtons leftBtn" onClick={scrollLeft}><img src="/Images/leftarrow.svg"/></button>
                    <div id="scrollDiv">
                        <img className="galleryImage" src="/Images/gallery/1.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/2.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/3.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/4.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/5.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/6.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/7.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/8.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/9.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/10.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/11.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/12.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/13.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/14.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/15.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/16.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/17.jpeg"/>
                        <img className="galleryImage" src="/Images/gallery/18.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/19.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/20.jpg"/>
                        <img className="galleryImage" src="/Images/gallery/21.jpeg"/>
                    </div>
                <button className="scrollButtons rightBtn" onClick={scrollRight}><img src="/Images/rightarrow.svg"/></button>
                
            </div>
        </section>
    )
}