import helper from "./helper";
import {
    translateArr,
    auditionArr,
    countriesArr,
    dragAndDropArr
} from "./arrays";

class Task {
    constructor() {
        this.type;
        this.expression;
        this.solutionArr = [];
        this.answerValue;
    }

    randomTask() {
        document.getElementById('tempMedia').innerHTML = '';
        document.getElementById('answerInput').value = '';
        const tasks = [this.arithmetic, this.translate, this.audition, this.countries, this.dragAndDrop];
        const currentTask = helper.randomValue(tasks).bind(this);
        currentTask();

    }

    arithmetic() {
        this.type = "arithmetic";
        const firstValue = helper.randomInterval(0, 100);
        const secondValue = helper.randomInterval(0, 100);
        const typeOfoperator = ['+', '-', '*', '/'];
        const operation = helper.randomValue(typeOfoperator);
        this.expression = firstValue + operation + secondValue;
        this.solutionArr.push(eval(this.expression).toString());
        document.querySelector('.condition').innerHTML = "Your solution:<br>" + this.expression;
    }

    translate() {
        this.type = "translate";
        const words = Object.keys(translateArr);
        const wordsLength = words.length;
        this.expression = words[helper.randomInterval(0, wordsLength - 1)];
        this.solutionArr = translateArr[this.expression];

        document.querySelector('.condition').innerHTML = "Translate this word:<br>" + this.expression;
    }

    audition() {
        this.type = "audition";
        const words = Object.keys(auditionArr);
        const wordsLength = words.length;
        this.expression = words[helper.randomInterval(0, wordsLength - 1)];
        this.solutionArr.push(auditionArr[this.expression]);

        const audioPlace = document.createElement("audio");
        audioPlace.setAttribute("src", this.expression);
        audioPlace.setAttribute("controls", "");
        document.getElementById('tempMedia').appendChild(audioPlace);
        document.querySelector('.condition').innerHTML = "Repeat the word";
    }

    countries() {
        this.type = "countries";
        const words = Object.keys(countriesArr);
        const wordsLength = words.length;
        this.expression = words[helper.randomInterval(0, wordsLength - 1)];
        this.solutionArr = countriesArr[this.expression];

        const flagPlace = document.createElement("img");
        flagPlace.setAttribute("src", this.expression);
        document.getElementById('tempMedia').appendChild(flagPlace);
        document.querySelector('.condition').innerHTML = "What is the country?";
    }

    dragAndDrop() {
        this.type = "dragAndDrop";
        document.getElementById('answerInput').style.display = "none";

        const words = Object.keys(dragAndDropArr);
        const wordsLength = words.length;
        this.expression = words[helper.randomInterval(0, wordsLength - 1)];
        this.solutionArr = dragAndDropArr[this.expression];

        const swappedArr = helper.randomPosition(this.expression.split(""));

        const ul = document.createElement("ul");
        ul.classList.add("sortable");

        for (let i = 0; i < swappedArr.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = swappedArr[i];
            ul.appendChild(li);
        }

        document.getElementById('tempMedia').appendChild(ul);

        $(function () {
            $(".sortable").sortable().disableSelection();
        });

        document.querySelector('.condition').innerHTML = "make word from letters:";
    }




    wasSolved() {
        return this.solutionArr.indexOf(this.answerValue.toLowerCase()) > -1;
    }

}

export default Task;