
function Hiking(trek, group, booked) {
   
    this.trek = trek;
    this.group = group;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.group - this.booked;
    };
}


var everest = new Hiking('Everest Base Camp', 15, 13);
var annapurna = new Hiking('Annapurna circuit trek', 12, 7);

// Declare a variable to hold the trek and pleces availability 
var details1 = everest.trek + ' available places: ';
    details1 += everest.checkAvailablity();

var details2 = annapurna.trek + ' available places: ';
    details2 += annapurna.checkAvailablity();

var elHiking1 = document.getElementById('trek1');
elHiking1.textContent = details1;

var elHiking2 = document.getElementById('trek2');
elHiking2.textContent = details2;

