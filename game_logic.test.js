
const {mapToArray, selectRandomQuestion, deleteQuestion, validateAnswer, difficultySort} = require('./scripts/game_logic.js');




//test mapToArray
question1 = {
    id:1
}
question2 = {
    id:2
}

const testMap = new Map();

testMap.set(question1.id,question1);
testMap.set(question2.id,question2);


test("converting from map of questions to array of id's",()=>{
expect(mapToArray(testMap)).toEqual([1,2])
});
//test map to array


//test question deletion
test("deleting questions from question array",()=>{
    var idQuestionArray = [1,2,3,4,5,6,7]
    var deletionIndex = 3
    var deletedId = idQuestionArray[deletionIndex]
    //function call
    deleteQuestion(deletionIndex,idQuestionArray)
    //function call
    console.log(idQuestionArray)
    expect(idQuestionArray).not.toContain(deletedId)
    
});


//test answer validation
test("validating answer correctness",()=>{
var userAnswer1 = "dog"
var userAnswer2 = "cat"
var idQuestionArray = [1,2,3,4,5]
var question1 = {
    id:1,
    answer:"dog"
}

var question2 = {
    id:2,
    answer:"cat"
}
var questionIndex = 1

var questionMap = new Map();

questionMap.set(question1.id,question1)
questionMap.set(question2.id,question2)
//incorrect answer
expect(validateAnswer(userAnswer1,question2.id,questionIndex,idQuestionArray,questionMap)).toBe(false)
//correct answer
expect(validateAnswer(userAnswer2,question2.id,questionIndex,idQuestionArray,questionMap)).toBe(true)
expect(idQuestionArray).not.toContain(question2.id)

})




test("weighted randomization",()=>{
idArray = 


difficultySort()




})







//test random question
var idArray = [1,2,3,4,5,6,7,8,9,10]
/*
test("selecting random question from questions array",()=>{
expect(selectRandomQuestion(idArray)).toEqual({

}
)
    
});
*/



//test random question
