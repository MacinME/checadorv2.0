export const onDelayTime = (user, idDegree, idSubject, today) => {
    let originalString;

    for (let i = 0; i < user.subjects.length; i++) {
        if(user.subjects[i].id === Number(idDegree)){
            for (let j = 0; j < user.subjects[i].data.length; j++) {
                if(user.subjects[i].data[j].day.toLowerCase() === today.toLowerCase()){
                    for (let t = 0; t < user.subjects[i].data[j].subjects.length; t++) {
                        if(user.subjects[i].data[j].subjects[t].id_Time === Number(idSubject)){
                            originalString = user.subjects[i].data[j].subjects[t];
                        }
                    }
                }   
            }
        }
    }

    const [hours, minutes] = originalString.start.split(':').map(Number);
    const newTime = new Date();
    const currentTime = new Date();
    newTime.setHours( hours );
    newTime.setMinutes( minutes );
    newTime.setSeconds(0);
    newTime.getTime();

    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const time = newTime - currentTime.getTime();   

    if(newTime > currentTime){  
        return Number(-Math.floor((time % oneHour) / oneMinute));
    }else{
        return Math.ceil((time % oneHour) / oneMinute).toString().split('-')[1];
    }
}

export const onGetSubject = (user, idDegree, idSubject, today) => {
    let originalString;

    for (let i = 0; i < user.subjects.length; i++) {
        if(user.subjects[i].id === Number(idDegree)){
            for (let j = 0; j < user.subjects[i].data.length; j++) {
                if(user.subjects[i].data[j].day.toLowerCase() === today.toLowerCase()){
                    for (let t = 0; t < user.subjects[i].data[j].subjects.length; t++) {
                        if(user.subjects[i].data[j].subjects[t].id_Time === Number(idSubject)){
                            originalString = user.subjects[i].data[j].subjects[t];
                        }
                    }
                }   
            }
        }
    }

    return originalString.subject;
}