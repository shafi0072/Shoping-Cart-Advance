function HandleProductChange(caseid,IsIncrease,casecounttotalid, price) {
    let caseCount = document.getElementById(caseid);
    let caseCountNumber = parseInt(caseCount.value);

    let CaseNewCount = caseCountNumber;
    if (IsIncrease == true) {
        CaseNewCount = caseCountNumber + 1;
    }
    if (IsIncrease == false && CaseNewCount > 0) {
        CaseNewCount = caseCountNumber - 1;
    }
    caseCount.value = CaseNewCount;
    let CaseCountTotal = CaseNewCount * price;
    document
        .getElementById(casecounttotalid)
        .innerText = CaseCountTotal;
        Calculatetotal("Subtotal");
        Calculatetotal("totalAMount");
}
function Calculatetotal(TotalId){
   let phoneCount =  document.getElementById("InputField1");
   let phoneCountToNumber = parseInt(phoneCount.value);

   let caseCount = document.getElementById("InputField2");
   let caseContToNumber = parseInt(caseCount.value);

   let totalPrice = phoneCountToNumber * 1219 + caseContToNumber * 59;
   document.getElementById(TotalId).innerText = totalPrice;
}
// caseHandler1.
let PlusHandler2 = document.getElementById('PlusHandler2');
PlusHandler2.addEventListener('click', function () {
    HandleProductChange("InputField2",true,"CurrentRate2", 59);

});
// caseHandler2.
let MinusHandler2 = document.getElementById("MinusHandler2");
MinusHandler2.addEventListener('click', function () {
    HandleProductChange("InputField2",false,"CurrentRate2", 59);
});
// phone1
let PhonePlusHandler = document.getElementById("PlusHandler1");
PhonePlusHandler.addEventListener('click', function(){
    HandleProductChange("InputField1",true,"CurrentRate", 1219);
});
// phoneMinus.
let PhoneMinusHandler = document.getElementById("MinusHandler1");
PhoneMinusHandler.addEventListener('click', function(){
    HandleProductChange("InputField1",false,"CurrentRate", 1219);
});
function Removeitem (click, Go){
    document.getElementById(click).addEventListener('click', function(){
        document.getElementById(Go).style.display = 'none';
    })
};
Removeitem ("ItemRemove", "Cart1");
Removeitem ("ItemRemove2", "Cart2");

document.getElementById("CheakOut").addEventListener('click', function(){
    document.getElementById('ContainerCart').style.display = "none";
    document.getElementById("Outro").style.display = "Block";
});