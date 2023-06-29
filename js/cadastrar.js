function cadastrar() {
    var nome, cep, rua, numRes, comp, tel, bolo, pesoBolo, boloTipo;
  
    nome = document.getElementById("nome").value;
    cep = document.getElementById("cep").value;
    rua = document.getElementById("rua").value;
    numRes = document.getElementById("numRes").value;
    comp = document.getElementById("comp").value;
    tel = document.getElementById("tel").value;
    boloTipo = document.getElementById("boloTipo").value;
    pesoBolo = document.getElementById("pesoBolo").value;
  
    document.getElementById("nomeCad").innerHTML = nome;
    document.getElementById("cepCad").innerHTML = cep;
    document.getElementById("ruaCad").innerHTML = rua;
    document.getElementById("numResCad").innerHTML = numRes;
    document.getElementById("complementoCad").innerHTML = comp;
    document.getElementById("telCad").innerHTML = tel;
    document.getElementById("pedidoCad").innerHTML = boloTipo;
    document.getElementById("pesoCad").innerHTML = pesoBolo;
  }
  