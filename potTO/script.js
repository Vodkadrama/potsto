// Função para lidar com a assinatura
function assinar(plano) {
    alert(Você escolheu o plano ${plano}. Obrigado pela sua assinatura!);
}

// Adiciona um listener para o formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário

    // Exibe uma mensagem de confirmação
    alert(Obrigado, ${nome}. Sua mensagem foi enviada!);

    // Limpa o formulário
    document.getElementById('contatoForm').reset();
});