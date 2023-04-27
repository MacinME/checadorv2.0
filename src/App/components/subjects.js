export const dbSubjects = [
    { 
        idUser: 9023,
        datas: [
            {
                id: 1, degree: 'Preparatoria', subject: 'Informatica', days: [
                    { idDay: 1, day: 'Lunes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 2, day: 'Martes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 3, day: 'Miercoles', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 4, day: 'Jueves', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 5, day: 'Viernes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 6, day: 'Sabado', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] }
                ]
            },
            {
                id: 2, degree: 'Licenciatura', subject: 'Informatica', days: [
                    { idDay: 1, day: 'Lunes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 2, day: 'Martes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 3, day: 'Miercoles', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 4, day: 'Jueves', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 5, day: 'Viernes', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] },
                    { idDay: 6, day: 'Sabado', subjects: [ { start: '9:00', end: '10:00', grade: '5to',},{ start: '10:00', end: '11:00', grade: '6to'} ] }
                ]
            },
        ]
    },
];


db.users.updateOne({ _id: ObjectId("644a85d5ed9500532779b661") }, {$set: { subjects: [ 
    {
        idSubject: 1, degree: 'Preparatoria', subject: 'Informatica', days: [
            { day: 'Lunes', subjects: [
                { start: '07:30', end: '08:30', grade: '2-G'},
                { start: '08:30', end: '09:30', grade: '2-F'},
                { start: '09:30', end: '10:30', grade: '2-D'},
                { start: '11:00', end: '12:00', grade: '2-G'},
                { start: '12:00', end: '13:00', grade: '2-C'}

            ] },
            { day: 'Martes', subjects: [
                { start: '07:30', end: '08:30', grade: '2-C'},
                { start: '08:30', end: '09:30', grade: '2-E'},
                { start: '09:30', end: '10:30', grade: '1-A'},
                { start: '11:00', end: '12:00', grade: '2-C'},
                { start: '12:00', end: '13:00', grade: '2-E'}
            ] },
            { day: 'Miercoles', subjects: [
                { start: '07:30', end: '08:30', grade: '2-G'},
                { start: '08:30', end: '09:30', grade: '2-B'},
                { start: '09:30', end: '10:30', grade: '2-B'},
                { start: '11:00', end: '12:00', grade: '2-A'},
                { start: '12:00', end: '13:00', grade: '2-A'}
            ] },
            { day: 'Jueves', subjects: [
                { start: '07:30', end: '08:30', grade: '2-F'},
                { start: '08:30', end: '09:30', grade: 'Sin Clase'},
                { start: '09:30', end: '10:30', grade: '2-D'},
                { start: '11:00', end: '12:00', grade: '2-F'},
                { start: '00:00', end: '00:00', grade: 'Sin clase'}
            ] },
            { day: 'Viernes', subjects: [
                { start: '07:30', end: '08:30', grade: '2-G'},
                { start: '08:30', end: '09:30', grade: '2-F'},
                { start: '09:30', end: '10:30', grade: '2-D'},
                { start: '11:00', end: '12:00', grade: '2-G'},
                { start: '12:00', end: '13:00', grade: '2-C'},
            ] }
        ]
    }
]}})

db.users.updateOne({ _id: ObjectId("644a85d5ed9500532779b661") }, {$set: { "subjects[0].days[0].subjects": [ { start: '9:00', end: '10:00', grade: '5to' } ] }})