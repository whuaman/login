function validar(){
	var nome, sobrenome, email, usuario, senha, telefone, expresion;
	nome = document.getElementById("nome").value;
	sobrenome = document.getElementById("sobrenome").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	senha = document.getElementById("senha").value;
	telefone = document.getElementById("telefone").value;

	expresion = /\w+@\w+\.+[a-z]/;

	if(nome === "" || sobrenome === "" || email === "" || usuario === "" || senha === "" || telefone === ""){
		alert("Preencha todo os campos");
		return false;
	}
	else if (nome.length>30){
		alert("Diminua o nome, máximo de 30 caracteres");
		return false;
	}
	else if (sobrenome.length>30){
		alert("Diminua o sobrenome");
		return false;
	}
	else if (email.length>100){
		alert("Diminua o email");
		return false;
	}
	else if(!expresion.test(email)){
		alert("Email inválido");
		return false;
	}
	else if (usuario.length>20 || senha.length>20){
		alert("Diminua a quantidade de caracteres");
		return false;
	}
	else if (telefone.length>10){
		alert("Diminua o telefone");
		return false;
	}
		else if (isNaN(telefone)){
		alert("No telefone é somente números");
		return false;
	}


}