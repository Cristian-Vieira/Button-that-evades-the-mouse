window.onload = function () {

    const BOTAO_NAO = document.getElementById('nao'); //obtem o elemento com id 'não'para a variavel BOTAO_NAO
    const BOTAO_SIM = document.getElementById('sim'); //obtem o elemento com id 'sim'para a variavel BOTAO_SIM
    let randomX; // variavel para armazenar as posições randomicas para o botão no eixo x
    let randomY; // variavel para armazenar as posições randomicas para o botão no eixo y
    let windowWidth; // variavel para armazenar as dimensões da janela do navegador
    let windowHeight; // variavel para armazenar as dimensões da janela do navegador


    BOTAO_NAO.onmouseover = function () {
        // Obter as dimensões da janela do navegador
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        // muda o atributo 'position' CSS do botão para absolute para ser possivel manipular a posição do botão
        BOTAO_NAO.style.position = 'absolute'
        // Gerar uma posição aleatória para o botão         
        window.requestAnimationFrame(randomPosition);//usa metodo que requisita um frame de animação para a janela conforme os recursos disponiveis       
        function randomPosition() {
            randomX = Math.floor(Math.random() * (windowWidth - 100));
            randomY = Math.floor(Math.random() * (windowHeight - 100));
            // Definir a posição do botão como a posição aleatória gerada
            BOTAO_NAO.style.left = `${randomX}px`;
            BOTAO_NAO.style.top = `${randomY}px`;
        }

    }

    BOTAO_NAO.onclick = function () {
        alert('Congratulations, you are part of a minority, those who are persistent, please keep it up')
    }

    BOTAO_SIM.onclick = function () {
        document.write(`
        <style>    
            body{
                background-color: rgba(128, 128, 128, 0.674);
            }
            p{
                color: white;
            }
            .container {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: gray;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 8px 8px 10px #444;
                border: 0.01rem solid rgba(0, 0, 0, 0.221);
            }

            .pergunta {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 30px;
            }
            #question{
                font-size: 40px;               
            }
            button {
                border: 1px solid rgba(0, 0, 0, 0.76);
                margin: 0 10px;
                padding: 10px 20px;
                border-radius: .5rem;
                font-size: 1.5rem;
                color: rgba(0, 0, 0, 0.76);
            }
        </style>

        <div class="container">
            <div class="pergunta">
                <p id="question">That's what the system does, it gives you an illusion of choice, but they choose it...</p>
                <button type="button" id="reload" onclick="window.location.reload()">Back</button>
            </div>
        </div>

        `)
    }


};




