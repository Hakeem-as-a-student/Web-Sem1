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


let favList=[]//favouriteList

let finalCost=0;

function addList(checkName,itemList,portion){//checkID,checkIDList,releventBodyOfTable,detailsOfProduct,qty/weight
    if(checkName.checked){
        portion.disabled=true;
        if(portion.value>0){

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(checkName.id==itemList[listIndex].id &&portion.value>0){
                let lineName="id"+checkName.id;
                // console.log(lineName);

                let row=`
                        <td>${itemList[listIndex].name}</td>
                        <td>${portion.value}qty</td>
                        <td>Rs.${itemList[listIndex].price*portion.value}</td>
                        `;
                // console.log(`id${checkName.id}`);

                finalCost+=parseInt(`${itemList[listIndex].price*portion.value}`);
                console.log(finalCost);
                document.getElementById(lineName).innerHTML=row;
                document.getElementById('result').innerText=`Rs.${finalCost}`;

                favList[`${checkName.id}`]=itemList[listIndex].name;
                favList[`${portion.id}`]=`${portion.value}`;
                favList[`${portion.id}price`]=parseInt(portion.value*itemList[listIndex].price);
                
                console.log(favList);

            }
        }}
        else{
            alert("Please enter a valid amount for quantity!")
            checkName.checked=false;
            portion.disabled=false
        }
    }

    else if(checkName.checked==false){
        
        delete favList[`${checkName.id}`];
        delete favList[`${portion.id}`];
        delete favList[`${portion.id}price`];
        
        console.log(favList);
      
        portion.disabled=false;

        for(let listIndex=0; listIndex<6; listIndex++){
            
            if(checkName.id==itemList[listIndex].id){
               
                finalCost-=parseInt(`${itemList[listIndex].price*portion.value}`);
                console.log(finalCost);
            }
        }
            
        console.log(finalCost);
        document.querySelector(`#id${checkName.id}`).innerHTML='';
        document.getElementById('result').innerText=`Rs.${finalCost}`;
    }
}


function addFav(favList){//favouriteList
    // const fs=require('fs');

    for (let item in favList){
        // console.log(favList[item]);
        let itemValue=favList[item];
        console.log(itemValue);
    }
    
    


    // fs.readFile('test.txt',"utf8",(err,data)=>{
    //     if(err){
    //         console.error(err);
    //         return;
    //     }
    //     console.log(data);
    // });
}