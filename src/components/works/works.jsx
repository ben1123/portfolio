import React, { useState } from 'react';
import './works.scss';

const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className="works" id="works">
            <h1>Works</h1>
            <div className="slider"   style={{ transform: `translateX(-${currentSlide * 100}vw)`, transition: '1s ease'}}>

                {data.map( item => {
                    return (
                        <div className="container">
                        <div className="wrapper web" >
                            <div className="left">
                                <div className="left-container">
                                    <img src='assets/images/mobile.png' alt="" className="image-container" />
                                </div>
                                <h1>{item.title}</h1>
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, exercitationem ipsa? Tempora sed perferendis aperiam exercitationem corrupti, odio nulla deserunt at cupiditate, nemo perspiciatis praesentium id sit harum, labore possimus. </p>
                                <span className="projects-link">Projects</span>
                            </div>
                            <div className="right">
                                <div className="banner">
                                    <img src={item.img} alt="" className="banner-image" />
                                </div>
                            </div>
                        </div>
    
                    </div>
                    )
                    
                })}
               
            </div>

            <div className="arrow">
                <img src="assets/images/arrow.png" className="arrow-left" alt="" onClick={() => handleClick('left')} />
            </div>
            <div className="arrow">
                <img src="assets/images/arrow.png" className="arrow-right" alt="" onClick={handleClick} />
            </div>
        </div>
    )
}
