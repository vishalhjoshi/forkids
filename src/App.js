import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/main.scss";
import { Carousel } from "react-responsive-carousel";

const descriptions = [
  ["banana", "banana"],
  ["strawberry", "strawberry"],
  ["kiwi", "kiwi"],
  ["peach", "peach"],
  ["orange", "orange"],
  ["pear", "pear"],
  ["lemon", "lemon"],
  ["plum", "plum"],
  ["apple", "apple"],
  ["pineapple", "pineapple"],
  ["cherry", "cherry"],
  ["pomegranate", "pomegranate"],
];

function App() {
  return (
    <div className="App">
      <div className="my-carousel">
        <Carousel
          showArrows={true}
          dynamicHeight={false}
          swipeable={true}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={true}
        >
          {descriptions.map((description) => {
            return (
              <div className={"item flex flex-col"}>
                <div className={"description"}>{description[1]}</div>
                <img
                  className={"image"}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/" +
                    description[0] +
                    ".jpg"
                  }
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
