document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos campos de entrada
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    // Calcular os impostos
    const valorIrpf = valorVenda * irpf;
    const valorPis = valorVenda * pis;
    const valorCofins = valorVenda * cofins;
    const valorInss = valorVenda * inss;
    const valorIssqn = valorVenda * issqn;

    const totalImpostos = valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;
    const valorLiquido = valorVenda - totalImpostos;

    // Exibir a nota fiscal
    document.getElementById('notaItens').textContent = itens;
    document.getElementById('notaValorVenda').textContent = valorVenda.toFixed(2);
    document.getElementById('notaIrpf').textContent = valorIrpf.toFixed(2);
    document.getElementById('notaPis').textContent = valorPis.toFixed(2);
    document.getElementById('notaCofins').textContent = valorCofins.toFixed(2);
    document.getElementById('notaInss').textContent = valorInss.toFixed(2);
    document.getElementById('notaIssqn').textContent = valorIssqn.toFixed(2);
    document.getElementById('notaTotalImpostos').textContent = totalImpostos.toFixed(2);
    document.getElementById('notaValorLiquido').textContent = valorLiquido.toFixed(2);

    // Mostrar a seção da nota fiscal
    document.getElementById('notaFiscal').style.display = 'block';
});


