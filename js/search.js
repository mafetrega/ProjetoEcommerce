const form = document.querySelector(".search-bar");
const input = form.querySelector(".search-input");
const button = form.querySelector(".search-button");

let closeTimeout;

// Ao clicar no botão (submit do form)
form.addEventListener("submit", function (e) {
	if (!form.classList.contains("active")) {
		e.preventDefault();
		form.classList.add("active");
		input.focus();
		startAutoCloseTimer();
	}
	// se já estiver aberto, permite a submissão normalmente
});

// Reinicia o timer sempre que digitar
input.addEventListener("input", startAutoCloseTimer);

// Clicar fora da barra → fecha
document.addEventListener("click", function (e) {
	// pequeno delay para permitir que o botão envie antes de fechar
	setTimeout(() => {
		if (!form.contains(document.activeElement)) {
			closeSearch();
		}
	}, 10);
});

function startAutoCloseTimer() {
	clearTimeout(closeTimeout);
	closeTimeout = setTimeout(closeSearch, 30000); // 30 segundos
}

function closeSearch() {
	form.classList.remove("active");
	input.value = "";
	input.blur();
	clearTimeout(closeTimeout);
}
