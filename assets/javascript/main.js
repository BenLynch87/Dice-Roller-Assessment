let rollbutton = document.querySelector('#roll-button');
let reset = document.querySelector('#reset')
let showList = document.querySelector('#showRolls')
let total = document.querySelector('#Total');
let listdice = document.getElementById('All Rolls');
let dieRolls = [];
let dieFace = [" ","\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
let dieSelect = document.getElementById('die');
let die = null;

rollbutton.addEventListener('click', function(){
    listdice.innerHTML = "";
    die = dieSelect.options[dieSelect.selectedIndex].value;
    dieRolls = [];
    let rollNum = document.querySelector('#textbox').value;
    if (Number.isInteger(+rollNum)){
        let i = 0;
        let sum = 0;
        while (i < rollNum){
            dieRolls.push(Math.floor(Math.random() * die) + 1);
            i++;
        }
        for (i = 0; i < dieRolls.length; i++){
            sum = sum + dieRolls[i];
        }
        total.innerHTML = "The sum of your roll(s) is " + sum;
    } else {
        total.innerHTML = rollNum + " is not an integer, please input an integer."
        document.getElementById('textbox').value = "";
    }
})

showList.addEventListener('click', function(){
    if (dieRolls.length > 0){
        let kk = "";
        //seperate visual d6 from numerical dice
        if (+die === 6){
            for (i = 0; i < dieRolls.length; i++){
                kk += "<li>" + dieFace[dieRolls[i]] + "</li>";
            }
        }else{
            for (i = 0; i < dieRolls.length; i++){
                kk += "<li>" + dieRolls[i] + "</li>";
            }
        }
        listdice.innerHTML = kk;
    } else {
        alert("You haven't rolled any dice yet!");
    }
});

reset.addEventListener('click', function(){
    listdice.innerHTML = "";
    total.innerHTML = "";
    document.getElementById('textbox').value = "";
    dieSelect.selectedIndex = 0;
})