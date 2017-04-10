# Pier

Pier - JavaScript client for Pier
Gest\u00C3\u00A3o de pagamento eletr\u00C3\u00B4nicos como servi\u00C3\u00A7o
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 2.12.0
- Build date: 2017-04-10T15:09:50.346-03:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://pierlabs.io](http://pierlabs.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install Pier --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/Pier
then install it via:

```shell
npm install YOUR_USERNAME/Pier --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Pier = require('Pier');

var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var api = new Pier.BaseApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.clearUsingPOST(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Pier.BaseApi* | [**clearUsingPOST**](docs/BaseApi.md#clearUsingPOST) | **POST** /api/bases/limpar | Limpar mapa de bases
*Pier.CadastrosGeraisApi* | [**alterarUsingPUT1**](docs/CadastrosGeraisApi.md#alterarUsingPUT1) | **PUT** /api/enderecos | Atualiza os dados de um determinado Endere\u00C3\u00A7o
*Pier.CadastrosGeraisApi* | [**alterarUsingPUT4**](docs/CadastrosGeraisApi.md#alterarUsingPUT4) | **PUT** /api/pessoas-detalhes/{id} | Atualiza os detalhes de uma determinada Pessoa
*Pier.CadastrosGeraisApi* | [**alterarUsingPUT5**](docs/CadastrosGeraisApi.md#alterarUsingPUT5) | **PUT** /api/pessoas | Atualiza os dados de uma determinada Pessoa
*Pier.CadastrosGeraisApi* | [**alterarUsingPUT6**](docs/CadastrosGeraisApi.md#alterarUsingPUT6) | **PUT** /api/telefones | Realiza a altera\u00C3\u00A7\u00C3\u00A3o de um determinado Telefone
*Pier.CadastrosGeraisApi* | [**consultarOrigemComercialUsingGET**](docs/CadastrosGeraisApi.md#consultarOrigemComercialUsingGET) | **GET** /api/origens-comerciais/{id} | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial
*Pier.CadastrosGeraisApi* | [**consultarProdutoUsingGET**](docs/CadastrosGeraisApi.md#consultarProdutoUsingGET) | **GET** /api/produtos/{id} | Apresenta os dados de um determinado Produto
*Pier.CadastrosGeraisApi* | [**consultarUsingGET13**](docs/CadastrosGeraisApi.md#consultarUsingGET13) | **GET** /api/telefones/{id} | Apresenta os dados de um determinado Telefone
*Pier.CadastrosGeraisApi* | [**consultarUsingGET14**](docs/CadastrosGeraisApi.md#consultarUsingGET14) | **GET** /api/tipos-ajustes | Lista os tipos de ajustes do emissor 
*Pier.CadastrosGeraisApi* | [**consultarUsingGET15**](docs/CadastrosGeraisApi.md#consultarUsingGET15) | **GET** /api/tipos-boletos | Lista os tipos de boletos do emissor 
*Pier.CadastrosGeraisApi* | [**consultarUsingGET16**](docs/CadastrosGeraisApi.md#consultarUsingGET16) | **GET** /api/tipos-enderecos/{id} | Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
*Pier.CadastrosGeraisApi* | [**consultarUsingGET18**](docs/CadastrosGeraisApi.md#consultarUsingGET18) | **GET** /api/tipos-telefones/{id} | Apresenta os dados de um determinado Tipo de Telefone
*Pier.CadastrosGeraisApi* | [**consultarUsingGET4**](docs/CadastrosGeraisApi.md#consultarUsingGET4) | **GET** /api/enderecos/{id} | Apresenta os dados de um determinado Endere\u00C3\u00A7o
*Pier.CadastrosGeraisApi* | [**consultarUsingGET5**](docs/CadastrosGeraisApi.md#consultarUsingGET5) | **GET** /api/estabelecimentos/{id} | Consultar estabelecimento por id
*Pier.CadastrosGeraisApi* | [**consultarUsingGET8**](docs/CadastrosGeraisApi.md#consultarUsingGET8) | **GET** /api/pessoas-detalhes/{id} | Apresenta os detalhes de uma determinada Pessoa
*Pier.CadastrosGeraisApi* | [**consultarUsingGET9**](docs/CadastrosGeraisApi.md#consultarUsingGET9) | **GET** /api/pessoas/{id} | Apresenta os dados de uma determinada Pessoa
*Pier.CadastrosGeraisApi* | [**listarEstadosCivisUsingGET**](docs/CadastrosGeraisApi.md#listarEstadosCivisUsingGET) | **GET** /api/estados-civis | Lista os Estados C\u00C3\u00ADvis
*Pier.CadastrosGeraisApi* | [**listarHistoricoTelefonesUsingGET**](docs/CadastrosGeraisApi.md#listarHistoricoTelefonesUsingGET) | **GET** /api/pessoas/{id}/historico-telefones | Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias
*Pier.CadastrosGeraisApi* | [**listarNaturezasOcupacoesUsingGET**](docs/CadastrosGeraisApi.md#listarNaturezasOcupacoesUsingGET) | **GET** /api/ocupacoes | Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es
*Pier.CadastrosGeraisApi* | [**listarOrigensComerciaisUsingGET**](docs/CadastrosGeraisApi.md#listarOrigensComerciaisUsingGET) | **GET** /api/origens-comerciais | Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais
*Pier.CadastrosGeraisApi* | [**listarProdutosUsingGET**](docs/CadastrosGeraisApi.md#listarProdutosUsingGET) | **GET** /api/produtos | Lista os Produtos do Emissor
*Pier.CadastrosGeraisApi* | [**listarProfissoesUsingGET**](docs/CadastrosGeraisApi.md#listarProfissoesUsingGET) | **GET** /api/profissoes | Lista profiss\u00C3\u00B5es
*Pier.CadastrosGeraisApi* | [**listarUsingGET10**](docs/CadastrosGeraisApi.md#listarUsingGET10) | **GET** /api/portadores | Lista os Portadores existentes
*Pier.CadastrosGeraisApi* | [**listarUsingGET14**](docs/CadastrosGeraisApi.md#listarUsingGET14) | **GET** /api/telefones | Lista os Telefones cadastrados no Emissor
*Pier.CadastrosGeraisApi* | [**listarUsingGET15**](docs/CadastrosGeraisApi.md#listarUsingGET15) | **GET** /api/tipos-enderecos | Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
*Pier.CadastrosGeraisApi* | [**listarUsingGET17**](docs/CadastrosGeraisApi.md#listarUsingGET17) | **GET** /api/tipos-telefones | Lista os Tipos de Telefones
*Pier.CadastrosGeraisApi* | [**listarUsingGET4**](docs/CadastrosGeraisApi.md#listarUsingGET4) | **GET** /api/enderecos | Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
*Pier.CadastrosGeraisApi* | [**listarUsingGET5**](docs/CadastrosGeraisApi.md#listarUsingGET5) | **GET** /api/estabelecimentos | Lista Estabelecimentos
*Pier.CadastrosGeraisApi* | [**listarUsingGET8**](docs/CadastrosGeraisApi.md#listarUsingGET8) | **GET** /api/pessoas-detalhes | Lista os Detalhes das Pessoas cadastradas no Emissor
*Pier.CadastrosGeraisApi* | [**listarUsingGET9**](docs/CadastrosGeraisApi.md#listarUsingGET9) | **GET** /api/pessoas | Lista as Pessoas cadastradas no Emissor
*Pier.CadastrosGeraisApi* | [**salvarPessoaFisicaAprovadaUsingPOST**](docs/CadastrosGeraisApi.md#salvarPessoaFisicaAprovadaUsingPOST) | **POST** /api/contas-pessoas/fisicas | Cadastro de Conta e Pessoa Fisica
*Pier.CadastrosGeraisApi* | [**salvarPessoaJuridicaAprovadaUsingPOST**](docs/CadastrosGeraisApi.md#salvarPessoaJuridicaAprovadaUsingPOST) | **POST** /api/contas-pessoas/juridicas | Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica
*Pier.CadastrosGeraisApi* | [**salvarUsingPOST2**](docs/CadastrosGeraisApi.md#salvarUsingPOST2) | **POST** /api/enderecos | Realiza o cadastro de um novo Endere\u00C3\u00A7o
*Pier.CadastrosGeraisApi* | [**salvarUsingPOST4**](docs/CadastrosGeraisApi.md#salvarUsingPOST4) | **POST** /api/pessoas | Realiza o cadastro de um nova Pessoa
*Pier.CadastrosGeraisApi* | [**salvarUsingPOST5**](docs/CadastrosGeraisApi.md#salvarUsingPOST5) | **POST** /api/telefones | Realiza o cadastro de um novo Telefone
*Pier.CartaoApi* | [**alterarAlterarSenhaUsingPUT**](docs/CartaoApi.md#alterarAlterarSenhaUsingPUT) | **PUT** /api/cartoes/{id}/alterar-senha | Realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha de um Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**alterarStatusImpressaoUsingPUT**](docs/CartaoApi.md#alterarStatusImpressaoUsingPUT) | **PUT** /api/cartoes/{id}/alterar-status-impressao | Realiza a altera\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**atribuirPessoaUsingPUT**](docs/CartaoApi.md#atribuirPessoaUsingPUT) | **PUT** /api/cartoes/{id}/atribuir-pessoa | Realiza a atribui\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o pr\u00C3\u00A9-pago a uma pessoa
*Pier.CartaoApi* | [**bloquearUsingPUT**](docs/CartaoApi.md#bloquearUsingPUT) | **PUT** /api/cartoes/{id}/bloquear | Realiza o bloqueio de um determinado Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**cadastrarAlterarSenhaUsingPOST**](docs/CartaoApi.md#cadastrarAlterarSenhaUsingPOST) | **POST** /api/cartoes/{id}/cadastrar-senha | Realiza o cadastro da senha de um Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarLimiteDisponibilidadeUsingGET**](docs/CartaoApi.md#consultarLimiteDisponibilidadeUsingGET) | **GET** /api/cartoes/{id}/limites-disponibilidades | Apresenta os limites do Portador do Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarLotesCartoesPrePagosUsingGET**](docs/CartaoApi.md#consultarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos/{id} | Permite consultar um determinado Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
*Pier.CartaoApi* | [**consultarPortadorUsingGET**](docs/CartaoApi.md#consultarPortadorUsingGET) | **GET** /api/cartoes/{id}/portadores | Apresenta os dados do Portador do Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarUsingGET2**](docs/CartaoApi.md#consultarUsingGET2) | **GET** /api/cartoes/{id} | Apresenta os dados de um determinado Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarUsingGET20**](docs/CartaoApi.md#consultarUsingGET20) | **GET** /api/cartoes/{id}/transferencias-creditos-contas-bancarias/{id_transferencia} | Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria
*Pier.CartaoApi* | [**desbloquearUsingPUT**](docs/CartaoApi.md#desbloquearUsingPUT) | **PUT** /api/cartoes/{id}/desbloquear | Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**gerarLotesCartoesPrePagosUsingPOST**](docs/CartaoApi.md#gerarLotesCartoesPrePagosUsingPOST) | **POST** /api/cartoes/lotes-cartoes-pre-pagos | Permite gerar um novo Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
*Pier.CartaoApi* | [**gerarNovaViaUsingPOST**](docs/CartaoApi.md#gerarNovaViaUsingPOST) | **POST** /api/cartoes/{id}/gerar-nova-via | Gerar uma nova via de Cart\u00C3\u00A3o
*Pier.CartaoApi* | [**listarLotesCartoesPrePagosUsingGET**](docs/CartaoApi.md#listarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos | Permite listar os Lotes de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
*Pier.CartaoApi* | [**listarUsingGET19**](docs/CartaoApi.md#listarUsingGET19) | **GET** /api/cartoes/{id}/transferencias-creditos-contas-bancarias | Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas
*Pier.CartaoApi* | [**listarUsingGET2**](docs/CartaoApi.md#listarUsingGET2) | **GET** /api/cartoes | Lista os Cart\u00C3\u00B5es gerados pelo Emissor
*Pier.CartaoApi* | [**transferirUsingPOST**](docs/CartaoApi.md#transferirUsingPOST) | **POST** /api/cartoes/{id}/transferencias-creditos-contas-bancarias | Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria entre bancos / contas
*Pier.CartaoApi* | [**validarCartaoChipBandeiradoUsingGET**](docs/CartaoApi.md#validarCartaoChipBandeiradoUsingGET) | **GET** /api/cartoes/bandeirados/validar-chip | Permite validar um Cart\u00C3\u00A3o com bandeira Mastercard a partir do chip
*Pier.CartaoApi* | [**validarCartaoDigitadoBandeiradoUsingGET**](docs/CartaoApi.md#validarCartaoDigitadoBandeiradoUsingGET) | **GET** /api/cartoes/bandeirados/validar-digitado | Permite validar um Cart\u00C3\u00A3o bandeirado a partir dos dados Impressos
*Pier.CartaoApi* | [**validarCartaoDigitadoNaoBandeiradoUsingGET**](docs/CartaoApi.md#validarCartaoDigitadoNaoBandeiradoUsingGET) | **GET** /api/cartoes/nao-bandeirados/validar-digitado | Permite validar um Cart\u00C3\u00A3o a partir dos dados Impressos
*Pier.CartaoApi* | [**validarCartaoTarjaBandeiradoUsingGET**](docs/CartaoApi.md#validarCartaoTarjaBandeiradoUsingGET) | **GET** /api/cartoes/bandeirados/validar-tarja | Permite validar um Cart\u00C3\u00A3o Bandeirado a partir da Tarja
*Pier.CartaoApi* | [**validarSenhaUsingGET**](docs/CartaoApi.md#validarSenhaUsingGET) | **GET** /api/cartoes/{id}/validar-senha | Permite validar a senha de um Cart\u00C3\u00A3o
*Pier.ContaApi* | [**ajustarContaUsingPOST**](docs/ContaApi.md#ajustarContaUsingPOST) | **POST** /api/contas/{id}/ajustes-financeiros | Lan\u00C3\u00A7a um ajuste para a conta do id informado
*Pier.ContaApi* | [**alterarLimiteUsingPUT**](docs/ContaApi.md#alterarLimiteUsingPUT) | **PUT** /api/contas/{id}/alterar-limites | Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta
*Pier.ContaApi* | [**alterarVencimentoUsingPUT**](docs/ContaApi.md#alterarVencimentoUsingPUT) | **PUT** /api/contas/{id}/alterar-vencimento | Realiza a altera\u00C3\u00A7\u00C3\u00A3o do dia de vencimento das faturas da conta
*Pier.ContaApi* | [**ativarEnvioFaturaEmailUsingPOST**](docs/ContaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email |  Ativa o servi\u00C3\u00A7o de envio de fatura por email
*Pier.ContaApi* | [**consultarBoletoEmitidoUsingGET**](docs/ContaApi.md#consultarBoletoEmitidoUsingGET) | **GET** /api/contas/{id}/faturas/consultar-ficha-compensacao | Consulta os dados de um determinado boleto da fatura
*Pier.ContaApi* | [**consultarDividaAtualizadaClienteUsingGET**](docs/ContaApi.md#consultarDividaAtualizadaClienteUsingGET) | **GET** /api/contas/{id}/recuperar-divida-atualizada | Consulta a d\u00C3\u00ADvida atualizada do cliente
*Pier.ContaApi* | [**consultarFaturaConsignadaAbertaUsingGET**](docs/ContaApi.md#consultarFaturaConsignadaAbertaUsingGET) | **GET** /api/contas/{id}/faturas-consignadas/consultar-fatura-aberta | Consultar a fatura consignadas abertas da conta
*Pier.ContaApi* | [**consultarFaturaConsignadaUsingGET**](docs/ContaApi.md#consultarFaturaConsignadaUsingGET) | **GET** /api/contas/{id}/faturas-consignadas/{id_fatura} | Apresenta dados de uma determinada fatura consignada
*Pier.ContaApi* | [**consultarFaturaUsingGET**](docs/ContaApi.md#consultarFaturaUsingGET) | **GET** /api/contas/{id}/faturas/{id_fatura} | Consultar Fatura da Conta
*Pier.ContaApi* | [**consultarLancamentosFuturosFaturaUsingGET**](docs/ContaApi.md#consultarLancamentosFuturosFaturaUsingGET) | **GET** /api/contas/{id}/faturas/{id_fatura}/lancamentos-futuros | Consultar Lan\u00C3\u00A7amentos Futuros da Fatura de uma Conta
*Pier.ContaApi* | [**consultarLimiteDisponibilidadeUsingGET1**](docs/ContaApi.md#consultarLimiteDisponibilidadeUsingGET1) | **GET** /api/contas/{id}/limites-disponibilidades | Apresenta os limites da conta
*Pier.ContaApi* | [**consultarUsingGET21**](docs/ContaApi.md#consultarUsingGET21) | **GET** /api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia} | Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
*Pier.ContaApi* | [**consultarUsingGET3**](docs/ContaApi.md#consultarUsingGET3) | **GET** /api/contas/{id} | Apresenta dados de uma determinada conta
*Pier.ContaApi* | [**desativarEnvioFaturaEmailUsingPOST**](docs/ContaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | Desativa o servi\u00C3\u00A7o de envio de fatura por email
*Pier.ContaApi* | [**gerarBoletoRecargaUsingPOST**](docs/ContaApi.md#gerarBoletoRecargaUsingPOST) | **POST** /api/contas/{id}/gerar-boleto-recarga | Gera um boleto de recarga
*Pier.ContaApi* | [**gerarCartaoUsingPOST**](docs/ContaApi.md#gerarCartaoUsingPOST) | **POST** /api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao | Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o para impress\u00C3\u00A3o avulsa
*Pier.ContaApi* | [**listarFaturasConsignadasUsingGET**](docs/ContaApi.md#listarFaturasConsignadasUsingGET) | **GET** /api/contas/{id}/faturas-consignadas | Lista as faturas consignadas da conta
*Pier.ContaApi* | [**listarFaturasUsingGET**](docs/ContaApi.md#listarFaturasUsingGET) | **GET** /api/contas/{id}/faturas | Lista as faturas da conta
*Pier.ContaApi* | [**listarHistoricoAlteracoesLimitesUsingGET**](docs/ContaApi.md#listarHistoricoAlteracoesLimitesUsingGET) | **GET** /api/contas/{id}/historicos-alteracoes-limites | Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta
*Pier.ContaApi* | [**listarHistoricoAssessoriaUsingGET**](docs/ContaApi.md#listarHistoricoAssessoriaUsingGET) | **GET** /api/contas/{id}/historicos-assessorias-cobranca | Lista o hist\u00C3\u00B3rico de entradas/sa\u00C3\u00ADdas de assessorias de cobran\u00C3\u00A7a
*Pier.ContaApi* | [**listarHistoricoAtrasosFaturasUsingGET**](docs/ContaApi.md#listarHistoricoAtrasosFaturasUsingGET) | **GET** /api/contas/{id}/historicos-faturas-atrasos | Lista o historico de atrasos das faturas
*Pier.ContaApi* | [**listarNaoProcessadasUsingGET**](docs/ContaApi.md#listarNaoProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/nao-processadas | Lista as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da conta
*Pier.ContaApi* | [**listarProcessadasUsingGET**](docs/ContaApi.md#listarProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/processadas | Lista as transa\u00C3\u00A7\u00C3\u00B5es processadas da conta
*Pier.ContaApi* | [**listarUsingGET20**](docs/ContaApi.md#listarUsingGET20) | **GET** /api/contas/{id}/transferencias-creditos-cartoes | Lista as transfer\u00C3\u00AAncias realizadas pela conta
*Pier.ContaApi* | [**listarUsingGET3**](docs/ContaApi.md#listarUsingGET3) | **GET** /api/contas | Lista contas existentes na base de dados do Emissor
*Pier.ContaApi* | [**reativarUsingPOST**](docs/ContaApi.md#reativarUsingPOST) | **POST** /api/contas/{id}/reativar | Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de contas que foram desativadas por inadimpl\u00C3\u00AAncia
*Pier.ContaApi* | [**transacoesUsingGET**](docs/ContaApi.md#transacoesUsingGET) | **GET** /api/contas/{id}/timeline | Permite listar uma linha do tempo com os eventos da conta
*Pier.ContaApi* | [**transferirUsingPOST1**](docs/ContaApi.md#transferirUsingPOST1) | **POST** /api/contas/{id}/transferencias-creditos-cartoes | Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor
*Pier.FAQApi* | [**adicionarUsingPOST**](docs/FAQApi.md#adicionarUsingPOST) | **POST** /api/faqs | Adiciona uma nova FAQ
*Pier.FAQApi* | [**alterarUsingPUT2**](docs/FAQApi.md#alterarUsingPUT2) | **PUT** /api/faqs/{id} | Alterar FAQ
*Pier.FAQApi* | [**consultarUsingGET6**](docs/FAQApi.md#consultarUsingGET6) | **GET** /api/faqs/{id} | Consultar FAQ por id
*Pier.FAQApi* | [**listarUsingGET6**](docs/FAQApi.md#listarUsingGET6) | **GET** /api/faqs | Lista FAQs
*Pier.NotificacoesApi* | [**atualizarSMSUsingPOST**](docs/NotificacoesApi.md#atualizarSMSUsingPOST) | **POST** /api/notificacoes/sms/atualizar-status | Atualizar SMS
*Pier.NotificacoesApi* | [**listarPushUsingGET**](docs/NotificacoesApi.md#listarPushUsingGET) | **GET** /api/notificacoes/push | Listar Push
*Pier.NotificacoesApi* | [**listarSMSUsingGET**](docs/NotificacoesApi.md#listarSMSUsingGET) | **GET** /api/notificacoes/sms | Listar SMS
*Pier.NotificacoesApi* | [**responderSMSUsingPOST**](docs/NotificacoesApi.md#responderSMSUsingPOST) | **POST** /api/notificacoes/sms/responder | Responder SMS
*Pier.NotificacoesApi* | [**salvarPushFCMUsingPOST**](docs/NotificacoesApi.md#salvarPushFCMUsingPOST) | **POST** /api/notificacoes/push/fcm | Enviar Push FCM
*Pier.NotificacoesApi* | [**salvarPushGCMUsingPOST**](docs/NotificacoesApi.md#salvarPushGCMUsingPOST) | **POST** /api/notificacoes/push/gcm | Enviar Push GCM
*Pier.NotificacoesApi* | [**salvarPushUsingPOST**](docs/NotificacoesApi.md#salvarPushUsingPOST) | **POST** /api/notificacoes/push/apns | Enviar Push APNS
*Pier.NotificacoesApi* | [**salvarSMSUsingPOST**](docs/NotificacoesApi.md#salvarSMSUsingPOST) | **POST** /api/notificacoes/sms | Enviar SMS
*Pier.OportunidadesApi* | [**alterarStatusUsingPUT**](docs/OportunidadesApi.md#alterarStatusUsingPUT) | **PUT** /api/tipos-oportunidades/{id}/status/{idStatus} | Altera o status do tipo oportunidade
*Pier.OportunidadesApi* | [**alterarUsingPUT3**](docs/OportunidadesApi.md#alterarUsingPUT3) | **PUT** /api/oportunidades/{id} | Altera as oportunidades
*Pier.OportunidadesApi* | [**alterarUsingPUT7**](docs/OportunidadesApi.md#alterarUsingPUT7) | **PUT** /api/tipos-oportunidades/{id} | Altera os tipos oportunidades
*Pier.OportunidadesApi* | [**consultarStatusUsingGET**](docs/OportunidadesApi.md#consultarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status/{idStatus} | Apresenta dados de um determinado status do tipo oportunidade
*Pier.OportunidadesApi* | [**consultarUsingGET17**](docs/OportunidadesApi.md#consultarUsingGET17) | **GET** /api/tipos-oportunidades/{id} | Apresenta dados de um determinado tipo oportunidade
*Pier.OportunidadesApi* | [**consultarUsingGET7**](docs/OportunidadesApi.md#consultarUsingGET7) | **GET** /api/oportunidades/{id} | Apresenta dados de uma determinada oportunidade
*Pier.OportunidadesApi* | [**listarAuditoriasStatusUsingGET**](docs/OportunidadesApi.md#listarAuditoriasStatusUsingGET) | **GET** /api/auditorias-status-oportunidades | Lista as auditorias dos status oportunidades
*Pier.OportunidadesApi* | [**listarAuditoriasUsingGET**](docs/OportunidadesApi.md#listarAuditoriasUsingGET) | **GET** /api/auditorias-oportunidades | Lista as auditorias das oportunidades
*Pier.OportunidadesApi* | [**listarAuditoriasUsingGET1**](docs/OportunidadesApi.md#listarAuditoriasUsingGET1) | **GET** /api/auditorias-tipos-oportunidades | Lista as auditorias dos tipos oportunidades
*Pier.OportunidadesApi* | [**listarStatusUsingGET**](docs/OportunidadesApi.md#listarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status | Lista os status do tipo oportunidades
*Pier.OportunidadesApi* | [**listarUsingGET16**](docs/OportunidadesApi.md#listarUsingGET16) | **GET** /api/tipos-oportunidades | Lista os tipos oportunidades
*Pier.OportunidadesApi* | [**listarUsingGET7**](docs/OportunidadesApi.md#listarUsingGET7) | **GET** /api/oportunidades | Lista as oportunidades
*Pier.OportunidadesApi* | [**salvarStatusUsingPOST**](docs/OportunidadesApi.md#salvarStatusUsingPOST) | **POST** /api/tipos-oportunidades/{id}/status | Cadastra status para o tipo oportunidade
*Pier.OportunidadesApi* | [**salvarUsingPOST3**](docs/OportunidadesApi.md#salvarUsingPOST3) | **POST** /api/oportunidades | Cadastra as oportunidade
*Pier.OportunidadesApi* | [**salvarUsingPOST6**](docs/OportunidadesApi.md#salvarUsingPOST6) | **POST** /api/tipos-oportunidades | Cadastra tipos oportunidades
*Pier.RiscoFraudeApi* | [**consultarUsingGET**](docs/RiscoFraudeApi.md#consultarUsingGET) | **GET** /api/atendimento-clientes/{id} | Apresenta os dados de um determinado Atendimento
*Pier.RiscoFraudeApi* | [**consultarUsingGET10**](docs/RiscoFraudeApi.md#consultarUsingGET10) | **GET** /api/riscos-fraudes/{id} | Consultar uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
*Pier.RiscoFraudeApi* | [**informarRiscoFraudeUsingPOST**](docs/RiscoFraudeApi.md#informarRiscoFraudeUsingPOST) | **POST** /api/riscos-fraudes | Receber Risco Fraude
*Pier.RiscoFraudeApi* | [**listarUsingGET**](docs/RiscoFraudeApi.md#listarUsingGET) | **GET** /api/atendimento-clientes | Lista todos os atendimentos
*Pier.RiscoFraudeApi* | [**listarUsingGET11**](docs/RiscoFraudeApi.md#listarUsingGET11) | **GET** /api/riscos-fraudes | Listar as transa\u00C3\u00A7\u00C3\u00B5es com resolu\u00C3\u00A7\u00C3\u00A3o de risco fraude pendente
*Pier.RiscoFraudeApi* | [**negarUsingGET**](docs/RiscoFraudeApi.md#negarUsingGET) | **GET** /api/riscos-fraudes/{id}/negar | Negar autenticidade da transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
*Pier.RiscoFraudeApi* | [**reconhecerUsingGET**](docs/RiscoFraudeApi.md#reconhecerUsingGET) | **GET** /api/riscos-fraudes/{id}/reconhecer | Reconhecer a transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
*Pier.RiscoFraudeApi* | [**salvarUsingPOST**](docs/RiscoFraudeApi.md#salvarUsingPOST) | **POST** /api/atendimento-clientes | Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta
*Pier.StatusParametrosApi* | [**consultarEstagioCartaoUsingGET**](docs/StatusParametrosApi.md#consultarEstagioCartaoUsingGET) | **GET** /api/estagios-cartoes/{id} | Apresenta os dados de um determinado Estagio Cart\u00C3\u00A3o
*Pier.StatusParametrosApi* | [**consultarStatusCartaoUsingGET**](docs/StatusParametrosApi.md#consultarStatusCartaoUsingGET) | **GET** /api/status-cartoes/{id} | Apresenta os dados de um determinado Status Cart\u00C3\u00A3o
*Pier.StatusParametrosApi* | [**consultarUsingGET11**](docs/StatusParametrosApi.md#consultarUsingGET11) | **GET** /api/status-contas/{id} | Apresenta os dados de um determinado Status Conta
*Pier.StatusParametrosApi* | [**consultarUsingGET12**](docs/StatusParametrosApi.md#consultarUsingGET12) | **GET** /api/status-impressoes/{id} | Apresenta os dados de um determinado Status Impress\u00C3\u00A3o
*Pier.StatusParametrosApi* | [**listarEstagiosCartoesUsingGET**](docs/StatusParametrosApi.md#listarEstagiosCartoesUsingGET) | **GET** /api/estagios-cartoes | Lista as op\u00C3\u00A7\u00C3\u00B5es de Est\u00C3\u00A1gios do Cart\u00C3\u00A3o
*Pier.StatusParametrosApi* | [**listarStatusCartoesUsingGET**](docs/StatusParametrosApi.md#listarStatusCartoesUsingGET) | **GET** /api/status-cartoes | Lista as op\u00C3\u00A7\u00C3\u00B5es de Status do Cart\u00C3\u00A3o
*Pier.StatusParametrosApi* | [**listarUsingGET12**](docs/StatusParametrosApi.md#listarUsingGET12) | **GET** /api/status-contas | Lista os Status Contas cadastrados para o Emissor
*Pier.StatusParametrosApi* | [**listarUsingGET13**](docs/StatusParametrosApi.md#listarUsingGET13) | **GET** /api/status-impressoes | Lista as op\u00C3\u00A7\u00C3\u00B5es de Status Impress\u00C3\u00A3o
*Pier.TokenApi* | [**callbackUsingPOST**](docs/TokenApi.md#callbackUsingPOST) | **POST** /api/tokens/callback | /api/tokens/callback
*Pier.UsuariosApi* | [**alterarSenhaUsingPUT**](docs/UsuariosApi.md#alterarSenhaUsingPUT) | **PUT** /api/usuarios/{id}/alterar-senha | Alterar senha do usu\u00C3\u00A1rio
*Pier.UsuariosApi* | [**alterarUsingPUT9**](docs/UsuariosApi.md#alterarUsingPUT9) | **PUT** /api/usuarios/{id} | Altera os usu\u00C3\u00A1rios cadastrados
*Pier.UsuariosApi* | [**consultarUsingGET22**](docs/UsuariosApi.md#consultarUsingGET22) | **GET** /api/usuarios/{id} | Apresenta os dados de um determinado Usu\u00C3\u00A1rio
*Pier.UsuariosApi* | [**listarUsingGET21**](docs/UsuariosApi.md#listarUsingGET21) | **GET** /api/usuarios | Lista os Usu\u00C3\u00A1rios cadastrados
*Pier.UsuariosApi* | [**recuperarSenhaUsingPOST**](docs/UsuariosApi.md#recuperarSenhaUsingPOST) | **POST** /api/usuarios/{id}/recuperar-senha | Recuperar senha do usu\u00C3\u00A1rio
*Pier.UsuariosApi* | [**salvarUsingPOST8**](docs/UsuariosApi.md#salvarUsingPOST8) | **POST** /api/usuarios | Cadastra Usu\u00C3\u00A1rio
*Pier.UsuariosApi* | [**validarSenhaUsingGET1**](docs/UsuariosApi.md#validarSenhaUsingGET1) | **GET** /api/usuarios/{id}/validar-senha | Validar a senha do usu\u00C3\u00A1rio
*Pier.WebhooksApi* | [**alterarUsingPUT10**](docs/WebhooksApi.md#alterarUsingPUT10) | **PUT** /api/webhooks/{id} | Alterar Webhook
*Pier.WebhooksApi* | [**consultarUsingGET23**](docs/WebhooksApi.md#consultarUsingGET23) | **GET** /api/webhooks/{id} | Consultar Webhook
*Pier.WebhooksApi* | [**listarUsingGET22**](docs/WebhooksApi.md#listarUsingGET22) | **GET** /api/webhooks | Lista os Webhooks
*Pier.WebhooksApi* | [**salvarUsingPOST9**](docs/WebhooksApi.md#salvarUsingPOST9) | **POST** /api/webhooks | Salvar Webhook


## Documentation for Models

 - [Pier.AjusteResponse](docs/AjusteResponse.md)
 - [Pier.AtendimentoCliente](docs/AtendimentoCliente.md)
 - [Pier.AuthToken](docs/AuthToken.md)
 - [Pier.Base](docs/Base.md)
 - [Pier.BodyAccessToken](docs/BodyAccessToken.md)
 - [Pier.BoletoDeFatura](docs/BoletoDeFatura.md)
 - [Pier.CampoCodificadoDescricaoResponse](docs/CampoCodificadoDescricaoResponse.md)
 - [Pier.Cartao](docs/Cartao.md)
 - [Pier.CartaoImpressao](docs/CartaoImpressao.md)
 - [Pier.CdtDetalheOportunidadeAUD](docs/CdtDetalheOportunidadeAUD.md)
 - [Pier.Conta](docs/Conta.md)
 - [Pier.DetalheOportunidadePersist](docs/DetalheOportunidadePersist.md)
 - [Pier.DetalheOportunidadeResponse](docs/DetalheOportunidadeResponse.md)
 - [Pier.DetalheOportunidadeUpdate](docs/DetalheOportunidadeUpdate.md)
 - [Pier.DetalhesFaturaResponse](docs/DetalhesFaturaResponse.md)
 - [Pier.DividaClienteResponse](docs/DividaClienteResponse.md)
 - [Pier.Endereco](docs/Endereco.md)
 - [Pier.EnderecoAprovadoPersist](docs/EnderecoAprovadoPersist.md)
 - [Pier.EnderecoAprovadoResponse](docs/EnderecoAprovadoResponse.md)
 - [Pier.Estabelecimento](docs/Estabelecimento.md)
 - [Pier.EstagioCartao](docs/EstagioCartao.md)
 - [Pier.ExtraInfo](docs/ExtraInfo.md)
 - [Pier.FAQ](docs/FAQ.md)
 - [Pier.FaturaConsignadaDetalheResponse](docs/FaturaConsignadaDetalheResponse.md)
 - [Pier.FaturaConsignadaResponse](docs/FaturaConsignadaResponse.md)
 - [Pier.FaturaResponse](docs/FaturaResponse.md)
 - [Pier.HistoricoAtrasoFaturaResponse](docs/HistoricoAtrasoFaturaResponse.md)
 - [Pier.HistoricoEventos](docs/HistoricoEventos.md)
 - [Pier.HistoricoImpressaoCartao](docs/HistoricoImpressaoCartao.md)
 - [Pier.HistoricoTelefone](docs/HistoricoTelefone.md)
 - [Pier.LimiteDisponibilidade](docs/LimiteDisponibilidade.md)
 - [Pier.LinkHistoricoAssessoriaResponse](docs/LinkHistoricoAssessoriaResponse.md)
 - [Pier.LinkPageHistoricoAssessoriaResponse](docs/LinkPageHistoricoAssessoriaResponse.md)
 - [Pier.LinkPageTransferenciaBancariaResponse](docs/LinkPageTransferenciaBancariaResponse.md)
 - [Pier.LinkTransferenciaBancariaResponse](docs/LinkTransferenciaBancariaResponse.md)
 - [Pier.ListaProdutos](docs/ListaProdutos.md)
 - [Pier.LoteCartoesPrePagos](docs/LoteCartoesPrePagos.md)
 - [Pier.NotificacaoPushResponse](docs/NotificacaoPushResponse.md)
 - [Pier.NotificacaoSMSBody](docs/NotificacaoSMSBody.md)
 - [Pier.NotificacaoSMSResponse](docs/NotificacaoSMSResponse.md)
 - [Pier.OportunidadeAUDResponse](docs/OportunidadeAUDResponse.md)
 - [Pier.OportunidadePersist](docs/OportunidadePersist.md)
 - [Pier.OportunidadeResponse](docs/OportunidadeResponse.md)
 - [Pier.OportunidadeUpdate](docs/OportunidadeUpdate.md)
 - [Pier.OrigemComercial](docs/OrigemComercial.md)
 - [Pier.PageAtendimentoClientes](docs/PageAtendimentoClientes.md)
 - [Pier.PageBases](docs/PageBases.md)
 - [Pier.PageCampoCodificadoDescricao](docs/PageCampoCodificadoDescricao.md)
 - [Pier.PageCartoes](docs/PageCartoes.md)
 - [Pier.PageContas](docs/PageContas.md)
 - [Pier.PageEnderecos](docs/PageEnderecos.md)
 - [Pier.PageEstabelecimentos](docs/PageEstabelecimentos.md)
 - [Pier.PageEstagiosCartoes](docs/PageEstagiosCartoes.md)
 - [Pier.PageFaqs](docs/PageFaqs.md)
 - [Pier.PageFaturas](docs/PageFaturas.md)
 - [Pier.PageFaturasConsignadas](docs/PageFaturasConsignadas.md)
 - [Pier.PageHistoricoAtraso](docs/PageHistoricoAtraso.md)
 - [Pier.PageHistoricoEventos](docs/PageHistoricoEventos.md)
 - [Pier.PageLoteCartoesPrePagosResponse](docs/PageLoteCartoesPrePagosResponse.md)
 - [Pier.PageOprtunidadeAUD](docs/PageOprtunidadeAUD.md)
 - [Pier.PageOprtunidadesResponse](docs/PageOprtunidadesResponse.md)
 - [Pier.PageOrigensComerciais](docs/PageOrigensComerciais.md)
 - [Pier.PagePessoas](docs/PagePessoas.md)
 - [Pier.PagePortador](docs/PagePortador.md)
 - [Pier.PagePush](docs/PagePush.md)
 - [Pier.PageSMS](docs/PageSMS.md)
 - [Pier.PageStatusCartoes](docs/PageStatusCartoes.md)
 - [Pier.PageStatusContas](docs/PageStatusContas.md)
 - [Pier.PageStatusImpressao](docs/PageStatusImpressao.md)
 - [Pier.PageStatusOprtunidades](docs/PageStatusOprtunidades.md)
 - [Pier.PageStatusOprtunidadesAUD](docs/PageStatusOprtunidadesAUD.md)
 - [Pier.PageTelefones](docs/PageTelefones.md)
 - [Pier.PageTipoAjuste](docs/PageTipoAjuste.md)
 - [Pier.PageTipoBoleto](docs/PageTipoBoleto.md)
 - [Pier.PageTipoOprtunidades](docs/PageTipoOprtunidades.md)
 - [Pier.PageTipoOprtunidadesAUD](docs/PageTipoOprtunidadesAUD.md)
 - [Pier.PageTipoTelefones](docs/PageTipoTelefones.md)
 - [Pier.PageTiposEndereco](docs/PageTiposEndereco.md)
 - [Pier.PageTransacaoResponse](docs/PageTransacaoResponse.md)
 - [Pier.PageTransacoesCorrentes](docs/PageTransacoesCorrentes.md)
 - [Pier.PageTransferencias](docs/PageTransferencias.md)
 - [Pier.PageUsuarios](docs/PageUsuarios.md)
 - [Pier.PageWebHooks](docs/PageWebHooks.md)
 - [Pier.Pessoa](docs/Pessoa.md)
 - [Pier.PessoaDetalheResponse](docs/PessoaDetalheResponse.md)
 - [Pier.PessoaFisicaAprovadaPersist](docs/PessoaFisicaAprovadaPersist.md)
 - [Pier.PessoaFisicaAprovadaResponse](docs/PessoaFisicaAprovadaResponse.md)
 - [Pier.PessoaJuridicaAprovadaPersist](docs/PessoaJuridicaAprovadaPersist.md)
 - [Pier.PessoaJuridicaAprovadaResponse](docs/PessoaJuridicaAprovadaResponse.md)
 - [Pier.PessoaPersist](docs/PessoaPersist.md)
 - [Pier.Portador](docs/Portador.md)
 - [Pier.ProdutoDetalhesResponse](docs/ProdutoDetalhesResponse.md)
 - [Pier.ProdutoResponse](docs/ProdutoResponse.md)
 - [Pier.PushAPNS](docs/PushAPNS.md)
 - [Pier.PushFCMEGCM](docs/PushFCMEGCM.md)
 - [Pier.RiscoFraudeDetalhadoResponse](docs/RiscoFraudeDetalhadoResponse.md)
 - [Pier.RiscoFraudeResponse](docs/RiscoFraudeResponse.md)
 - [Pier.RiscoFraudeResponsePage](docs/RiscoFraudeResponsePage.md)
 - [Pier.SMS](docs/SMS.md)
 - [Pier.SocioAprovadoResponse](docs/SocioAprovadoResponse.md)
 - [Pier.StatusCartao](docs/StatusCartao.md)
 - [Pier.StatusConta](docs/StatusConta.md)
 - [Pier.StatusImpressao](docs/StatusImpressao.md)
 - [Pier.StatusOportunidade](docs/StatusOportunidade.md)
 - [Pier.StatusOportunidadeAUDResponse](docs/StatusOportunidadeAUDResponse.md)
 - [Pier.StatusOportunidadeResponse](docs/StatusOportunidadeResponse.md)
 - [Pier.Telefone](docs/Telefone.md)
 - [Pier.TelefonePessoaAprovadaPersist](docs/TelefonePessoaAprovadaPersist.md)
 - [Pier.TelefonePessoaAprovadaResponse](docs/TelefonePessoaAprovadaResponse.md)
 - [Pier.TipoAjusteResponse](docs/TipoAjusteResponse.md)
 - [Pier.TipoEndereco](docs/TipoEndereco.md)
 - [Pier.TipoOportunidade](docs/TipoOportunidade.md)
 - [Pier.TipoOportunidadeAUDResponse](docs/TipoOportunidadeAUDResponse.md)
 - [Pier.TipoOportunidadeResponse](docs/TipoOportunidadeResponse.md)
 - [Pier.TipoTelefone](docs/TipoTelefone.md)
 - [Pier.Token](docs/Token.md)
 - [Pier.TransacaoResponse](docs/TransacaoResponse.md)
 - [Pier.TransacoesCorrentes](docs/TransacoesCorrentes.md)
 - [Pier.Transferencia](docs/Transferencia.md)
 - [Pier.UsuarioPersist](docs/UsuarioPersist.md)
 - [Pier.UsuarioResponse](docs/UsuarioResponse.md)
 - [Pier.UsuarioUpdate](docs/UsuarioUpdate.md)
 - [Pier.ValidaCartao](docs/ValidaCartao.md)
 - [Pier.WebHook](docs/WebHook.md)


## Documentation for Authorization


### access_token

- **Type**: API key
- **API key parameter name**: access_token
- **Location**: HTTP header

### client_id

- **Type**: API key
- **API key parameter name**: client_id
- **Location**: HTTP header

