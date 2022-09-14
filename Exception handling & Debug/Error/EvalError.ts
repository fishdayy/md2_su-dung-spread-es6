var score={
    checkerror:function (score){
        if(score<0)
        {
            try{
                throw new EvalError('Error occurred');
            }catch(e)
            {
                console.log(e.message);
            }

        }
    }
}
console.log(score.checkerror(-3));