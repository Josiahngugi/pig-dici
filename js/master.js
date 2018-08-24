var randomNumber
var marks=[]
var totalscore
function roll(){
    var randomNumber=Math.floor((Math.random()*6)+1)
    // userinterface
    $(document).ready(function(){
      $("#randomResult1").text(randomNumber)
      $("#totalresult1").text(totalscore)
    })
    if(randomNumber !==1){
      marks.push(randomNumber)
      totalscore= marks.reduce((a,b)=>a+b)
    }
    else {
      marks.length=0
      totalscore=0
    }
}

function hold(){

}
