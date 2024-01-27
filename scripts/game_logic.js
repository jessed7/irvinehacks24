


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
    idArray.sort((a, b) => {
        const questionA = questionMap[a];
        const questionB = questionMap[b];
        const differenceA = questionA.numright - questionA.numwrong;
        const differenceB = questionB.numright - questionB.numwrong;
        return differenceB - differenceA; 
      });
    console.log(idArray)
}



module.exports = {
    mapToArray,
    validateAnswer,
    deleteQuestion,
    selectRandomQuestion
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

