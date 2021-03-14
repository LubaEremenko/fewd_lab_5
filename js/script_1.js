  
var hiking = {
    // Object properties
    trek: 'Kailash Circuit (Tibet)',
    group: 15,
    booked: 6,
    includingFlight: true,
    
    checkAvailablity: function() {
        return this.group - this.booked;
    }
};

var elTrek = document.getElementById('mountTrek');
elTrek.textContent = hiking.trek;

var elPlaces = document.getElementById('places');
elPlaces.textContent = hiking.checkAvailablity();