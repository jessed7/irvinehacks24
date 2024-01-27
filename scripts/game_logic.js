


//questions: map



function mapToArray(questions){
    return Array.from(questions.keys())
}
//var idArray = mapToArray(questions)


function validateAnswer(UserAnswer,id,question){
    //answer:string
    //id:int
    //question:map
    var question = questionMap.get(id)
    if(answer===question.answer){
        question.numRight +=1
        return true
    }else{
        question.numWrong +=1
        return false

    }
}




function deleteQuestion(index,questions){
//questions:array
//index: int

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

