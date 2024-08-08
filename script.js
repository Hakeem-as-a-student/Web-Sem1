const itemList1=[//details of fruits
    {"name":"Apple","price":600,"id":"fruit1","qty":"kg1","unit":"kgs"},
    {"name":"Banana","price":250,"id":"fruit2","qty":"kg2","unit":"kgs"},
    {"name":"Dragon Fruit","price":1100,"id":"fruit3","qty":"kg3","unit":"kgs"},
    {"name":"Grapes","price":700,"id":"fruit4","qty":"kg4","unit":"kgs"},
    {"name":"Orange","price":1000,"id":"fruit5","qty":"kg5","unit":"kgs"},
    {"name":"Tomato","price":640,"id":"fruit6","qty":"kg6","unit":"kgs"}

]
const itemList2=[//details of vegetables
    {"name":"Batana","price":450,"id":"vege1","qty":"kg7","unit":"kgs"},
    {"name":"Cabbage","price":400,"id":"vege2","qty":"kg8","unit":"kgs"},
    {"name":"Cucumber","price":200,"id":"vege3","qty":"kg9","unit":"kgs"},
    {"name":"Garlic","price":950,"id":"vege4","qty":"kg10","unit":"kgs"},
    {"name":"Potato","price":500,"id":"vege5","qty":"kg11","unit":"kgs"},
    {"name":"Red Onion","price":400,"id":"vege6","qty":"kg12","unit":"kgs"}
    
]
const itemList3=[//details of dairy
    {"name":"Anchor Full Fat Milk","price":500,"id":"dairy1","qty":"qty1","unit":"qty"},
    {"name":"Ambewela Full Fat Milk","price":550,"id":"dairy2","qty":"qty2","unit":"qty"},
    {"name":"Kotmale Full Fat Milk","price":450,"id":"dairy3","qty":"qty3","unit":"qty"},
    {"name":"Kraft Cheddar Cheese Slices","price":600,"id":"dairy4","qty":"qty4","unit":"qty"},
    {"name":"Kraft Cheddar Cheese","price":1000,"id":"dairy5","qty":"qty5","unit":"qty"},
    {"name":"Kotmale Cheddar Cheese","price":1100,"id":"dairy6","qty":"qty6","unit":"qty"}
]

const itemList4=[//details of meats&seaFood
    {"name":"Beef","price":2200,"id":"meat1","qty":"kg13","unit":"kgs"},
    {"name":"Chicken Breast","price":1980,"id":"meat2","qty":"kg14","unit":"kgs"},
    {"name":"Octopus","price":1350,"id":"meat3","qty":"kg15","unit":"kgs"},
    {"name":"Prawns","price":1470,"id":"meat4","qty":"kg16","unit":"kgs"},
    {"name":"Puffer Fish","price":1500,"id":"meat5","qty":"kg17","unit":"kgs"},
    {"name":"Tilapia","price":2100,"id":"meat6","qty":"kg18","unit":"kgs"}
]
const itemList5=[//details of backed&cookingIngredients
    {"name":"Bread","price":150,"id":"baked1","qty":"qty7","unit":"qty"},
    {"name":"Cookies","price":300,"id":"baked2","qty":"qty8","unit":"qty"},
    {"name":"Croissant","price":350,"id":"baked3","qty":"qty9","unit":"qty"},
    {"name":"Ketchup","price":550,"id":"baked4","qty":"qty10","unit":"qty"},
    {"name":"Mayo","price":1080,"id":"baked5","qty":"qty11","unit":"qty"},
    {"name":"Vanila Extract","price":900,"id":"baked6","qty":"qty12","unit":"qty"}
]


let favList={}//favouriteList
let myFavList_Serial;//serialized favouriteList
let myFavList_DeSerial;//deserialized favouriteList


let finalCost=0;//totalCost Of All Items
let finalCostSerial;//totalCost serialized
let finalCostDeSerial;//totalCost deserialized

const IDList=[//IDs of checkboxes
    "fruit1","fruit2","fruit3","fruit4","fruit5","fruit6",
    "vege1","vege2","vege3","vege4","vege5","vege6",
    "dairy1","dairy2","dairy3","dairy4","dairy5","dairy6",
    "meat1","meat2","meat3","meat4","meat5","meat6",
    "baked1","baked2","baked3","baked4","baked5","baked6"
]


//adding Event Listners

