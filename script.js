let students = [
    {
        name: "Petya",
        startStud: 2015,
        finishStud: 2020,
    },
    {
        name: "Vasya",
        startStud: 2012,
        finishStud: 2027,
    },
    {
        name: "Kolya",
        startStud: 2008,
        finishStud: 2013,
    },
    {
        name: "Ira",
        startStud: 2022,
        finishStud: 2027,
    },
    {
        name: "Sveta",
        startStud: 2015,
        finishStud: 2016,
    },
];
function showList(startEd, finishEd) {
    for (let i = 0; i < students.length; i++){
        if (startEd <= students[i].startStud && students[i].startStud <= finishEd
            ||
            finishEd >= students[i].finishStud && students[i].finishStud <= finishEd){
            console.log(students[i].name);
        }
    }
};
showList(2010, 2015);

