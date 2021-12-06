//get the first day and last day of current month
var date = new Date();
var lastmonth=date.getMonth()+3;
var firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);//start from tommorrow date
var lastDay = new Date(date.getFullYear(), lastmonth, date.getDate());//date 3 months from tommorrows date

//create an array to store all selected dates
var selectedDates = new Array();

//generate dates
while (firstDay <= lastDay) {
    var opt = document.createElement("option");
    var text = document.createTextNode(firstDay);
    opt.appendChild(text);
    document.getElementById("myDropdown").appendChild(opt);
    firstDay.setDate(firstDay.getDate() + 1)
}


function displayDate() {
    selectedDates.push(new DatePrice(document.getElementById("myDropdown").value));
}
function displayArray() {
    let total = 0;
    for (let i = 0; i < selectedDates.length; i++) {
        //document.getElementById("demo").innerHTML += selectedDates[i].d + "<br />";
        var opt = document.createElement("option");
        var text = document.createTextNode(selectedDates[i].d);
        opt.appendChild(text);
        document.getElementById("myDropdown2").appendChild(opt);
        total += selectedDates[i].p;
    }
    document.getElementById("demo").innerHTML += total;
}
function RemoveDate() {
    //update the total price
    //step 1- get the current total price
    let total = document.getElementById("demo").innerHTML;
    //step 2-reduce the current total price by the price of selected date
    let indexSelected = document.getElementById("myDropdown2").selectedIndex; //get the position
    total -= selectedDates[indexSelected].p;
    document.getElementById("demo").innerHTML = total;

    //remove the selected date from the array
    selectedDates.splice(indexSelected, 1);

    //remove the selected date from dropdown2
    document.getElementById("myDropdown2").remove(indexSelected);
}

class DatePrice {
    constructor(d) { //d - date value as string
        this.d = new Date(d); //this.d - property that contains a date object
        this.p = this.getPrice();
    }
     getPrice() {
        //months june to august
        if (this.d.getMonth() >= 5 && this.d.getMonth() <= 7) {
            return 200;
        }
        //months not december or jan
        else if (this.d.getMonth() !=11 && this.d.getMonth() != 0) {
            return 220;
        }
        else {
            //month of jan
            if(this.d.getMonth()==0){
                return 250;
            }
            //december 19-31
            else if(this.d.getDate()>18){
                return 250;
            }
            //december 1-18
            else{
                return 220;
            }
        }
    }
}