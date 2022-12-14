import Container from "../components/styled/Container";
import Button from "../components/styled/Button";
import ImageWrapper from "../components/styled/ImageWrapper";
import Heading from "../components/styled/Heading";
import coinsImage from "../assets/coins.png";

const StartPage = () => {
    return(
        <div className="flex-column-between">
            <div className="flex-center-wrapper">
                <ImageWrapper image={coinsImage} />
            </div>
            <Heading text={"Welcome to the Exps-Tracker App. Save and control your money."}/>
            <div className="flex-column">
                <Button text={"Get Started"} />
                <Button text={"Sign In"} />
            </div>
        </div>
    );
}

export default StartPage;