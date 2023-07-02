const users = [
    {name:"Temo",age:25},
    {name:"Lasha",age:21},
    {name:"Ana",age:28}
];

const userObjct={
    name:'Oto',
    age:66
};



//1 Function to return user with smallest age 
function userWithSA(user){
    let userSmallage = user[0];
    user.forEach(element=>{
        if(element.age<userSmallage.age){
            userSmallage = element
        } 
    });
    return userSmallage.name
};

//2 Function returns new object with same values
function createNewObj(user){
    let newObject = {};
    for(let key in user){
        newObject[key] = user[key]
    }
    return newObject
};


//3 Function dice game 
function diceRoll(){
    let playerA = null;
    let playerB = null;
    let winner = false;
    while(!winner){
        playerA = Math.floor(Math.random()*6+1);
        //console.log(playerA+'a') 
        if(playerA===3){
            winner = true;
            console.log('Player A win');
            // break so it does`t exacute playeb math(because somtimes they
            // bouth get num 3)
            break
        }
        playerB = Math.floor(Math.random()*6+1);
        //console.log(playerB+"b") 
        if(playerB===3){
            winner = true;
            console.log('Player B win');
        }
    }
};





//return user with smallest age
console.log(userWithSA(users));
//return new object
console.log(createNewObj(userObjct));
//call dice game
diceRoll();



