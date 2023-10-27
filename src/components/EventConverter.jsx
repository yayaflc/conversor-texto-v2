import Button from './Button';
import './ButtonsContainer.css';

function Event(props) {
    function convertUpperCase(event) {
        props.setResult(props.textArea.toUpperCase());
    }

    function convertLowerCase(event) {
        props.setResult(props.textArea.toLowerCase());
    }

    function convertSpecial(event) {
        const words = props.textArea.split(" ");

        const result = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        props.setResult(result);
    }

    return (
        <div className="ButtonsContainer">
            <Button event={convertUpperCase} text="maíuscula"></Button>
            <Button event={convertLowerCase} text="minuscula" />
            <Button event={convertSpecial} text="especial" />
        </div>
    );
}

export default Event;   
