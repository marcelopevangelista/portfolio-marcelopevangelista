const temaBtn = document.getElementById("temaBtn");
const body = document.body;
const form = document.getElementById("formContato");
const statusMensagem = document.getElementById("mensagemStatus");

temaBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    temaBtn.textContent = "Modo claro";
  } else {
    temaBtn.textContent = "Modo escuro";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    statusMensagem.textContent = "Por favor, preencha todos os campos.";
    statusMensagem.style.color = "red";
    return;
  }

  statusMensagem.textContent = "Mensagem enviada com sucesso! (simulação)";
  statusMensagem.style.color = "green";

  form.reset();
});