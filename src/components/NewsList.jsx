import { check, leftarrow, rightarrow } from "../assets";
import { News } from "../constants";
import '../index.css';
import Button from "./Button";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NewsList = () => {

  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick}>
      <img src={leftarrow} width={24} height={24} alt="Left Arrow" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick}>
      <img src={rightarrow} width={24} height={24} alt="Right Arrow" />
    </button>
  );

  const [news, setNews] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('http://localhost:8000/api/news');
      setNews(response.data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={300}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {News.map((item, index) => (
          <div className="flex gap-[1rem] max-lg:flex-wrap px-4 align-center mb-8 justify-items-end">
            <div
              key={item.id}
              className={`carousel-item w-[30rem] max-lg:w-full h-full bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto
          flex-end flex-col justify-end hover:animate-bounce2 ${index % 2 === 0 ? 'h-[32rem] my-8 py-14 max-lg:h-[36rem]' : 'h-[36rem] py-24 max-lg:h-[36rem] max-lg:my-8 max-lg:py-14'} `}
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 237, 0), rgba(255, 255, 237, 0.8)), url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="mb-4 min-h-[6.2rem] backdrop-blur-sm bg-color-ivory/15 border-color-ivory/20 border-y flex justify-center items-center">
                <h4 className="text-center text-middle px-6 h6 text-shadow-lg bakdrop-blur-sm bg-gradient-to-r bg-clip-text  text-transparent 
               from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">{item.title}
                </h4>
              </div>

              <p className="body min-h-[4rem] px-6 mb-3 text-shadow-lg text-color-ivory text-shadow bakdrop-blur-sm">
                {item.timestamp}
              </p>

              <div className="px-12">
                <Button
                  className="w-full mb-6  backdrop-blur-sm"
                  href={item.contact ? "#blognews" : "mailto:codesfrutal@gmail.com"}
                  white={!!item.contact}
                >
                  {item.contact ? "Leia Mais" : "Contate-nos"}
                </Button>
              </div>

              <ul className="px-6">
                {item.text.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6 backdrop-blur-sm"
                  >
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="text-sm ml-4 text-shadow-lg">
                      {feature.split(" ").length > 30 ? feature.split(" ").slice(0, 30).join(" ") + "..." : feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsList;
