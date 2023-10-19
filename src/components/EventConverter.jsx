import Button from './Button';

function Event() {
    function convertUpperCase(event) {
        // preventDefault() faz com que utilize o evento padrão do navegador(javascript vanilla), não a do react
        event.preventDefault();
        const textArea = document.getElementById('text').value;
        const resultArea = document.getElementById('result');
        resultArea.innerHTML = textArea.toUpperCase();
    }

    function convertLowerCase(event) {
        event.preventDefault();
        const textArea = document.getElementById('text').value;
        const resultArea = document.getElementById('result');
        resultArea.innerHTML = textArea.toLowerCase();
    }

    function convertSpecial(event) {
        event.preventDefault();

        const textArea = document.getElementById('text').value;
        const resultArea = document.getElementById('result');
        const words = textArea.split(" ");

        resultArea.innerHTML = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
    }

    return (
        <div>
            <Button event={convertUpperCase} text="maíuscula" />
            <Button event={convertLowerCase} text="minuscula" />
            <Button event={convertSpecial} text="especial" />
        </div>
    );
}

export default Event;   
