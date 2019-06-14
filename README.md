# Mapas de Portugal  SVG
Diferentes mapas de Portugal em SVG.


### Exemplo de uso (DEMOs)

[EcoCampus - Jardim Botânico da UTAD](https://ecocampus.utad.pt/jardimbotanico/especie/Pinus_pinaster)


### Correr a página de DEMO localmente

1) Fazer download e upar para um webserver próprio (se não tiver npm instalado) ou fazer clone do git.
```
 $  git clone https://github.com/AfonsoFG/PortugalSVG.git
 $  cd unbloatify
```
 
2) Instalar as dependências (só o webserver)
```
 $ npm install
```

3) Correr o webserver
```
 $ npm start
```

4) Abrir no browser o endereço fornecido pelo o web server


## Vantagens
* Mapas optimizados para velocidade ao nível do tamanho do ficheiro mas mantendo a fidelidade e detalhe nas demarcações de regiões e fronteiras.
* Foram adicionados identificadores e classes aos caminhos do SVG que permitem mais fácil identificação e interação com as regiões de cada mapa.


## Mapas 
* Nova Flora de Portugal - 36kb de tamanho, 25 paths
* Áreas Naturais Protegidas - 13 kb de tamanho, 
* Regiões NUTS 2 -  12kb de tamanho, 5 paths
* Regiões NUTS 3 - 19kb de tamanho, 
* Distritos - 24kb de tamanho, 18 paths
* Concelhos - 72 kb de tamanho, 275 paths em 18 grupos
* Arquipelagos - 4kb de tamanho, 2 paths
* Arquipelagos (Ilhas) - 4kb de tamanho, 12 paths em 2 grupos


## Notas
* A todos os paths de zonas foi atribuido uma classe genérica chamada "z" (nome curto para poupança de espaço) bem como uma classe chamada "z" com um sufixo que é o id da zona.
* A todos os paths foi acrescentado um atributo chamado "data-z" que tem como valor o id da zona.
* Em mapas com maior número criaram-se grupos para as regiões. Exemplo: o mapa de Concelhos tem os seus paths agrupados em grupos que correspondem aos Distritos e a cada um destes grupos foi atribuído um id.
* São fornecidos também ficheiros .json e .sql quer para identificação de cada mapa quer para identificação de cada zona.


## Ficheiros
* Mapas SVG em assets/mapas
* Json e Sql em assets/data


## Motivação
Este conjunto de SVGs surgiram com a necessidade incorporar no website do [Jardim Botânico da UTAD](https://ecocampus.utad.pt/jardimbotanico) um mapa de Portugal, dividido de acordo com as regiões establecidas na Nova Flora de Portugal (Franco, 1971, 1984; Franco e Afonso, 1994, 1998, 2003) mas num formato que permitisse acrescentar ainda mais funcionalidades ao website e não no formato anterior que eram jpegs de baixa qualidade.

O diminuto número de visitantes ao site que utilizavam o Internet Explorer 8 permitiu que se escolhesse a opção de utilização de SVGs. Do IE8 em diante e em todas as versões de todos os outros browsers o suporte a SVG era total: [Can I Use](https://caniuse.com/#search=SVG). O enorme tamanho (190KB em média) dos mapas SVG existentes no Wikimedia Commons forçou a que criássemos os nossos próprios mapas.

Inicialmente foi criado o mapa de Portugal segundo o Nova Flora de Portugal e posteriormente criados 7 mapas adicionais que completam o conjunto que agora é partilhado com todos de forma livre e gratuita.


### Como era e como ficou o site :)

Falta aqui uma imagem


## Licença
Utilização livre e gratuíta, desde que não comercial, e com atribuição. [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)


### Créditos
* Inspiração nos mapas SVG da [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Portugal)