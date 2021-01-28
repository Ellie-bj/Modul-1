

function isDateValid("03.02.2020"){
    return checkLength(length)
    && dotPlacement(dot)
    && yearLength(year)
    && monthCheck(month)
    && leapYear(leapYear);
    //Funksjonen skal returnere true hvis parameterverdien er en gyldig dato - og false ellers. Du skal ikke bruke Date, som er innebygget i Javascript.
}

function checkLength(date){   //Teksten må ha lengde 10.
    if(String.length === 10){
        return true;
    } return false;
}

function dotPlacement(date){  //Det må være punktum i tredje posisjon og i sjette posisjon.
    if (String.includes('.', 2 && '.', 5)){
        return true;
    } return false;
}

function yearLength(date){    //År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
var year = isDateValid.substr(6, 4); // Finn år placement i string.
    if(year.length === 4 && year >= '0000' && year <= '9999'){
        return true;
    } return false;
}

function monthCheck(date){    //Måned er fra og med 01 til og med 12. Kan sjekkes som over.
    if(month.length === 2 && month >= '01' && month <= '12'){
        return true;
    } return false;
}

function leapYear(date) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);  //Skuddår.
}


//30 er lov for alle måneder utenom februar
//31 er lovlig for januar, mars, mai, juli, august, oktober og desember
//En test som viser at 29. februar blir gyldig når det er skuddår