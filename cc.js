// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.json';
// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.jscrc';

// const bodyParser = require("body-parser");



// const endpoint = 'http://alex-j-k.github.io/CC/character.json';
// const endpoint = 'http://alex-j-k.github.io/CC/character.jscrc';


// const endpoint = 'https://raw.githubusercontent.com/alex-j-k/cc/main/character.json';

// const characters = [];

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => characters.push(...data))
//     .catch(error => console.error(error));

//     console.log(characters);
//     console.log(typeof(characters));





















//RADICAL CONSTANTS

const 冂 = [['冂'], ['jiong1'], ['Box']];
const 人 = [['人'], ['ren2'], ['Man']];
const 儿 =  [['儿'], ['er2'], ['Son']];

const N = ['', '', ''];



// CHARACTER CLASS CONSTRUCTOR

class Character {
    constructor(main, pinyin, def, list, rad1, rad2, rad3, rad4){
        this.main = main;
        this.pinyin = pinyin;
        this.def = def;
        this.list = list;
        this.rad1 = rad1;
        this.rad2 = rad2;
        this.rad3 = rad3;
        this.rad4 = rad4;
    }
};



//CHARACTER CONSTANTS

const 喝 = new Character('喝', 'he1','To Drink', ['喝','曷', '渴', '揭', '歇'], [...冂],[...N],[...N],[...N]); 
const 曷 = new Character('曷', 'he2','Why?',['喝','曷', '渴', '揭', '歇'],[...冂], [...N],[...N],[...N]);
const 渴 = new Character('渴', 'ke3','Thirsty',['喝','曷', '渴', '揭', '歇'], [...冂],[...N],[...N],[...N]);
const 揭 = new Character('揭', 'jie1','To Lift',['喝','曷', '渴', '揭', '歇'],[...冂],[...N],[...N],[...N]);
const 歇 = new Character('歇', 'xie1','To Rest',['喝','曷', '渴', '揭', '歇'], [...冂],[...N],[...N],[...N]);

const 见 = new Character('见', 'jian4','To See',['见', '贝'], [...冂],[...儿],[...N],[...N]);
const 贝 = new Character('贝', 'bei4','Shell',['见', '贝'], [...冂],[...人],[...N],[...N]);

console.log(见.toString());

//ARRAY OF ALL CHARACTERS
 
const characters = [
    [喝, 曷, 渴, 揭, 歇],
    [见, 贝],
    
 ];





















//GENERIC FUNCTION TO CREATE NEW CHARCTER INFORMATION SLAB
function createSlab(ch){

    let newSlab = `<div class="characterslab" id="${ch.main}">
                <div class="maincharacter" id="${ch.main}">
                <h1 id="${ch.main}">${ch.main}</h1>
            </div>
            <div class="infoandlist" id="${ch.main}">
                <div class="info" id="${ch.main}">
                    <p class="pmain" id="${ch.main}">${ch.pinyin}</p>
                    <p class="pmain" id="${ch.main}">${ch.def}</p>
                </div>
                <div class="list" id="${ch.main}">
                    <p class="pmain similarList" id="${ch.main}"> ${ch.list.join(' ')}</p>
                </div>
            </div>
    </div>
    <div class="confusingslabcontainer ${ch.main}" id="${ch.list}">
    </div>
    `;

    document.getElementById('wrapper').innerHTML += newSlab; 
};

// document.addEventListener('DOMContentLoaded',()=> createSlab());




//GENERIC FUNCTION TO CREATE NEW CONFUSING CHARCTER SLAB

