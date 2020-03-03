exports.countOfDays=() => {
    let today = new Date();
    let endYear = new Date(2020, 11, 31, 23, 59, 59, 999); // Встановлюємодень та місяць
    endYear.setFullYear(today.getFullYear()); // Встановлюємо цей рік
    let msPerDay = 24 * 60 * 60 * 1000; // Кількість мілесекунд в одному дню
    let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
     daysLeft = Math.round(daysLeft); //Повертає кількість днів, які залишилися в цьому році
    let daysGo=365-daysLeft +1;
    console.log("\nКількість днів, яка пройшла від початку року: "+daysGo);

}

