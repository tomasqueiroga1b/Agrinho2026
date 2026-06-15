function mostrarResultado() {

            document.getElementById("resultados").innerHTML = `

                <div class="caixaResultado">

                    <div>

                        <img src="imagens/piscinaolimpica.png" class="imagemResultado">  <!-- imagem da resposta 1-->

                        <p class="imagemLegenda">
                         Ilustração de uma piscina olímpica
                        </p>

                    </div>

                    <div class="textoResultado">

                        <h3>Impacto dessa escolha:</h3>  <!-- resposta 1-->

                        <p>
                            Se você e mais 10 milhões de pessoas fizerem isso,
                            serão desperdiçados aproximadamente 2.500.000 litros
                            de água por dia. Isso encheria uma piscina olímpica inteira!
                        </p>

                        <p>
                            Pequenas atitudes parecem insignificantes quando
                            feitas por uma única pessoa, mas quando repetidas
                            por milhões de pessoas geram consequências enormes.
                        </p>

                    </div>

                </div>

                <div class="textoPósCaixa">

                    <p>
                        Se esse desperdício que muitas pessoas já fazem em suas casas
                        <b>todos os dias</b> já causa esse prejuízo, imagine só os
                        prejuízos dos grandes produtores de alimentos, que
                        <b>geralmente envolvem grandes quantidades de água</b>
                        em seus processos de produção.
                    </p>

                    <p>
                        Além disso, são desperdiçadas a nossa grande fonte de energia:
                        os alimentos. Em processos de armazenamento, transporte ou
                        produção, uma falha pode ser catastrófica.
                    </p>

                    <h1>O que podemos fazer para mudar isso?</h1>

                    <p>
                        Como na maioria dos casos, a causa geral do problema está
                        relacionada a <b>falhas técnicas</b> desses processos citados,
                        devemos também pensar em soluções técnicas e possíveis para isso.
                    </p>

                    <p><b>Algumas soluções possíveis são:</b></p>

                    <ul>
                        <li>
                            Investimentos em tecnologias de armazenamento para maior
                            tempo de preservação e maior segurança dos alimentos.
                        </li>

                        <li>
                            Investimentos na infraestrutura das cidades, pois parte dos
                            acidentes ocorre devido à baixa qualidade das estradas.
                        </li>

                        <li>
                            Investimentos no cuidado do manuseio dos alimentos para
                            evitar acidentes e perdas desnecessárias.
                        </li>
                    </ul>

                </div>

            `;

           
        }
      
        function mostrarResultado2(){

            document.getElementById("resultados").innerHTML = `
            <div class="caixaResultado2">
    <div class="imagemResultado2">
        <h1>Impacto dessa escolha:</h1>
        <img src="imagens/poluição.jpg" class="imagemResultado2">
        <p class="imagemLegenda2">ilustração de um rio de floresta poluído por plástico</p>  <!-- imagem da resposta 2-->
    </div>
    
    
    <div class="oqueacontece2">
        <div class="oqueAcontece">
            <p>Quando 10.000 pessoas jogam uma garrafa plástica no meio ambiente, igual você, são desperdiçados 250kg de plástico, além de esses 250kg de plástico:</p>   <!-- resposta 2-->
        </div>
        <ul>
            <li>Intoxicam o solo e a água, com os microplásticos liberados em contato com o sol</li>
            <li>Prejudicam a vida dos animais, que podem se enroscar ou ingerir os plásticos, causando ferimentos ou morte</li>
            <li>Contribuem para a poluição visual de ambientes naturais</li>
        </ul>
    </div>
</div> ->


<div class="textoPosCaixa2">
    <div class="oqueacontece2">
        <p>Nós temos esses problemas de poluição por plástico, que são impressionantes, pois o Brasil por exemplo <mark>produz 11,3 milhões de toneladas de resíduos plásticos por ano</mark>, isso dá 21,3 toneladas por minuto!!
        Onde, desse valor,<mark> um pouco mais de 1% é reciclado</mark>. </p>
        <p>Agora, imagine tudo isso somado com todos os resíduos que são produzidos no mundo( lixo  eletrônico, resíduos industriais, etc), e o quanto isso pode ser prejudicial, devido a quantidade absurda desses lixos por aí. </p>
        <p>obviamente, não conseguiremos desfazer todo esse prejuízo, mas atos que você pode fazer, assim estará fazendo a sua parte! E se nós e todas as pessoas fizerem isso, nós conseguiremos diminuir considerávelmente a produção do estrago!</p>
        <ul>
            <li>Reduzir o consumo de plástico, optando por produtos com embalagens mais sustentáveis ou reutilizáveis.</li>
            <li>Descartar corretamente os plásticos, separando-os dos outros tipos de lixo e destinando-os aos pontos de coleta adequados.</li>
            <li>(Esse é para os que realmente tem disponibilidade e querem!)Participar de iniciativas de limpeza ambiental, como mutirões de limpeza em praias, parques e áreas urbanas.</li>
            <li>Incentivar a reciclagem, apoiando empresas e políticas que promovam a reciclagem de plásticos.</li>
            </ul>
            <p>Quando falamos nesses atos, não estamos falando de coistas que você precisa obrigatóriamente fazer o tempo todo, mas são atitudes baseadas nisso, pois algo tão pequeno como jogar uma latinha de refri na rua causa um impacto tão grande, porque é um hábito comum,
            agora, pela lógica, se todos nós fizermos o contrário (ou seja, jogar o lixo no lixo), isso também causará um impacto tão grande, mas para o bem! 
            E se todos nós fizermos isso, o impacto será enorme, tão quanto foi o impacto negativo!</p>
            <q> <mark>Que façamos a nossa parte, para que o futuro seja melhor para todos nós! </mark></q>
`;}
     
   document.getElementById("").style.display = "none"; 
let tamanho = 16;

function aumentarFonte(){
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
}
function diminuirFonte(){
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
}
     function agradecer(){

    let nome = document.getElementById("nomeUsuario").value;

    document.getElementById("mensagem").innerHTML =
    "Obrigado pelo contato, " + nome + "!"; }
    