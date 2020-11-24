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

const 冂 =  [['冂'], ['jiong1'], ['Box']];
const 人 =  [['人'], ['ren2'], ['Man']];
const 儿 =  [['儿'], ['er2'], ['Son']];
const 口 =  [['口'], ['kou3'], ['Mouth']];
const 勹 =  [['勹'], ['bao1'], ['Wrap']];
const 日 =  [['日'], ['ri4'], ['Sun']];
const 扌 =  [['扌'], ['shou3'], ['Hand']];
const 欠 =  [['欠'], ['qian4'], ['Lack/Owe']];
const 氵 =  [['氵'], ['shui3'], ['Water']];


const N = ['', '', ''];



// CHARACTER CLASS CONSTRUCTOR

class Character {
    constructor(main, pinyin, def, list, rad1, rad2, rad3, rad4){
        this.main = main;
        this.pinyin = pinyin;
        this.def = def;
        this.list = list.sort(function(a, b){return a.localeCompare(b, [ "zh-CN-u-co-pinyin" ]);  });
        this.rad1 = rad1;
        this.rad2 = rad2;
        this.rad3 = rad3;
        this.rad4 = rad4;
    }
};



//CHARACTER CONSTANTS

const 喝 = new Character('喝', 'he1','To Drink', ['喝','曷', '渴', '揭', '歇'], [...口],[...日],[...勹],[...人]); 
const 曷 = new Character('曷', 'he2','Why?',['喝','曷', '渴', '揭', '歇'],[...日], [...勹],[...人],[...N]);
const 渴 = new Character('渴', 'ke3','Thirsty',['喝','曷', '渴', '揭', '歇'], [...氵],[...日],[...勹],[...人]);
const 揭 = new Character('揭', 'jie1','To Lift',['喝','曷', '渴', '揭', '歇'],[...扌],[...日],[...勹],[...人]);
const 歇 = new Character('歇', 'xie1','To Rest',['喝','曷', '渴', '揭', '歇'], [...日],[...勹],[...人],[...欠]);

const 见 = new Character('见', 'jian4','To See',['见', '贝'], [...冂],[...儿],[...N],[...N]);
const 贝 = new Character('贝', 'bei4','Shell',['见', '贝'], [...冂],[...人],[...N],[...N]);


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
                    <p class="pinyin" id="${ch.main}">${ch.pinyin}</p>
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















// //FUNCTION SHOW HIDDEN SLABS


const unhide = function(characterToMatch){
    const hiddenslab = document.querySelectorAll('.confusingslabcontainer');

console.log(characterToMatch);
console.log(hiddenslab);
hiddenslab.forEach(slab=> {if (slab.id.includes(characterToMatch) && slab.classList.contains(characterToMatch) && slab.style.display == 'none'){slab.style.display = 'inline-block'}

else {slab.style.display = 'none'}
})
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



//SORT LISTS DISPLAYED ON CHARACTER SLABS ALPHABETICALLY PLACE MAIN CHARACTER FIRST


// const alphaSort = function(){
//     const lists = document.querySelectorAll('.similarList');
//         console.log(lists);
//         lists.forEach(list =>  console.log(list)
        
//         ) 

        
// };


// setTimeout(() => alphaSort(), 3000);

// setTimeout(() => characters.forEach(array => {array.forEach(char =>createSlab(char))}), 000);





//searchPage FUNCTION

function searchPage() { 
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase(); 
    let x = document.querySelectorAll('.pinyin'); 
    let y = document.getElementsByClassName('characterslab'); 
    x.forEach(thing => {if (thing.textContent.includes(input)){thing.parentElement.parentElement.parentElement.style.display = '' } else 
    {thing.parentElement.parentElement.parentElement.style.display = 'none'}
} )};



//PAINT MAIN CHARACTER BY PINYIN COLOUR        STILLLLLL TOODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO



const colour = function(){
    const allslab = document.querySelectorAll('.characterslab');
    console.log(allslab);
   allslab.forEach(slab =>{ if (slab.textContent.includes('1'))
    {slab.style.colour = 'red'}})
};
setTimeout(() => colour(), 3000);










//SORT CHARACTERS BY PINYIN
const testArray = ['歇', '曷', '喝', '渴', '揭'];






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




