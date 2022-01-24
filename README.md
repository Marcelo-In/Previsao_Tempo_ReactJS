# Previsao_Tempo_ReactJS

Este é um projeto realizado com o intuito de praticar o que aprendi nos cursos que realizei.<br />
O projeto se baseia em efetuar consulta sobre a previsão do tempo nas cidades do Brasil. (Por enquanto somente do Brasil).<br />
Foi desenvolvido em React.js e utilizando diversas APIs gratuitas como:<br />
* [Seviço de Dados do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades) - Para obter a lista de UFs e Cidades do Brasil
* [Position Stack](https://positionstack.com/) - Para conseguir a latitude e longitude da cidade
* [OpenWeatherMap](https://openweathermap.org/api) - Para pegar os dados de previsão atual e de 3 em 3 horas
* [HGWeather](https://hgbrasil.com/status/weather) - Para pegar os dados de previsão de próximos 10 dias

## 📸 Galeria
<br />
<div align="center">
<img src="https://user-images.githubusercontent.com/44281623/150849294-dc9b3e29-7f1a-4eaa-898b-0484bab89666.png" />
</div>
<br />
<br />
<div align="center">
<img src="https://user-images.githubusercontent.com/44281623/150849389-c8c99657-40f8-44ae-b316-6cd2bbd1218b.png" />
</div>
<br />
<br />
<h3>Demonstração:</h3>

https://user-images.githubusercontent.com/44281623/150853767-5853ecb6-c150-481b-882d-424a388aed00.mp4

<br />

## :computer: Recursos Utilizados:  

Necessário realizar a instalação das aplicações/frameworks abaixo:

* [Node.js](https://nodejs.org/en/)

Necessário fazer o cadastro e pegar a chave da API nos seguintes sites:
* [Position Stack](https://positionstack.com/)
* [OpenWeatherMap](https://openweathermap.org/api)
* [HGWeather](https://hgbrasil.com/status/weather)

## :fire: Configurando o Projeto Localmente

1) Crie uma conta nos sites citados anteriormente e pegue a API Key delas

2) Modifique o arquivo .env no projeto, colocando as API Keys
 ```
REACT_APP_OPEN_WEATHER_MAP_API_KEY='YOUR OPEN WEATHER MAP API KEY' (Colocar a API Key do OpenWeatherMap substituindo 'YOUR OPEN WEATHER MAP API KEY')
REACT_APP_POSITIONSTACK_API_KEY='YOUR POSITIONSTACK API KEY'  (Colocar a API Key do Position Stack substituindo 'YOUR POSITIONSTACK API KEY')
REACT_APP_HGBRASIL_API_KEY='YOUR HGBRASIL API KEY' (Colocar a API Key do HG Brasil substituindo 'YOUR HGBRASIL API KEY')
 ```
3) Abra o cmd do Windows ou o terminal do Linux e entre no diretório onde está localizado o projeto.

4) Execute o seguinte comando para instalar as dependências  do projeto:
```
npm install
```
5) Depois da instalação, já pode inicializar o projeto com o seguinte comando:
```
npm start
```

