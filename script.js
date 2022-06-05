const arr = [
    "duel8",
    "dule",
    "speed",
    "spede",
    "deul",
    "cars",
    "racs",
    "shape",
    "shpea",
    ];

    function similarWords(input, arr) {
        const inputCharacters = input.split('');
        console.log(inputCharacters);
        const outputArr = [];
        let i,j;
        for(i = 0; i < arr.length; i++) {
            for(j = 0; j < inputCharacters.length; j++) {
                if(!arr[i].includes(inputCharacters[j])) {
                    break;
                }
                if(j === inputCharacters.length - 1) {
                    outputArr.push(arr[i]);
                }
            }
        }
        return outputArr;
    }
    
    const query = window.prompt('Please enter search string');
    console.log(query);
    const result = similarWords(query, arr);
    console.log(result);