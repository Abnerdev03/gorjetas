function cauculeteTip(event) {
    event.preventDefault();
    console.log(event);
    
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('servicequal').value;
    let numOfPeople = document.getElementById('people').value;
    

    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople= 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', cauculeteTip);