//1. Usuário clica botão zap - executa função  ShowMessage()
const showMessage = () => {
    var divMessage = document.getElementById('whats-message');
    var propDisplay = window.getComputedStyle(divMessage).display;

    //2. Verifica se a propriede display é "none"
    if (propDisplay == 'none') {
        //3. Se valor for "none" modificar p/ "block"
        divMessage.style.display = 'block';
    } else {
        //4. Caso contrario (valor está em 'block'), modifica para none 
        divMessage.style.display = 'none';
    }
}


/* Envia mensagem para um número de whatsapp */
const enviaMsg = () => {
    const numero = 5512996848638;
    const mensagem = document.getElementById('msg').value;
    /* aumentar a segurança do texto enviado */
    const msgCodificada = encodeURIComponent(mensagem);
    /* evita o envio se a caixa de texto tiver vazia */
    if (!mensagem.trim()) {
        alert('Por favor digite uma mensagem');
        /* Interrompe a função */
        return;
    }
    /* concatenação usando interpolação de variaveis $ (variável) */
    const url = `https://wa.me/${numero}?${msgCodificada}`;
    /* abre a url do whatsapp com os parametros passados */
    window.open(url, '_blank');
}