function createConfusingSlab(ch){

    let newConfusingSlab = `
    
<div class="confusingslab">
    <div class="maincharacterB">
            <h1 class="h1b">${ch.main}</h1>
    </div>
    <div class="infoB">
            <p>${ch.pinyin}</p>
            <p >${ch.def}</p>
    </div>
    <div class="radicals">
                   <div class="rad1">
                        <p class="r">${ch.rad1[0]}</p><p class="p">${ch.rad1[1]}</p><p class="m">${ch.rad1[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad2[0]}</p><p class="p">${ch.rad2[1]}</p><p class="m">${ch.rad2[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad3[0]}</p><p class="p">${ch.rad3[1]}</p><p class="m">${ch.rad3[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad4[0]}</p><p class="p">${ch.rad4[1]}</p><p class="m">${ch.rad4[2]}</p>
                    </div>    
    </div>
</div> `;


//HIDE UNDEFINED RADICALS ON CHARACTER SLAB
const paragraph = document.querySelectorAll('p');
paragraph.forEach(para =>{if (typeof para == ''){para.style.display = 'none'}   } );



// //PUT CONF SLABS IN CONTAINERS

const confcontainer = document.querySelectorAll('.confusingslabcontainer');
confcontainer.forEach(container =>{ if (container.id.includes(ch.main) && container.childElementCount < (container.id.length / 2))
    {container.innerHTML += newConfusingSlab }  } );

    // document.getElementById('wrapper').innerHTML += newConfusingSlab;  DELETE DONE ABOVE

};




















//SPECIFIC FUNCTION TO CREATE NEW CHARCTER INFORMATION SLAB FOR ALL CHARACTERS
// const makeCharacterSlabs =  characters.forEach(array => {array.forEach(char =>createSlab(char) ) });

setTimeout(() => characters.forEach(array => {array.forEach(char =>createSlab(char))}), 000);




//SPECIFIC FUNCTION TO LOOP SIMILAR CONFUSING CHARACTERSLAB 
let arrayToLoop = [];


const makeConfArray = function() {
const simCharacterlists = Array.from(document.querySelectorAll('.similarList'));
console.log(simCharacterlists);


 for (i = 0; i < simCharacterlists.length; i++) {
  arrayToLoop.push(Array.from(simCharacterlists[i].textContent));
  console.log(arrayToLoop.join(','))
  };
};



setTimeout((makeConfArray), 000);


//SPECIFIC FUNCTION TO MAKE CONFUSING CHARACTERSLAB 


const makeConfSlabs = () => {  

console.log(arrayToLoop);

arrayToLoop.forEach(singlearray => {

    singlearray.forEach(character=> { 
        if (character === ' ') {console.log('nun der')} else
        {createConfusingSlab(eval(character))}
    } 
 )

}) 
}


setTimeout((makeConfSlabs), 000);













//try it out//


// //FUNCTION SHOW HIDDEN SLABS


const unhide = function(characterToMatch){
    const hiddenslab = document.querySelectorAll('.confusingslabcontainer');

console.log(characterToMatch);
console.log(hiddenslab);
hiddenslab.forEach(slab=> {if (slab.id.includes(characterToMatch) && slab.classList.contains(characterToMatch) && slab.style.display == 'none'){slab.style.display = 'inline-block'}

else {slab.style.display = 'none'}


})

    //      if (hiddenslabs[i].style.display === "none") {hiddenslabs[i].style.display = "inline-block"}  
//     else {
//         hiddenslabs[i].style.display = "none";
// }
};


//ADD EVENT LISTENERS TO ALL SLABS
document.addEventListener('click',(e)=> {  
const characterSlabs = document.getElementsByClassName('characterslab');

for (var i = 0; i < 1; ++i) {
    characterSlabs[i].addEventListener('click', unhide(e.target.id));
}
console.log(e.target.id);

}
);





























//SORT CHARACTERS BY PINYIN
const testArray = ['歇', '曷', '喝', '渴', '揭'];
console.log(testArray);
testArray.sort();
console.log(testArray);





console.dir(testArray.sort(function(a, b){
    return a.localeCompare(b, [ "zh-CN-u-co-pinyin" ]); 
}));
console.log(testArray);









//DICTIONARY API

// const endpointsss = 'http://ccdb.hemiola.com/characters/mandarin/definition/radicals/peng';

// const charactersss = [];

// fetch(endpointsss)
//     .then(response => response.json())
//     .then(data => charactersss.push(...data))
//     .catch(error => console.error(error));

//     console.log(charactersss);
//     console.log(typeof(charactersss));















// const unhide = function(){
//     const hiddenslabs = document.getElementsByClassName('confusingslabcontainer');
//     for(let i = 0; i < hiddenslabs.length; ++i )
//     {if (hiddenslabs[i].style.display === "inline-block") {hiddenslabs[i].style.display = "none"}  
//     else {
//         hiddenslabs[i].style.display = "inline-block";
// }} console.log(hiddenslabs)
// };




