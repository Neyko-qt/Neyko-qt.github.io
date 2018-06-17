class helper {
    static randomValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

    static drawScoreTable() {
        let tmpArray = helper.sortArray();
        let scoreTable = document.querySelector('table');
        for (let i = 0; i < tmpArray.length; i++) {
            let tableValue = document.createElement("tr");
            let playerName = document.createElement("td");
            let playerScore = document.createElement("td");
            playerName.innerText = tmpArray[i][0];
            playerScore.innerText = tmpArray[i][1];
            tableValue.appendChild(playerName);
            tableValue.appendChild(playerScore);
            scoreTable.appendChild(tableValue);
        }
    }

    /*returns a sorted array of 10 top scores*/
    static sortArray() {
        let sortArray = [];
        let storageLength = localStorage.length;
        for (let i = 0; i < storageLength; i++) {
            if (localStorage.key(i).substr(0, 4) === 'game') {
                sortArray.push(localStorage.getItem(localStorage.key(i)).split(','));
            }
        }
        for (let i = 0; i < sortArray.length; i++) {
            sortArray[i][1] = Number(sortArray[i][1]);
        }
        sortArray = helper.sortValues(sortArray).slice(0, 10);
        return sortArray;
    }

    static sortValues(arr) {
        let length = arr.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (arr[j + 1][1] > arr[j][1]) {
                    let t = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = t;
                }
            }
        }
        return arr;
    }

    static randomPosition(array) {
        let currentIndex = array.length;
        let tmp;
        let index;
        while (currentIndex !== 0) {
            index = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tmp = array[currentIndex];
            array[currentIndex] = array[index];
            array[index] = tmp;
        }
        return array;
    }

}

export default helper;