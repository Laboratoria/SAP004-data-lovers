import {pegaNameImage} from './functionsdata.js'

export const ordenarAZ = () =>{
return pegaNameImage().sort()
};

export const ordemQveio = () => {
return pegaNameImage();
};

export const ordenarZA = () => {
return ordenarAZ().reverse();
};
