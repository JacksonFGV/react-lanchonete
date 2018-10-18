var tamanho = 24
var contraste = 'semContraste'

function setTamanho(valor){
    tamanho = valor
}

function getTamanho(){
    return tamanho;
}

function setContraste(){
    if (contraste == 'semContraste'){
        contraste = 'comContraste';
    }else{
        contraste =  'semContraste';
    }
}

function getContraste(){
    return contraste
}
function setLocalContraste(){
    setContraste()
    return getContraste()
}
function moficarFonte(valor, State, obj){
    if(valor > 0 && State < 40){
        obj.setState({tamanhoLetra: State+valor});
        setTamanho(State+valor);
    }else if (valor < 0  && State > 15){
            obj.setState({tamanhoLetra: State+valor});
            setTamanho(State+valor);
    } else if(valor == 0){
            obj.setState({tamanhoLetra: obj.tamanhoPadrao});
            setTamanho(State+valor);
    }
}


export { setLocalContraste }
export { getContraste }
export { setContraste }
export {getTamanho}
export {setTamanho}
export {moficarFonte}