//EVENTLISTNERS FOR FRUITS
document.getElementById("fruit1").addEventListener('click',()=>{
    addList("fruit1",itemList1,"kg1","k");
    
});
document.getElementById("fruit2").addEventListener('click',()=>{
    addList("fruit2",itemList1,"kg2","k");
    
});
document.getElementById("fruit3").addEventListener('click',()=>{
    addList("fruit3",itemList1,"kg3","k");
    
});
document.getElementById("fruit4").addEventListener('click',()=>{
    addList("fruit4",itemList1,"kg4","k");
    
});
document.getElementById("fruit5").addEventListener('click',()=>{
    addList("fruit5",itemList1,"kg5","k");
    
});
document.getElementById("fruit6").addEventListener('click',()=>{
    addList("fruit6",itemList1,"kg6","k");
    
});

//EVENTLISTNERS FOR VEGETABLES
document.getElementById("vege1").addEventListener('click',()=>{
    addList("vege1",itemList2,"kg7","k");
    
});
document.getElementById("vege2").addEventListener('click',()=>{
    addList("vege2",itemList2,"kg8","k");
    
});
document.getElementById("vege3").addEventListener('click',()=>{
    addList("vege3",itemList2,"kg9","k");
    
});
document.getElementById("vege4").addEventListener('click',()=>{
    addList("vege4",itemList2,"kg10","k");
    
});
document.getElementById("vege5").addEventListener('click',()=>{
    addList("vege5",itemList2,"kg11","k");
    
});
document.getElementById("vege6").addEventListener('click',()=>{
    addList("vege6",itemList2,"kg12","k");
    
});

//EVENTLISTNERS FOR DAIRY
document.getElementById("dairy1").addEventListener('click',()=>{
    addList("dairy1",itemList3,"qty1","q");
    
});
document.getElementById("dairy2").addEventListener('click',()=>{
    addList("dairy2",itemList3,"qty2","q");
    
});
document.getElementById("dairy3").addEventListener('click',()=>{
    addList("dairy3",itemList3,"qty3","q");
    
});
document.getElementById("dairy4").addEventListener('click',()=>{
    addList("dairy4",itemList3,"qty4","q");
    
});
document.getElementById("dairy5").addEventListener('click',()=>{
    addList("dairy5",itemList3,"qty5","q");
    
});
document.getElementById("dairy6").addEventListener('click',()=>{
    addList("dairy6",itemList3,"qty6","q");
    
});

//EVENTLISTNERS FOR MEAT % SEAFOOD
document.getElementById("meat1").addEventListener('click',()=>{
    addList("meat1",itemList4,"kg13","k");
    
});
document.getElementById("meat2").addEventListener('click',()=>{
    addList("meat2",itemList4,"kg14","k");
    
});
document.getElementById("meat3").addEventListener('click',()=>{
    addList("meat3",itemList4,"kg15","k");
    
});
document.getElementById("meat4").addEventListener('click',()=>{
    addList("meat4",itemList4,"kg16","k");
    
});
document.getElementById("meat5").addEventListener('click',()=>{
    addList("meat5",itemList4,"kg17","k");
    
});
document.getElementById("meat6").addEventListener('click',()=>{
    addList("meat6",itemList4,"kg18","k");
    
});

//EVENTLISTNERS FOR BAKED ITEMS
document.getElementById("baked1").addEventListener('click',()=>{
    addList("baked1",itemList5,"qty7","q");
    
});
document.getElementById("baked2").addEventListener('click',()=>{
    addList("baked2",itemList5,"qty8","q");
    
});
document.getElementById("baked3").addEventListener('click',()=>{
    addList("baked3",itemList5,"qty9","q");
    
});
document.getElementById("baked4").addEventListener('click',()=>{
    addList("baked4",itemList5,"qty10","q");
    
});
document.getElementById("baked5").addEventListener('click',()=>{
    addList("baked5",itemList5,"qty11","q");
    
});
document.getElementById("baked6").addEventListener('click',()=>{
    addList("baked6",itemList5,"qty12","q");
    
});


document.getElementById('buy').addEventListener('click',buy);//savingFinalCost
document.getElementById('sav_fav').addEventListener('click',addFav);//saveFavourite
document.getElementById('app_fav').addEventListener('click',appFav);//ApplyFavourites


