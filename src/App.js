import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const descriptions = [
    ["banana", "БАНАН"],
    ["strawberry", "КЛУБНИКА"],
    ["kiwi", "КИВИ"],
    ["peach", "ПЕРСИК"],
    ["orange", "АПЕЛЬСИН"],
    ["pear", "ГРУША"],
    ["lemon", "ЛИМОН"],
    ["plum", "СЛИВА"],
    ["apple", "ЯБЛОКО"],
    ["pineapple", "АНАНАС"],
    ["cherry", "ВИШНЯ"],
    ["pomegranate", "ГРАНАТ"],
]

function App() {
    return (
        <div className="App">
            123
            <Carousel showArrows={true} swipeable={true} autoPlay={true} infiniteLoop={true} emulateTouch={true}>
                {descriptions.map((description) => {
                    return <div>
                        <img src={process.env.PUBLIC_URL + "/images/" + description[0] + ".jpg"}/>
                        <p className="legend">{description[1]}</p>
                    </div>
                })}

            </Carousel>
        </div>
    );
}

export default App;
