//getting input
//fruits
let fruit1=document.querySelector("#fruit1");
let fruit2=document.querySelector("#fruit2");
let fruit3=document.querySelector("#fruit3");
let fruit4=document.querySelector("#fruit4");
let fruit5=document.querySelector("#fruit5");
let fruit6=document.querySelector("#fruit6");

let checkArray=[fruit1,fruit2,fruit3,fruit4,fruit5,fruit6];
//details of available fruits
let fruitArray=[
        {"name":"apple","weight":"1kg","price":"Rs.100"},
        {"name":"banana","weight":"1kg","price":"Rs.100"},
        {"name":"dragon fruit","weight":"1kg","price":"Rs.100"},
        {"name":"grapes","weight":"1kg","price":"Rs.100"},
        {"name":"orange","weight":"1kg","price":"Rs.100"},
        {"name":"tomato","weight":"1kg","price":"Rs.100"},
    ]
    
    
    // buildTable(fruitArray)

// if(fruit1){
//     itemOrder=1;
//     console.log("fruit1");
// }
// if(fruit2){
//     itemOrder=2;
//     console.log("fruit2");
// }
// if(fruit3){
//     itemOrder=3;
//     console.log("fruit3");
// }
// else if(fruit4){
//     itemOrder=4;
//     console.log("fruit4");
// }
// else if(fruit5){
//     itemOrder=5;
//     console.log("fruit5");
// }
// else if(fruit6){
//     itemOrder=6;
//     console.log("fruit6");
// }
if(fruit1.checked===true){
fruit1.addEventListener('click',buildTable(fruitArray))
console.log("hei");
}

function buildTable(data){
    let table=document.getElementById('t_body');
    let itemOrderList=[0,1,2,3,4,5]

    if (fruit1){
    for (let i=0;i<data.length;i++){
        let row=`<tr>
                    <td>${data[i].name} </td>
                    <td>${data[i].weight} </td>
                    <td>${data[i].price} </td>

                </tr>`
        
                console.log(i);
                console.log(typeof(fruitArray));
        table.innerHTML+=row;
    }}
    else{
        table.innerHTML=' ';
    }

}
