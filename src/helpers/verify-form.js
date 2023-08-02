export const OnErrorValidator = ( fields ) => {
  return fields.data.map( field => {
      return field.subjects.some( item => {
        if(item.start.trim().length < 1 || item.end.trim().length < 1 || item.grade.trim().length < 1 || item.subject.trim().length < 1){
          return true;
        }
        return false;
      })
  });
}