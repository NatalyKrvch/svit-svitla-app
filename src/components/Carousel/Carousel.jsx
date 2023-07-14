import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

const Carousel = ({ images }) => {
  const totalSlides = images.length > 4 ? 4 : images.length; // Максимальна кількість слайдів
  const placeholderCount = Math.max(0, totalSlides - images.length);
  const placeholders = Array.from({ length: placeholderCount });

  const settings = {
    dots: images.length >= totalSlides,
    infinite: true,
    speed: 500,
    slidesToShow: totalSlides,
    slidesToScroll: totalSlides >= 2 ? 2 : 1, // slidesToScroll може бути 2, якщо кількість слайдів більше або дорівнює 2, інакше 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-slide">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
        {placeholders.map((_, index) => (
          <div key={`placeholder-${index}`} className="placeholder" />
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
