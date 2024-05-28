## AppMonitoramento

### Descrição

O **AppMonitoramento** é um aplicativo móvel desenvolvido com Ionic, Angular e integração ao Firebase. Ele visa proporcionar uma plataforma intuitiva e eficiente para o monitoramento de atividades, oferecendo aos usuários uma experiência simplificada desde a entrada até o cadastro e login.

### Funcionalidades

- **Página de Boas-Vindas**: Ao abrir o aplicativo, o usuário é recebido com uma mensagem de boas-vindas e um breve resumo sobre o aplicativo.
- **Navegação Interna**: Transição suave entre diferentes telas dentro da mesma página, proporcionando uma experiência de usuário contínua sem a necessidade de recarregar páginas.
- **Tela de Cadastro e Login**: Acesso fácil às funcionalidades de cadastro e login diretamente a partir da tela de entrada.

### Tecnologias Utilizadas

- **Ionic Framework**: Utilizado para construir a interface de usuário e garantir que o aplicativo seja responsivo e nativo para dispositivos móveis.
- **Angular**: Framework poderoso para desenvolver a lógica do aplicativo e gerenciar estados.
- **Firebase**: Integrado para fornecer autenticação segura, armazenamento de dados em tempo real e outras funcionalidades de backend.
- **Node.js**: Utilizado para o desenvolvimento do servidor e outras operações no backend.

### Estrutura do Projeto

```
AppMonitoramento/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   │   ├── home.page.html
│   │   │   │   ├── home.page.scss
│   │   │   │   ├── home.page.ts
│   │   ├── model/
│   │   │   ├── firebaselogin.service.spec.ts/
│   │   │   ├── firebaselogin.service.ts/
│   │   ├── pages/
│   │   │   ├── entrada/
│   │   │   │   ├── entrada.page.html
│   │   │   │   ├── entrada.page.scss
│   │   │   │   ├── entrada.page.ts
│   │   │   ├── login/
│   │   │   │   ├── login.page.html
│   │   │   │   ├── login.page.scss
│   │   │   │   ├── login.page.ts
│   │   │   ├── cadastro/
│   │   │   │   ├── cadastro.page.html
│   │   │   │   ├── cadastro.page.scss
│   │   │   │   ├── cadastro.page.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│
├── .gitignore
├── angular.json
├── package.json
├── README.md
```

### Como Executar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/AppMonitoramento.git
   cd AppMonitoramento
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   npm install -g @angular/cli
   npm install -g @ionic/cli
   npm install firebase @angular/fire
   ```

3. **Execute o Aplicativo**:
   ```bash
   ionic serve
   ```

### Contribuição

Sinta-se à vontade para contribuir com este projeto.

---
