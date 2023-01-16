//display items
function display(num){
    result.value += num 
  }
  function del(){
  result.value=''
  }
  function ans(){
     result.value= eval(result.value)
   //   console.log( typeof(result.value));
     
  }
  function backnum(){
      result.value=result.value.slice(0,-1)
  }