function validateAnswer(Useranswer,id,question){
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









/*
var question = {
id:1
answer:boo
questionText:question
numRight:0
numWrong:0

}


*/

