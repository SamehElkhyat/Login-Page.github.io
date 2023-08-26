// var myHttp= new XMLHttpRequest();
// myHttp.open("GET","");
// var allItem=[];
// myHttp.send();
// myHttp.addEventListener('readystatechange', function(){

//  if(myHttp.readyState ==4)
//  {
// allItem = JSON.parse(myHttp.response);


//  }





// })



// function displayItems()
// {
//  var cartona=``;
//  for(i=0;i<allItem.length;i++)

//  {
//     cartona+=`
//     <div class="item">
    
    
//     </div>
    
    
    
//     `


//  }
// }
// function AddElments(elmentsnumber,elmentsid)
// {

// var cartona ="";
// for(var i=0;i<elmentsnumber;i++)
// {

// cartona+="<h1>sameh</h1>";


// }
// document.getElementById(elmentsid).innerHTML= cartona ;


// }

// AddElments(10,"demo")
// AddElments(10,"profile")



// var imgList=document.querySelectorAll('.item img');
// var lightBox =document.getElementById('layeer');

// for(i=0;i<imgList.length;i++)
// {
//     imgList[i].addEventListener('click', function(eveninfo){

//     lightBox.style.display='flex'

//     var imagsrc = eveninfo.target.getAttribute('src');
//     layeer.firstlementchild






//     })



// }


// var x = window.prompt(x)
// var products = {
// name:'sameh',
// number:11+100,




// };

// console.log(products[x])

// var gang=[
// {name:'oppo',price:6000,catogry:'phone',desc:'good product'},
// {name:'samsung',price:5000,catogry:'phone',desc:'good product'},
// {name:'Iphone',price:12000,catogry:'phone',desc:'good product'},
// {name:'iphone12promax',price:25000,catogry:'phone',desc:'good product'},
// {name:'oppo',price:6000,catogry:'phone',desc:'good product'},
// {name:'oppo',price:6000,catogry:'phone',desc:'good product'},
// {name:'oppo',price:6000,catogry:'phone',desc:'good product'},]
// for(var i=0; i<gang.length;i++)
// {
// console.log(gang[i])
// }



// function user(myname , myage , mysalary ,mygender)
// {
// this.name =myname;
// this.age =myage;
// this.salary =mysalary;
// this.gender =mygender;

// }


// user.prototype.login=function(username , password)
// {
// console.log('hello'+username)
// }


// let user1 = new user('ahmed',19,5000,'male');
// let user2 = new user('ahmed',19,5000,'male');


// user2.log(sameh,3030)
var productnameinput = document.getElementById('prodectName')
var productpriceinput = document.getElementById('prodectPrice')
var buttonclick= document.querySelector('.login')

var listprodect=[]

 buttonclick.addEventListener('click' ,function addproduct()
 {
 
 var products= {
 
 name :prodectName.value,
 price :prodectPrice.value,
 
 }
 
  listprodect.push(products);
 
 displayproducts()
 }
 )
function addproduct()
{

var products= {

name :prodectName.value,
price :prodectPrice.value,

}

 listprodect.push(products);

displayproducts()
}


function displayproducts()
{
   cartoona=``;
for(var i=0;i<listprodect.length;i++)
{
    cartoona+=`<tr>
    <td>${listprodect[i].name}</td>
    <td>${listprodect[i].price}</td>
    
    <td><button class="update btn bg-info">visit</button></td>
    <td><button onclick="deleteuser(${i})" class="delete btn bg-danger">delete</button></td>

    </tr>`;
}

document.getElementById('geras').innerHTML=cartoona;


}
function deleteuser(userremove)
{
    listprodect.splice(userremove,1)
    displayproducts(listprodect)

}


// let person={
// name:'sameh',
// sallry:5000,
// hello:function()
// {

//     console.log(name)

// },
// calcsallry:function()
// {

// calltaxes:function()
// {

// return this.sallry*0,1;

// }

// }

// }
// let x =person.calcsallry();

// let product =[100,50,60,10,20];
// let newproduct=product.filter((price)=> price<50).map((price)=>price+10)
// let sum =newproduct.reduce((total,price) => {return total+price})

// let person = new Map();

// person.set('name' , 'ahmed')
// .set('age' , (19))
// .set('gender' , 'male')
// person.set('salary', 5000);
// person.has('gender');


// for(let[key,value] of person)
// {

// console.log(`${key}=${value}`)

// }









