
//Funksjonen skal returnere true hvis parameterverdien er en gyldig dato - og false ellers. Du skal ikke bruke Date, som er innebygget i Javascript.
function isDateValid(date){
    return checkLength(date)
    && dotPlacement(date)
    && yearLength(date)
    && monthCheck(date)
    && validDayCheck(date)
    && leapYear(date);
    
}

//Teksten må ha lengde 10.
function checkLength(date){   
    if(date.length === 10){
        return true;
    } return false;
}

//Det må være punktum i tredje posisjon og i sjette posisjon.
function dotPlacement(date){  
    if (date.charAt(2) == '.' && date.charAt(5)=='.'){
        return true;
    } return false;
}

//År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
function yearLength(date){    
let year = date.substr(6);
    if(year.length === 4 && year >= '0000' && year <= '9999'){
        return true;
    } return false;
}

//Måned er fra og med 01 til og med 12. Kan sjekkes som over.
function monthCheck(date){    
    let month = date.substr(3,2)
    if(month.length === 2 && month >= '01' && month <= '12'){
        return true;
    } return false;
}
//_________________________CHOKE ME LIKE YOU HATE ME WHEN YOU LOVE ME, LOWKEY WANNA DATE ME WHEN YOU FUCK ME.____________FIX ME :( help...
function validDayCheck(date){            
    let day = date.substr(0,2);
    let month = date.substr(3,2);
    let year = date.substr(6,4);

    //30 er lov for alle måneder utenom februar
    if(day.length === 2 && day >= '01' && day <= '30' && month != '02'){
        return true;}
    
    //31 er lovlig for januar, mars, mai, juli, august, oktober og desember
    if(day === 31 && month === 01,03,05,07,08,10,12){
        return true;}

    //En test som viser at 29. februar blir gyldig når det er skuddår
    if(day == '29' && month == '02' && isLeapYear(year)){
        return true;} 
        
    return false;
}

//sjekk skuddår.
function leapYear(date) {
    let year = date.substr(6,4);
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);  
}