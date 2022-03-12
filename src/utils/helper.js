
 export const flatten = (obj, parent, result = {}) => {
   if (obj === null || undefined) return {};
   for (let key of Object.keys(obj)) {
     const propName = parent ? parent + '_' + key : key;
     if (typeof obj[key] === 'object') {
       flatten(obj[key], propName, result);
     } else {
       result[propName] = obj[key];
     }
   }
   return result;
} 

 