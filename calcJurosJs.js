function calcular() {
    var iniv = document.getElementById('txtV').value
    var inij = document.getElementById('txtJ').value / 100 + 1
    var inim = document.getElementById('txtM'). value
    var res = document.getElementById('res').value
    var restab = document.getElementById('resJus')
    var op1 = document.getElementById('op1')

    if (iniv.length == 0 || inij.length == 0 || inim.length == 0) {
        window.alert(`Erro`)
    } else {
        restab.innerHTML = ''
        for (res = 1; res <= inim; res++) {
            
            var item = iniv*inij**res
            var item2 = document.createElement('option')
            item2.text = `Mês ${res} = ${item.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
            restab.appendChild(item2)
        }                   
    }
}
    