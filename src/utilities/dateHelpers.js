
export function getTimeZone() {
    let offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (
        (offset < 0 ? '+' : '-') +
        ('00' + Math.floor(o / 60)).slice(-2) +
        ':' +
        ('00' + (o % 60)).slice(-2)
    );
}

export function getFormattedDate() {
    var utcStr = new Date();
    let formatedDate = utcStr.toISOString().split('T');
    let formateDateinHMS = formatedDate[1].split('Z');
    let finalDate = formatedDate[0] + ' ' + formateDateinHMS[0] + getTimeZone();
    return finalDate;
}

export function formatDateMMYY(date) {
    return `${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
}

export function formatDateMMDDYY(date) {
    // Use UTC methods to prevent timezone conversion
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
}

export function getMonthsBetween(date1,date2,roundUpFractionalMonths=false)
{
    var startDate=date1;
    var endDate=date2;
    var inverse=false;
    if(date1>date2)
    {
        startDate=date2;
        endDate=date1;
        inverse=true;
    }

    var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
    var monthsDifference=endDate.getMonth()-startDate.getMonth();
    var daysDifference=endDate.getDate()-startDate.getDate();

    var monthCorrection=0;
    if(roundUpFractionalMonths===true && daysDifference>0)
    {
        monthCorrection=1;
    }
    else if(roundUpFractionalMonths!==true && daysDifference<0)
    {
        monthCorrection=-1;
    }

    return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
}