const itemList1=[//details of fruits
    {"name":"Apple","price":600,"id":"fruit1","count":1},
    {"name":"Banana","price":250,"id":"fruit2","count":1},
    {"name":"Dragon Fruit","price":1100,"id":"fruit3","count":1},
    {"name":"Grapes","price":700,"id":"fruit4","count":1},
    {"name":"Orange","price":1000,"id":"fruit5","count":1},
    {"name":"Tomato","price":640,"id":"fruit6","count":1}

]
const itemList2=[//details of vegetables
    {"name":"Batana","price":450,"id":"vege1","count":1},
    {"name":"Cabbage","price":400,"id":"vege2","count":1},
    {"name":"Cucumber","price":200,"id":"vege3","count":1},
    {"name":"Garlic","price":950,"id":"vege4","count":1},
    {"name":"Potato","price":500,"id":"vege5","count":1},
    {"name":"Red Onion","price":400,"id":"vege6","count":1}
    
]
const itemList3=[//details of dairy
    {"name":"Anchor Full Fat Milk","price":500,"id":"dairy1","count":1},
    {"name":"Ambewela Full Fat Milk","price":550,"id":"dairy2","count":1},
    {"name":"Kotmale Full Fat Milk","price":450,"id":"dairy3","count":1},
    {"name":"Kraft Cheddar Cheese Slices","price":600,"id":"dairy4","count":1},
    {"name":"Kraft Cheddar Cheese","price":1000,"id":"dairy5","count":1},
    {"name":"Kotmale Cheddar Cheese","price":1100,"id":"dairy6","count":1}
]

const itemList4=[//details of meats&seaFood
    {"name":"Beef","price":2200,"id":"meat1","count":1},
    {"name":"Chicken Breast","price":1980,"id":"meat2","count":1},
    {"name":"Octopus","price":1350,"id":"meat3","count":1},
    {"name":"Prawns","price":1470,"id":"meat4","count":1},
    {"name":"Puffer Fish","price":1500,"id":"meat5","count":1},
    {"name":"Tilapia","price":2100,"id":"meat6","count":1}
]
const itemList5=[//details of backed&cookingIngredients
    {"name":"Bread","price":150,"id":"baked1","count":1},
    {"name":"Cookies","price":300,"id":"baked2","count":1},
    {"name":"Croissant","price":350,"id":"baked3","count":1},
    {"name":"Ketchup","price":550,"id":"baked4","count":1},
    {"name":"Mayo","price":1080,"id":"baked5","count":1},
    {"name":"Vanila Extract","price":900,"id":"baked6","count":1}
]


let favList={}//favouriteList
let myFavList_Serial;//serialized favouriteList
let myFavList_DeSerial;//deserialized favouriteList


let finalCost=0;//totalCost Of All Items
let finalCostSerial;//totalCost serialized
let finalCostDeSerial;//totalCost deserialized


function addList(checkName,itemList,portion,portUni){//checkID,detailsOfProduct,qty/weight,qty/weight Unit
    if(checkName.checked){
        
        portion.disabled=true;
        if(portion.value>0){

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(checkName.id==itemList[listIndex].id &&portion.value>0){
                let lineName="id"+checkName.id;
                
                if(portUni=="q"){//displaying item details
                    let row=`
                            <td>${itemList[listIndex].name}</td>
                            <td>${portion.value}qty</td>
                            <td>Rs.${itemList[listIndex].price*portion.value}</td>
                            `;
                            finalCost+=parseInt(`${itemList[listIndex].price*portion.value}`);
                            
                            document.getElementById(lineName).innerHTML=row;
                            document.getElementById('result').innerText=`Rs.${finalCost}`;
                            
                            //automatically saving items to favourite list
                            favList[`${checkName.id}`]=itemList[listIndex].name; 
                            favList[`${portion.id}`]=`${portion.value}`;
                            favList[`${portion.id}price`]=parseInt(portion.value*itemList[listIndex].price);
                            
                            
                }

                else{//displaying items for KGs unit
                    let row=`
                            <td>${itemList[listIndex].name}</td>
                            <td>${portion.value}kgs</td>
                            <td>Rs.${itemList[listIndex].price*portion.value}</td>
                            `;
                            finalCost+=parseInt(`${itemList[listIndex].price*portion.value}`);
                
                document.getElementById(lineName).innerHTML=row;
                document.getElementById('result').innerText=`Rs.${finalCost}`;

                favList[`${checkName.id}`]=itemList[listIndex].name;
                favList[`${portion.id}`]=`${portion.value}`;
                favList[`${portion.id}price`]=parseInt(portion.value*itemList[listIndex].price);
                
                
                }
                
            }
        }}
        else{//preventing user from entering negative values
            alert("Please enter a valid amount for quantity!")
            checkName.checked=false;
            portion.disabled=false
        }
    }

    else if(checkName.checked==false){//deleting items from tavle if checkbox is unchecked
        
        delete favList[`${checkName.id}`];
        delete favList[`${portion.id}`];
        delete favList[`${portion.id}price`];
        
        
      
        portion.disabled=false;

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(checkName.id==itemList[listIndex].id){
               
                finalCost-=parseInt(`${itemList[listIndex].price*portion.value}`);//dedcutiing the price from the finalCost
                
            }
        }
            
        
        document.querySelector(`#id${checkName.id}`).innerHTML='';
        document.getElementById('result').innerText=`Rs.${finalCost}`;
    }
}


function addFav(favList){//saving items to favouriteList
    
    alert('Favourites Saved');
    // console.log(favList);
    myFavList_Serial=JSON.stringify(favList);
    // console.log(myFavList_Serial); //Serialized List
    
    localStorage.setItem('myFavList',myFavList_Serial);
    // console.log(localStorage);
}

function appFav(myFavList_DeSerial){//fucniton for applying items from favourite list
    myFavList_DeSerial=JSON.parse(localStorage.getItem('myFavList')); //Deserialized List 
    console.log(localStorage);
    console.log(myFavList_DeSerial);
}

function buy(){//funtion to save the final Cost
    finalCostSerial=JSON.stringify(finalCost);
    localStorage.setItem('finalCostString',finalCostSerial);
    
}

/* --------------------------------------------------Functions for payement page----------------------------------------------------------*/

function test(){//saving final Cost to display on page
    finalCostDeSerial=JSON.parse(localStorage.getItem('finalCostString'));
    console.log(finalCostDeSerial);
    document.getElementById("price").innerHTML=`${finalCostDeSerial }`

}

let radio1=document.getElementById('credit');//getting radioButton ID
let radio2=document.getElementById('debit');//getting radioButton ID
let radio3=document.getElementById('cod');//getting radioButton ID

function unlock(){//function for unlocking fields to enter credit details
    if (radio1.checked==false && radio2.checked==false && radio3.checked==false){
        
        document.getElementById("cardNum").disabled=true;
        document.getElementById("exp").disabled=true;
        document.getElementById("cvv").disabled=true;
        
        document.getElementById('cardID').style.color="grey";
        document.getElementById('expID').style.color="grey";
        document.getElementById('cvvID').style.color="grey";

    }
    else{
        
        document.getElementById("cardNum").disabled=false;
        document.getElementById("exp").disabled=false;
        document.getElementById("cvv").disabled=false;

        document.getElementById('cardID').style.color="black";
        document.getElementById('expID').style.color="black";
        document.getElementById('cvvID').style.color="black";
    }
}

