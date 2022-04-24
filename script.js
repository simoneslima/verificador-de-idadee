function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano) {
        window.alert(`[Erro] Verifique os dados e tente novamente!`) 
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade <10) {
            //Criança
        img.setAttribute ('src','imagem/menininho.png')
        }
        else if (idade < 21) {
            // Jovem
        img.setAttribute ('src', 'imagem/jovemhomen.png')
        }
        else if (idade < 50) {
            // Adulto
            img.setAttribute ('src', 'imagem/adulto.png')
        }
        else {
            // Idoso
            img.setAttribute ('src', 'imagem/senhor.png')
        }


    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <10) {
            //Criança
            img.setAttribute ('src', 'imagem/menininha.png')   
        }
        else if (idade < 21) {
            // Jovem
            img.setAttribute ('src', 'imagem/jovemulher.png')
        }
        else if (idade < 50) {
            // Adulto
            img.setAttribute ('src', 'imagem/adulta.png')
        }
        else {
            // Idoso
            img.setAttribute ('src', 'imagem/senhora.png')
        }
    }
    res.style.textalign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
    res.appendChild(img)


    
    }
}