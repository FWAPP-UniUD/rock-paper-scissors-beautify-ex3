class RockPaperScissors {
    constructor(containerElement) {
        /* ... costruisco i vari componenti che
           devono interagire */
        this.mainElement = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = "Your Game";
        const button = document.createElement('button');
        button.textContent = "Play!";
        this.mainElement.append(title);
        this.labels = [ "Rock", "Paper", "Scissors" ];
        for (let i = 0; i < 3; i++) {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'choice');
            radioButton.setAttribute('value', this.labels[i]);
            const label = document.createElement('label');
            label.textContent = this.labels[i];
            this.mainElement.append(radioButton);
            this.mainElement.append(label);
            this.mainElement.append(document.createElement('br'));
        }
        this.mainElement.append(button);
        button.addEventListener('click', this.buttonPressed.bind(this));
        this.result = document.createElement('div');
        this.mainElement.append(this.result);
        containerElement.append(this.mainElement);
    }
    randomDraw() {
        const v = Math.floor(3 * Math.random());
        this.opponentChoice = this.labels[v];
    }
    determineWinner(choice) {
        if (this.opponentChoice == "Rock") {
            switch (choice) {
            case "Rock": return "tie";            
            case "Paper": return "you";
            case "Scissors": return "opponent";
            }
        }
        else if (this.opponentChoice == "Paper") {
            switch (choice) {
            case "Rock": return "opponent";            
            case "Paper": return "tie";
            case "Scissors": return "you";
            }
        }
        else {
            // this.opponentChoice == "Scissors"
            switch (choice) {
            case "Rock": return "you";            
            case "Paper": return "opponent";
            case "Scissors": return "tie";
            }
        }
    }
    buttonPressed(event) {
        this.randomDraw();
        this.result.textContent = this.opponentChoice;
        const myChoice = this.mainElement.querySelector('input[name="choice"]:checked');
        if (!myChoice)
            /* Transform the window.alert into a semantic-ui alert */
            window.alert("You must choose one option");
        else {
            /* determine a winner */
            const winner = this.determineWinner(myChoice.value);
        }
    }
}

export default RockPaperScissors;