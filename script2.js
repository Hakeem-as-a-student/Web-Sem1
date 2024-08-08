/* --------------------------------------------------Functions for payement page----------------------------------------------------------*/
//EVENTLISTNERS
window.addEventListener('load',test);//to Save the finalCost to localStorage and display on payment page
window.addEventListener('load',unlock);//disabling fields if COD is selected

document.getElementById('credit').addEventListener("click",unlock);//radiotBtn eventListner
document.getElementById('debit').addEventListener("click",unlock);//radiotBtn eventListner
document.getElementById('cod').addEventListener("click",unlock);//radiotBtn eventListner
 

function unlock(){//function for unlocking fields to enter credit details
    
    if (document.getElementById('credit').checked==false && document.getElementById('debit').checked==false){
        
        document.getElementById("cardNum").disabled=true;
        document.getElementById("exp").disabled=true;
        document.getElementById("cvv").disabled=true;
        
        
    }
    else{
        
        document.getElementById("cardNum").disabled=false;
        document.getElementById("exp").disabled=false;
        document.getElementById("cvv").disabled=false;

    }
}



function test(){//saving final Cost to display on page
    let finalCostDeSerial=JSON.parse(localStorage.getItem('finalCostString'));
    console.log(finalCostDeSerial);
    console.log('balls');
    document.getElementById("price").innerHTML=`${finalCostDeSerial }`

}



