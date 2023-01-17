// Takes a date and returns what day out of 365
// ie. October 14 is the 287th day of the year. Function will return the num value 287

// Only exporting the variable topImageDayNumber at bottom
// all functions/ variables are used to get the topImageDayNumber

function dayDateFunction(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000);
}
// plugging in today's date to get currentDayNumber
let t = new Date();
let currentDayNumber = dayDateFunction(t);

// Top Image is 30 days in the future.. scroll up to see future dates
let future = currentDayNumber + 30;
let topImageDayNumber = 0;

if(future > 365){ // 365 days if on the cusp between years
    topImageDayNumber = future - 365;
} else {
    topImageDayNumber = future
};

export default topImageDayNumber;
