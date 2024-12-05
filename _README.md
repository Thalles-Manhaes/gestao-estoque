### Documento de Regras de Negócio - Sistema de Controle de Estoque

1. Objetivo do Sistema
O sistema de controle de estoque tem como objetivo gerenciar o fluxo de entrada e saída de produtos, garantindo o controle eficiente de itens em estoque, a rastreabilidade de movimentações e o gerenciamento de usuários e suas permissões.

2. Funcionalidades Principais
2.1 Cadastro de Produtos
Descrição:
Permite cadastrar, editar, visualizar e excluir produtos no sistema.

Regras de Negócio:
 - Campos obrigatórios:
 - Nome do produto.
 - Código ou SKU único.
 - Grupo de produtos.
 - Unidade de medida (Ex.: unidade, kg, litro).
 - Preço de custo.
 - O sistema deve validar se o código/SKU do produto já existe para evitar duplicidade.
 - Um produto só pode ser cadastrado se associado a um grupo de produtos.

2.2 Cadastro de Grupo de Produtos
Descrição:
Gerencia categorias para agrupar os produtos de forma organizada.

Regras de Negócio:
 - Campos obrigatórios:
 - Nome do grupo.
 - Descrição do grupo.
 - Cada grupo deve ter um identificador único (Ex.: ID ou nome).
 - Produtos só podem ser cadastrados se pertencerem a um grupo.

2.3 Entrada de Nota Fiscal Eletrônica (NFE)
Descrição:
 - Permite registrar as entradas de mercadorias através de notas fiscais.

Regras de Negócio:
 - Campos obrigatórios:
 - Número da NFE.
 - Data de emissão.
 - Fornecedor.
 - Produtos contidos na NFE.
 - Quantidades e valores unitários de cada produto.
 - O sistema deve calcular automaticamente o valor total da NFE com base nos produtos e suas quantidades.
 - Atualização automática do estoque:
 - O sistema deve somar as quantidades recebidas no estoque existente.
 - Validação de duplicidade:
 - Não permitir o registro de uma NFE com o mesmo número e fornecedor já cadastrados.

2.4 Cadastro de Usuários
Descrição:
Gerencia os usuários que podem acessar o sistema, com diferentes níveis de permissão.

Regras de Negócio:
 - Campos obrigatórios:
 - Nome completo.
 - E-mail.
 - Senha.
 - Nível de permissão (Ex.: administrador, operador, consulta).
 - Regras de senha:
 - A senha deve ter no mínimo 8 caracteres, com ao menos 1 letra maiúscula, 1 número e 1 caractere especial.
 - Níveis de permissão:
 - Administrador:
 - Acesso completo a todas as funcionalidades.
 - Operador:
 - Acesso ao cadastro de produtos, grupos e entrada de NFE.
 - Consulta:
 - Apenas visualização dos cadastros e relatórios.
 - 2.5 Recuperação e Criação de Senha
 - Descrição:
 - Permite que os usuários criem uma nova conta ou recuperem o acesso ao sistema.     
     
Regras de Negócio:
  - Criação de conta:
  - O administrador pode criar contas de novos usuários.
  - E-mail deve ser único no sistema.
  - Recuperação de senha:
  - O sistema deve enviar um link de recuperação para o e-mail cadastrado.
  - O link de recuperação deve expirar após 24 horas.
  - A nova senha deve seguir as regras de complexidade mencionadas anteriormente.

3. Fluxos Operacionais
 - 3.1 Cadastro de Produtos
 - Usuário seleciona o módulo "Produtos".
 - Preenche os campos obrigatórios no formulário.
 - Sistema valida:
 - Se o SKU já existe.
 - Se o grupo de produtos está associado.
 - Produto é salvo no banco de dados.

 - 3.2 Entrada de NFE
 - Usuário seleciona o módulo "Entrada de NFE".
 - Preenche os dados da nota fiscal.
 - Adiciona os produtos e suas quantidades.
 - Sistema valida:
 - Duplicidade de NFE.
 - Consistência entre produtos e NFE.
 - Estoque é atualizado automaticamente com as quantidades adicionadas.

 - 3.3 Recuperação de Senha
 - Usuário clica em "Esqueceu sua senha?".
 - Insere o e-mail registrado no sistema.
 - Sistema envia um link para recuperação.
 - Usuário cria uma nova senha a partir do link.

4. Relatórios e Consultas (Funcionalidade Extra)
 - Relatório de Estoque Atual:
 - Exibe o saldo atual de cada produto.
 - Permite filtrar por grupo, fornecedor ou período.
 - Histórico de Movimentações:
 - Rastreia entradas e saídas de produtos com data, quantidade e responsável.
 - Relatório de Usuários:
 - Lista todos os usuários ativos no sistema com seus níveis de permissão.

5. Tecnologias e Considerações Finais
 - Frontend: HTML, CSS (Bootstrap) e JavaScript.
 - Backend: Node.js ou outra tecnologia à sua escolha.
 - Banco de Dados: PostgreSQL ou MySQL.
 - Segurança:
 - Implementação de criptografia para senhas.
 - Acesso via autenticação segura (JWT ou sessões).


 tela de cadastro de produto ir pro modal 

pagina de edição de produto - criar

passar de 5 campos te mque ser pagina/tela e nao modal


tela de entrada de estoque automatico e outra tela manual

tela para cadastrar editar fornecedor




## produtos
/produtos
/produto/criar
/produto/editar/:id
/produto/categorias/



## categoria de produtos
/categorias
/categoria/criar
/categoria/editar/:id

## fornecedores
/fornecedores
/fornecedor/criar
/fornecedor/editar/:id

## entrada de estoque
/estoque
/estoque/entrada/nota
/estoque/entrada/manual
/estoque/editar/:id

## usuarios do sistema
/usuarios
/usuario/criar
/usuario/editar/:id

## sistema
/login
/recuperar_senha
/acesso_negado
/logs

## dashboard
/dashboard

