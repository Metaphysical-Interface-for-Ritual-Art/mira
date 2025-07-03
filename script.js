const mensagens = [
  "Acenda uma vela branca e desenhe um espelho.",
  "Vista a cor que mais te desafia hoje.",
  "Escreva sua intenção ao contrário e leia três vezes.",
  "Diga seu nome olhando para um reflexo e respire fundo.",
  "Saia para caminhar ouvindo uma canção que nunca ouviu.",
  "Sussurre um desejo para a água corrente.",
  "Invente uma palavra e use ela hoje como feitiço.",
  "Tome um chá de ervas e agradeça por algo que ainda não aconteceu.",
  "Desenhe um símbolo e esconda ele onde ninguém vê.",
  "Ouça uma música de um lugar que você nunca esteve. E dance."
];

function gerarMensagem() {
  const index = Math.floor(Math.random() * mensagens.length);
  document.getElementById("mensagem").innerText = mensagens[index];
}
