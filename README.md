Desenvolvimento de aplicação mobile no tema de viagem de telas.

Para a remoção do cabeçalho da tela HomeScreen, para que não volte à tela de login, foi criado um componente Header.js, que serve como o header padrão.
Isso facilitou a remoção do header em momentos necessários.

Atualização do README, atual versão final:
Novas funcionalidades foram implementadas, tais como:

Persistência dos dados: Quando o usuário deixa o aplicativo enquanto cadastrado, o aplicativo persiste os dados, e retorna à tela inicial de volta ao login anterior.

Criação de novos dados: É possível criar e armazenar novos dados, conta e senha, inúmeras (até o momento) vezes, através de uma tela de cadastro.

Manipulação de dados: Através de uma conta padrão de senha e nome de usuário "admin", é possível visualizar senha e nome de usuário de outras contas, além de poder apagar tais contas também.



Elementos gráficos implementados:



Tela de cadastro: Responsável por cadastrar novas contas, atráves de dois inputs, senha e nome de usuário.

Tela de login: Com alguma conta já existente no sistema, é possível entrar no aplicativo (interface interna) com essa conta.

Tela inicial: Tela inicial que recebe os usuários logados após saírem, e a primeira a verem quando logam.

Tela de perfil: Permite que os usuários visualizem em qual conta eles estão cadastrados, e também dispõe de um mecanismo de logout (deslogar).

Tela de detalhes: Permite que o usuário visualize quais contas estão cadastradas no app até o momento de uso.

Tela de detalhes, admnistração: Permite que o admnistrador visualize nome e senha de todas as contas cadastradas, assim como apagar todas as contas criadas até o momento.



Elementos secundários:



Header: Foi desenvolvido um header secundário para garantir que fosse removido de situações específicas, aumentando a legibilidade de código, e a experiência do usuário.

Navegação Root: Permite que o aplicativo (App.js) navegue diretamente para qualquer componente-tela existente no Stack.Navigator. Esse componente foi desenvolvido por questões de lógica, visto que o componente <Stack.Navigator initialRouteName = {value}> é compilado apenas uma vez, e então, mantém apenas um valor.
!<Detalhe>! Este componente foi desenvolvido com ajuda de inteligência artificial, pois o problema enfrentado foi devido a um comportamento da linguagem, e não um erro de lógica.

O que poderia melhorar:

Sistema de identificação: Por mais que nos planos, não foi implementado até o momento um sistema que permite que exista apenas um usuário por nome, sendo o nome a 'chave primária' de cada usuário.