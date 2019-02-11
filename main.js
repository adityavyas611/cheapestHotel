let hotelNames = {

    Lakewood: {
        Rating: 3,
        weekday: [110, 80],
        weekend: [90, 80]
    },
    Bridgewood: {
        Rating: 4,
        weekday: [160, 110],
        weekend: [60, 50]
    },
    Ridgewood: {
        Rating: 5,
        weekday: [220, 100],
        weekend: [150, 40]
    }
}; // Object to Store Hotel Names with details

let bitStatus = 0, // Status to check if user is regular or rewards
    WeekDay_Count = 0, // To find the number of weekdays
    WeekEnd_Count = 0, // To find the number of weekends
    minCostArray = []; // To store the min values for all hotels

/******************************************
 Function to count the weekend and weekdays
 ******************************************/

findDay = inpDate => {

    WeekDay_Count = 0,
        WeekEnd_Count = 0;

    inpDate.forEach((dateVal) => {
        let dayofVal = new Date(dateVal);
        if (dayofVal.getDay() in [1, 2, 3, 4, 5]) {
            WeekDay_Count += 1;
        } else {
            WeekEnd_Count += 1;
        }
    });
}

/************************************
 Function to calculate minimum values 
 and store in the array
 ************************************
 */

findMinCost = () => {

    let sum = 0;

    if (bitStatus == 0) {
        sum += hotelNames.Lakewood.weekday[0] * WeekDay_Count;
        sum += hotelNames.Lakewood.weekend[0] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;

        sum += hotelNames.Bridgewood.weekday[0] * WeekDay_Count;
        sum += hotelNames.Bridgewood.weekend[0] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;

        sum += hotelNames.Ridgewood.weekday[0] * WeekDay_Count;
        sum += hotelNames.Ridgewood.weekend[0] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;
    }
    //if will check for regular customers
    else {
        sum += hotelNames.Lakewood.weekday[1] * WeekDay_Count;
        sum += hotelNames.Lakewood.weekend[1] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;

        sum += hotelNames.Bridgewood.weekday[1] * WeekDay_Count;
        sum += hotelNames.Bridgewood.weekend[1] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;

        sum += hotelNames.Ridgewood.weekday[1] * WeekDay_Count;
        sum += hotelNames.Ridgewood.weekend[1] * WeekEnd_Count;
        minCostArray.push(sum);
        sum = 0;
    }
    // else will check for rewards customer
    return minCostArray;
}

/***************************************
Function to take input and return output
****************************************/

computeCost = inputVal => {

    let minVal;
    minCostArray = [];
    inputVal = inputVal.split(':');

    //condition to check if user is regular or rewards

    if (inputVal[0].toLowerCase() != 'regular') {
        bitStatus = 1;
    }
    inputVal = inputVal[1].split(',');

    findDay(inputVal);

    minCostArray = findMinCost();

    minVal = Math.min(...minCostArray); // Check for the minVal from array

    if (minVal === minCostArray[2]) {
        return 'Ridgewood';
    } else if (minVal === minCostArray[1]) {
        return 'Bridgewood';
    } else if (minVal === minCostArray[0]) {
        return 'Lakewood';
    } // Compare minVal to find the hotelname

}

module.exports = computeCost;