export const filterTypes = [
    {
        id: 1,
        title: 'Tiempo',
        filter: [
            {
                id: 1,
                title: 'Tolerancia',
                group: 'group1',
                name: 'group1_tolerance'
            },
            {
                id: 2,
                title: 'Retardo',
                group: 'group1',
                name: 'group1_delayedTime'
            }
        ],

    },
    {
        id: 2,
        title: 'Usuarios',
        filter: [
            {
                id: 1,
                title: 'Online',
                group: 'group2',
                name: 'group2_online'
            },
            {
                id: 2,
                title: 'Offline',
                group: 'group2',
                name: 'group2_offline'
            }
        ],

    },
    {
        id: 3,
        title: 'Ordenar',
        filter: [
            {
                id: 1,
                title: 'Fecha Actual',
                group: 'group3',
                name: 'group3_sortBy.actualDate'
            },
            {
                id: 2,
                title: 'Fecha Anterior',
                group: 'group3',
                name: 'group3_sortBy.lastDate'
            },
            {
                id: 3,
                title: 'Nombre a-z',
                group: 'group3',
                name: 'group3_sortBy.name'
            }
        ],
    },
    {
        id: 4,
        title: 'Campos',
        filter: [
            {
                id: 1,
                title: 'Licenciatura',
                group: 'group4',
                name: 'group4_degree'
            },
            {
                id: 2,
                title: 'Maestria',
                group: 'group4',
                name: 'group4_subject'
            },
            {
                id: 3,
                title: 'Tema',
                group: 'group4',
                name: 'group4_topic'
            }
            ,
            {
                id: 4,
                title: 'Horario de salida',
                group: 'group4',
                name: 'group4_time'
            }
        ],
    }
];
