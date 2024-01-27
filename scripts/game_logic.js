


//questions: map



function mapToArray(questions){
    //questions: map[id:question]
    //transforms map into an array of map keys
    return Array.from(questions.keys())
}
//var idArray = mapToArray(questions)

//add toLowerCase
function validateAnswer(userAnswer,id,questionIndex,questionArray,questionMap){
    //answer:string
    //id:int
    //question:map
    var question = questionMap.get(id)
    if(userAnswer===question.answer){
        question.numRight +=1
        deleteQuestion(questionIndex,questionArray)
        return true
    }else{
        question.numWrong +=1
        return false
    }
}


function deleteQuestion(index,questions){
//questions:array
//index: int
//swaps question id to be deleted with last question id in the array
//for efficient removal of question id
const tempValue = questions[index]
questions[index] = questions[questions.length-1]
questions[questions.length-1] = tempValue
questions.pop()
}


function selectRandomQuestion(idArray){
    //uses a random index to select an id from the idArray and returns that index along with the id 
    //within an object literal.
    const randomIndex = Math.floor(Math.random(),idArray.length)
    return randomQuestion = {
        id: idArray[randomIndex],
        index: randomIndex
    };
}


function difficultySort(idArray,questionMap){
    //computes randomization with weights
    var weights = []
    idArray.sort((a, b) => {
        const questionA = questionMap.get(a);
        const questionB = questionMap.get(b);
        const differenceA = questionA.numRight - questionA.numWrong;
        const differenceB = questionB.numRight - questionB.numWrong;
        return differenceB - differenceA; 
      });
    console.log(idArray)

    //create weights
    for(i=1;i<=idArray.length;i++){
        weights.push(i)
    }

    let randomArray = [];
    idArray.forEach((item, index) => {
        var clone = Array(weights[index]).fill(item);
        randomArray.push(...clone);
    });
    const result = randomArray[~~(Math.random() * randomArray.length)]
    console.log(weights)
    console.log(result)
}



module.exports = {
    mapToArray,
    validateAnswer,
    deleteQuestion,
    selectRandomQuestion,
    difficultySort
}




/*
let questions = [
    question1,
    question2,
    question3,
    ...
]
*/



/*
var question = {
id:1
answer:boo
questionText:question
numRight:0
numWrong:0

}
*/

