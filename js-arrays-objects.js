const exercises = [
    {
        exerciseName: 'leg press 45',
        targetedMuscles: 'quadriceps'
    },
    {
        exerciseName: 'stiff',
        targetedMuscles: ['hamstrings', 'glutes', 'biceps'],
    }
];
//console.log(exercises[1].targetedMuscles[1]);

const exercisesJson = JSON.stringify(exercises);
//console.log(exercisesJson);

/*exercises.forEach(element => {
    console.log(element.targetedMuscles)
}); */


//iterates through each element of the array exercises and if finds more than one
//element as value for the key targetedMuscless
exercises.forEach(function(exercises) {
    if (typeof exercises.targetedMuscles == "object") {
        // percorra tds os itens do objeto e mostre
            let i = 0;
            while (i < exercises.targetedMuscles.length) {
                console.log(exercises.targetedMuscles[i]);
                i++;
        }                console.log(' - ', exercises.exerciseName.toUpperCase())

    } else if (typeof exercises.targetedMuscles == "string") {
            console.log(exercises.targetedMuscles, '-', exercises.exerciseName.toUpperCase());
        }
});


//variation of the sam efunction but with for loop isnteas dof while

exercises.forEach(function(exercises) {
    if (typeof exercises.targetedMuscles == "object") {
        // percorra tds os itens do objeto e mostre
            for (let i = 0; i < exercises.targetedMuscles.length; i++) {
                console.log(exercises.targetedMuscles[i]);
        }                console.log(' - ', exercises.exerciseName.toUpperCase())

    } else if (typeof exercises.targetedMuscles == "string") {
            console.log(exercises.targetedMuscles, '-', exercises.exerciseName.toUpperCase());
        }
});


/*
const exercisesNames = exercises.map(function(exercises) {
    console.log(exercises.exerciseName)
});
*/