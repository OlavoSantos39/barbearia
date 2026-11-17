integrantes: Jerônimo farias da Silva  
💈 Connect Barber Shop
Sistema web de barbearia com interfaces para clientes e barbearias e uma API REST para cadastro, login e agendamentos.
📌 Sobre o projeto
O Connect Barber Shop é um projeto de aplicação web voltado à organização de serviços de barbearia. Possui páginas de acesso, cadastro e áreas específicas para clientes e barbearias. O repositório contém um front-end em HTML, CSS e JavaScript e um back-end em Java com Spring Boot.
Estado atual: algumas ações da interface são demonstrativas e ainda não consomem a API. Por exemplo, o login do front-end redireciona conforme o perfil selecionado, sem autenticar no servidor; o cadastro de clientes salva dados no localStorage; e a tela do cliente exibe agendamentos no navegador sem enviá-los à API.

🚀 Tecnologias utilizadas
Front-end: HTML5, CSS3, JavaScript e Font Awesome (via CDN).

Back-end: Java 17, Spring Boot 4.1.1, Spring Web MVC, Spring Data JPA, Bean Validation, Maven Wrapper e Springdoc OpenAPI.

Banco de dados: H2 (configuração local padrão) e PostgreSQL (configuração prevista para produção).
✨ Funcionalidades identificadas
Interface web
- Telas de login para cliente e barbearia.
- Formulários de cadastro.
- Escolha de serviço, data e horário pelo cliente.
- Exibição local de agendamentos.
- Formulários de edição de perfil com validação básica.
- Estilos responsivos.
API REST
- Cadastro de cliente e barbearia.
- Login por e-mail, senha e tipo de usuário.
- Listagem geral de agendamentos.
- Consulta de agendamentos por cliente.
- Criação de agendamentos associados a clientes cadastrados.
📂 Estrutura do projeto
barbearia-main/
├── index.html                 # Login e cadastro
├── cliente.html               # Área do cliente
├── barbearia.html             # Área da barbearia
├── Estilos/                   # CSS das páginas e responsividade
├── imagens/                   # Logo e imagens de fundo
├── js/                        # Scripts do front-end
├── connectbarber/             # API Spring Boot
│   ├── pom.xml                # Dependências Maven
│   ├── mvnw                   # Maven Wrapper (Linux/macOS)
│   ├── mvnw.cmd               # Maven Wrapper (Windows)
│   └── src/
│       ├── main/java/br/com/connectbarber/
│       │   ├── config/        # Configuração web
│       │   ├── controller/    # Autenticação e agendamentos
│       │   ├── model/         # Entidades JPA
│       │   └── repository/    # Repositórios de dados
│       └── main/resources/
│           ├── application.properties
│           └── application-prod.properties
└── README.md
⚙️ Pré-requisitos
- Java 17 instalado.
- Navegador atualizado.
- Opcional: VS Code com extensão Live Server para executar o front-end.
- PostgreSQL e variáveis de ambiente configuradas caso queira utilizar esse banco em vez do H2.
🛠️ Como executar local
