function recuperarToken(){
    return localStorage.getItem('tokenAtemporal')
}

export default recuperarToken;