function addList(checkName,itemList,portion,portUni){//checkID,detailsOfProduct,qty/weight,qty/weight Unit
    if(document.getElementById(checkName).checked){
        // console.log(document.getElementById(checkName).id);
        document.getElementById(portion).disabled=true;
        if(document.getElementById(portion).value>0){

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(document.getElementById(checkName).id==itemList[listIndex].id &&document.getElementById(portion).value>0){
                let lineName="id"+document.getElementById(checkName).id;
                
                if(portUni=="q"){//displaying item details
                    let row=`
                            <td>${itemList[listIndex].name}</td>
                            <td>${document.getElementById(portion).value}qty</td>
                            <td>Rs.${itemList[listIndex].price*document.getElementById(portion).value}</td>
                            `;
                            finalCost+=parseInt(`${itemList[listIndex].price*document.getElementById(portion).value}`);
                            
                            document.getElementById(lineName).innerHTML=row;
                            document.getElementById('result').innerText=`Rs.${finalCost}`;
                            
                            //automatically saving items to favourite list
                            favList[`${document.getElementById(checkName).id}`]=itemList[listIndex].name; 
                            favList[`${document.getElementById(portion).id}`]=`${document.getElementById(portion).value}`;
                            favList[`${document.getElementById(portion).id}price`]=parseInt(document.getElementById(portion).value*itemList[listIndex].price);
                            
                            
                }

                else{//displaying items for KGs unit
                    let row=`
                            <td>${itemList[listIndex].name}</td>
                            <td>${document.getElementById(portion).value}kgs</td>
                            <td>Rs.${itemList[listIndex].price*document.getElementById(portion).value}</td>
                            `;
                            finalCost+=parseInt(`${itemList[listIndex].price*document.getElementById(portion).value}`);
                
                document.getElementById(lineName).innerHTML=row;
                document.getElementById('result').innerText=`Rs.${finalCost}`;

                favList[`${document.getElementById(checkName).id}`]=itemList[listIndex].name;
                favList[`${document.getElementById(portion).id}`]=`${document.getElementById(portion).value}`;
                favList[`${document.getElementById(portion).id}price`]=parseInt(document.getElementById(portion).value*itemList[listIndex].price);
                
                }
                
            }
        }}
        else{//preventing user from entering negative values
            alert("Please enter a valid amount for quantity!");
            document.getElementById(checkName).checked=false;
            document.getElementById(portion).disabled=false;
        }
    }

    else if(document.getElementById(checkName).checked==false){//deleting items from tavle if checkbox is unchecked
        
        delete favList[`${document.getElementById(checkName).id}`];
        delete favList[`${document.getElementById(portion).id}`];
        delete favList[`${document.getElementById(portion).id}price`];
        
        
      
        document.getElementById(portion).disabled=false;

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(document.getElementById(checkName).id==itemList[listIndex].id){
               
                finalCost-=parseInt(`${itemList[listIndex].price*document.getElementById(portion).value}`);//dedcutiing the price from the finalCost
                
            }
        }
            
        
        document.querySelector(`#id${document.getElementById(checkName).id}`).innerHTML='';
        document.getElementById('result').innerText=`Rs.${finalCost}`;
    }
}


function addFav(){//saving items to favouriteList
    
    alert('Favourites Saved');
    
    myFavList_Serial=JSON.stringify(favList);
    
    localStorage.setItem('myFavList',myFavList_Serial);
    
}


