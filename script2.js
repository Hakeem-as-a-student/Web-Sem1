
let tableBody1=document.getElementById('t_body');
let tableBody2=document.getElementById('t_body2');
let tableBody3=document.getElementById('t_body3');
let tableBody4=document.getElementById('t_body4');
let tableBody5=document.getElementById('t_body5');


let item1Array=[];//checkbox IDs
let item2Array=[];//checkbox IDs
let item3Array=[];//checkbox IDs
let item4Array=[];//checkbox IDs
let item5Array=[];//checkbox IDs

let resetItem1Array=new Set()//used to dedutct the added value from the finalCost for fruits
let resetItem2Array=new Set()//used to dedutct the added value from the finalCost for veges
let resetItem3Array=new Set()//used to dedutct the added value from the finalCost for dairy
let resetItem4Array=new Set()//used to dedutct the added value from the finalCost for meat
let resetItem5Array=new Set()//used to dedutct the added value from the finalCost for baked


let finalCost=0;//totalCost of Items

let totCost1=0;//totalCost of fruits
let totCost2=0;//totalCost of veges
let totCost3=0;//totalCost of dairy
let totCost4=0;//totalCost of meats
let totCost5=0;//totalCost of baked


const itemList1=[//details of fruits
    {"name":"Apple","weight":"1kg","price":100,"id":"fruit1","count":1},
    {"name":"Banana","weight":"1kg","price":200,"id":"fruit2","count":1},
    {"name":"Dragon Fruit","weight":"1kg","price":300,"id":"fruit3","count":1},
    {"name":"Grapes","weight":"1kg","price":300,"id":"fruit4","count":1},
    {"name":"Orange","weight":"1kg","price":200,"id":"fruit5","count":1},
    {"name":"Tomato","weight":"1kg","price":100,"id":"fruit6","count":1}

]
const itemList2=[//details of vegetables
    {"name":"Batana","weight":"1kg","price":250,"id":"vege1","count":1},
    {"name":"Cabbage","weight":"1kg","price":80,"id":"vege2","count":1},
    {"name":"Cucumber","weight":"1kg","price":100,"id":"vege3","count":1},
    {"name":"Garlic","weight":"1kg","price":90,"id":"vege4","count":1},
    {"name":"Potato","weight":"1kg","price":100,"id":"vege5","count":1},
    {"name":"Red Onion","weight":"1kg","price":90,"id":"vege6","count":1}
    
]
const itemList3=[//details of dairy
    {"name":"Anchor Full Fat Milk","weight":"1kg","price":400,"id":"dairy1","count":1},
    {"name":"Ambewela Full Fat Milk","weight":"1kg","price":500,"id":"dairy2","count":1},
    {"name":"Kotmale Full Fat Milk","weight":"1kg","price":450,"id":"dairy3","count":1},
    {"name":"Kraft Cheddar Cheese Slices","weight":"1kg","price":450,"id":"dairy4","count":1},
    {"name":"Kraft Cheddar Cheese","weight":"1kg","price":250,"id":"dairy5","count":1},
    {"name":"Kotmale Cheddar Cheese","weight":"1kg","price":200,"id":"dairy6","count":1}
]

const itemList4=[//details of meats&seaFood
    {"name":"Beef","weight":"1kg","price":200,"id":"meat1","count":1},
    {"name":"Chicken Breast","weight":"1kg","price":300,"id":"meat2","count":1},
    {"name":"Octopus","weight":"1kg","price":250,"id":"meat3","count":1},
    {"name":"Prawns","weight":"1kg","price":100,"id":"meat4","count":1},
    {"name":"Puffer Fish","weight":"1kg","price":200,"id":"meat5","count":1},
    {"name":"Tilapia","weight":"1kg","price":200,"id":"meat6","count":1}
]
const itemList5=[//details of backed&cookingIngredients
    {"name":"Bread","weight":"1kg","price":200,"id":"baked1","count":1},
    {"name":"Cookies","weight":"1kg","price":150,"id":"baked2","count":1},
    {"name":"Croissant","weight":"1kg","price":200,"id":"baked3","count":1},
    {"name":"Ketchup","weight":"1kg","price":250,"id":"baked4","count":1},
    {"name":"Mayo","weight":"1kg","price":250,"id":"baked5","count":1},
    {"name":"Vanila Extract","weight":"1kg","price":70,"id":"baked6","count":1}
]


function addList(checkName,listName){//checkID,checkID list 
    if (checkName.checked){  
           
        listName[`${checkName.id}`]=checkName.id;

    }
    else{
        
        delete listName[`${checkName.id}`];
    }
    console.log(listName);
}

function addTable(listName,bodyName,btn,itemList,costNum,resetList){//checkIDList,tableBodyID,btnPurpose,detailsOfProducts,costNumber,deductAddedCost
    
    
    if (btn=='a'){
        costNum=0;    
        for(let item in listName){
            let itemValue=listName[item];
            resetList.add(itemValue);
            
            for(let listIndex=0; listIndex<6; listIndex++){
                
                if (itemValue==itemList[listIndex].id && itemList[listIndex].count==1){
                    
                    let row=`<tr> 
                                <td> ${itemList[listIndex].name}</td> 
                                <td> ${itemList[listIndex].weight}</td>
                                <td> ${itemList[listIndex].price}</td>
                            </tr>`;
                    
                    bodyName.innerHTML+=row;
                    itemList[listIndex].count=0;

                    //calculating cost
                    costNum+=itemList[listIndex].price;
                    
                    console.log(finalCost);
                }
                
            }
            
        }
    finalCost+=costNum;
    document.getElementById('result').innerText=`${finalCost}`;

    }
    else if(btn=='r'){

        for(let item of resetList){
            let itemValue=item;
            
            for(let listIndex=0; listIndex<6; listIndex++){
                if (itemValue==itemList[listIndex].id && itemList[listIndex].count==0){
                    costNum+=itemList[listIndex].price;
                }
            }
        }
        
        console.log(costNum);
        finalCost-=costNum;
        console.log(finalCost);

        for(let listIndex=0; listIndex<6; listIndex++){
            itemList[listIndex].count=1;
        }

        bodyName.innerHTML='';

        for(let item in listName){
            let itemValue=listName[item];
            document.querySelector(`#${itemValue}`).checked=false;
            delete listName[item];
        }

    document.getElementById('result').innerText=`${finalCost}`;
    console.log(resetList);
}
    
}
