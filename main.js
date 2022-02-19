
//Pulls data for the current time
function currentTime(){
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hour = updateTime(hour)
    minutes = updateTime(minutes)
    seconds = updateTime(seconds)
    
    //Changes to AM or PM
    let session
        if(hour < 12){
          session = "AM"
            hour = date.getHours 
        }
        else {
         session = "PM"
         hour = hour - 12 //Will make the time be in 12 hour format
        }

    document.getElementById("clock").innerText = hour + ":" + minutes + ":" + seconds + " " + session;
    
    //States how often to update(in milliseconds)
    var t = setTimeout(function(){currentTime() }, 1000);
    }

//Adds a 0 in front of times less than 10 (hours, minutes, seconds)
function updateTime(k) {
    if(k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}


    currentTime();