function appFav(){//fucniton for applying items from favourite list
    myFavList_DeSerial=JSON.parse(localStorage.getItem('myFavList')); //Deserialized List 

    console.log(myFavList_DeSerial);
    let lineNameList=[];
    let IDs=[];
    
    // console.log(concatList);

    for(item in myFavList_DeSerial){
    for(checkID in IDList){//to get the lineName of the table
        if(item==IDList[checkID]){
            let lineName="id"+IDList[checkID];
            
            let ID=IDList[checkID];
            IDs.push(ID);
            lineNameList.push(lineName);
        }
    }
    }

    for (ID in IDs){
        // console.log(IDs[ID]);
        
        for(let listIndex=0;listIndex<6;listIndex++){
                if(IDs[ID]==itemList1[listIndex]["id"]){
                    // console.log(itemList1[listIndex]);
                    document.getElementById(itemList1[listIndex]["id"]).checked=true;
                    document.getElementById(itemList1[listIndex]["qty"]).value=myFavList_DeSerial[itemList1[listIndex]["qty"]];
                    document.getElementById(itemList1[listIndex]["qty"]).disabled=true;
                    document.getElementById("id"+itemList1[listIndex]["id"]).innerHTML=
                    `
                        <td> ${itemList1[listIndex]["name"]} </td>
                        <td> ${myFavList_DeSerial[itemList1[listIndex]["qty"]]}${itemList1[listIndex]["unit"]} </td>
                        <td> ${myFavList_DeSerial[itemList1[listIndex]["qty"]]*itemList1[listIndex]["price"]} </td>

                    `;
                    finalCost+=parseInt(`${myFavList_DeSerial[itemList1[listIndex]["qty"]]*itemList1[listIndex]["price"]}`);
                    
                }
                else if(IDs[ID]==itemList2[listIndex]["id"]){
                    // console.log(itemList2[listIndex]);
                    document.getElementById(itemList2[listIndex]["id"]).checked=true;
                    document.getElementById(itemList2[listIndex]["qty"]).value=myFavList_DeSerial[itemList2[listIndex]["qty"]];
                    document.getElementById(itemList2[listIndex]["qty"]).disabled=true;
                    document.getElementById("id"+itemList2[listIndex]["id"]).innerHTML=
                    `
                        <td> ${itemList2[listIndex]["name"]} </td>
                        <td> ${myFavList_DeSerial[itemList2[listIndex]["qty"]]}${itemList2[listIndex]["unit"]} </td>
                        <td> ${myFavList_DeSerial[itemList2[listIndex]["qty"]]*itemList2[listIndex]["price"]} </td>

                    `;
                    finalCost+=parseInt(`${myFavList_DeSerial[itemList2[listIndex]["qty"]]*itemList2[listIndex]["price"]}`);
                    
                }
                else if(IDs[ID]==itemList3[listIndex]["id"]){
                    // console.log(itemList3[listIndex]);
                    document.getElementById(itemList3[listIndex]["id"]).checked=true;
                    document.getElementById(itemList3[listIndex]["qty"]).value=myFavList_DeSerial[itemList3[listIndex]["qty"]];
                    document.getElementById(itemList3[listIndex]["qty"]).disabled=true;
                    document.getElementById("id"+itemList3[listIndex]["id"]).innerHTML=
                    `
                        <td> ${itemList3[listIndex]["name"]} </td>
                        <td> ${myFavList_DeSerial[itemList3[listIndex]["qty"]]}${itemList3[listIndex]["unit"]}</td>
                        <td> ${myFavList_DeSerial[itemList3[listIndex]["qty"]]*itemList3[listIndex]["price"]} </td>

                    `;
                    finalCost+=parseInt(`${myFavList_DeSerial[itemList3[listIndex]["qty"]]*itemList3[listIndex]["price"]}`);
                    
                }
                else if(IDs[ID]==itemList4[listIndex]["id"]){
                    // console.log(itemList4[listIndex]);
                    document.getElementById(itemList4[listIndex]["id"]).checked=true;
                    document.getElementById(itemList4[listIndex]["qty"]).value=myFavList_DeSerial[itemList4[listIndex]["qty"]];
                    document.getElementById(itemList4[listIndex]["qty"]).disabled=true;
                    document.getElementById("id"+itemList4[listIndex]["id"]).innerHTML=
                    `
                        <td> ${itemList4[listIndex]["name"]} </td>
                        <td> ${myFavList_DeSerial[itemList4[listIndex]["qty"]]}${itemList4[listIndex]["unit"]}</td>
                        <td> ${myFavList_DeSerial[itemList4[listIndex]["qty"]]*itemList4[listIndex]["price"]} </td>

                    `;
                    finalCost+=parseInt(`${myFavList_DeSerial[itemList4[listIndex]["qty"]]*itemList4[listIndex]["price"]}`);
                    
                }
                else if(IDs[ID]==itemList5[listIndex]["id"]){
                    // console.log(itemList5[listIndex]);
                    document.getElementById(itemList5[listIndex]["id"]).checked=true;
                    document.getElementById(itemList5[listIndex]["qty"]).value=myFavList_DeSerial[itemList5[listIndex]["qty"]];
                    document.getElementById(itemList5[listIndex]["qty"]).disabled=true;
                    document.getElementById("id"+itemList5[listIndex]["id"]).innerHTML=
                    `
                        <td> ${itemList5[listIndex]["name"]} </td>
                        <td> ${myFavList_DeSerial[itemList5[listIndex]["qty"]]}${itemList5[listIndex]["unit"]}</td>
                        <td> ${myFavList_DeSerial[itemList5[listIndex]["qty"]]*itemList5[listIndex]["price"]} </td>

                    `;
                    finalCost+=parseInt(`${myFavList_DeSerial[itemList5[listIndex]["qty"]]*itemList5[listIndex]["price"]}`);

                }
                
        }
    }
    document.getElementById('result').innerText=`Rs.${finalCost}`;
}

function buy(){//funtion to save the final Cost
    finalCostSerial=JSON.stringify(finalCost);
    localStorage.setItem('finalCostString',finalCostSerial);
}

