# Pier.FaturaConsignadaDetalheResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo identificador da fatura. | [optional] 
**idConta** | **Integer** | C\u00C3\u00B3digo identificador da conta (id). | [optional] 
**limiteGlobal** | **Number** | Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui. | 
**flagEmiteFatura** | **Integer** | C\u00C3\u00B3digo identificador da conta a qual a fatura se refere. | [optional] 
**limiteCompra** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais. | 
**dataVencimentoFatura** | **String** | Data de vencimento da fatura. | [optional] 
**limiteParcelado** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas. | 
**limiteParcelas** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade. | 
**valorTotalFatura** | **Number** | Valor para pagamento total da fatura. | [optional] 
**valorFaturaAnterior** | **Number** | Valor total da fatura anterior. | [optional] 
**valorPagamentoMinimo** | **Number** | Valor m\u00C3\u00ADnimo para pagamento da fatura. | [optional] 
**valorPagamentoConsignado** | **Number** | Valor da fatura pago atrav\u00C3\u00A9s de desconto em folha. | [optional] 
**limiteSaqueGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional. | 
**valorPagamentoComplementar** | **Number** | Valor complementar para considerar o pagamento m\u00C3\u00ADnimo da fatura. | [optional] 
**limiteSaquePeriodo** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento. | 
**totalComprasNacionais** | **Number** | Valor total das compras nacionais lan\u00C3\u00A7adas na fatura. | [optional] 
**limiteConsignado** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos. | 
**totalComprasInternacionas** | **Number** | Valor total das compras internacionais lan\u00C3\u00A7adas na fatura. | [optional] 
**limiteInternacionalCompra** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais. | 
**totalSaquesNacionais** | **Number** | Valor total dos saques nacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**limiteInternacionalParcelado** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas. | 
**totalSaquesInternacionais** | **Number** | Valor total dos saques internacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**limiteInternacionalParcelas** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade. | 
**totalDebitosNacionais** | **Number** | Valor total dos d\u00C3\u00A9bitos nacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**limiteInternacionalSaqueGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional. | 
**totalDebitosRecorrentes** | **Number** | Valor total dos d\u00C3\u00A9bitos recorrentes lan\u00C3\u00A7ados na fatura. | [optional] 
**limiteInternacionalSaquePeriodo** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento. | 
**totalDebitosInternacionais** | **Number** | Valor total dos d\u00C3\u00A9bitos internacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**saldoDisponivelGlobal** | **Number** | Apresenta o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es. | 
**totalDebitosDiversosNacionais** | **Number** | Valor total dos d\u00C3\u00A9bitos diversos nacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**saldoDisponivelCompra** | **Number** | Quando utilizado pelo emissor a modalidade limiteCompra, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de compra Nacional. | 
**totalDebitosOpcionais** | **Number** | Valor total dos d\u00C3\u00A9bitos diversos opcionais lan\u00C3\u00A7ados na fatura. | [optional] 
**saldoDisponivelParcelado** | **Number** | Quando utilizado pelo emissor a modalidade limiteParcelado, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de compra Nacional. | 
**totalPagamentos** | **Number** | Valor total dos pagamentos lan\u00C3\u00A7ados na fatura. | [optional] 
**saldoDisponivelParcelas** | **Number** | Quando utilizado pelo emissor a modalidade limiteParcelas, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para utilizar como valor de parcelas Nacionais em um determinado ciclo de faturamento. | 
**totalCreditosNacionais** | **Number** | Valor total dos cr\u00C3\u00A9ditos nacionais lan\u00C3\u00A7ados na fatura. | [optional] 
**totalAjustes** | **Number** | Valor total dos ajustes lan\u00C3\u00A7ados na fatura. | [optional] 
**totalTarifas** | **Number** | Valor total das tarifas lan\u00C3\u00A7adas na fatura. | [optional] 
**totalMulta** | **Number** | Valor total da multa lan\u00C3\u00A7ada na fatura. | [optional] 
**saldoDisponivelSaque** | **Number** | Quando utilizado pelo emissor a modalidade limiteSaque, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional. | 
**totalJuros** | **Number** | Valor total dos juros de mora lan\u00C3\u00A7ados na fatura. | [optional] 
**saldoPontosFidelidade** | **Number** | Quando utilizado um programa de fidelidade pelo emissor, este campo apresentar\u00C3\u00A1 o saldo atual de pontos que o portador possui. | 
**taxaRotativo** | **Number** | Valor percentual da taxa de juros rotativos. | [optional] 
**saldoDisponivelCompraInternacional** | **Number** | Quando utilizado pelo emissor a modalidade limiteCompraInternacional, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Compra Internacional. | 
**taxaSaque** | **Number** | Valor percentual da taxa de saque. | [optional] 
**saldoDisponivelSaqueInternacional** | **Number** | Quando utilizado pelo emissor a modalidade limiteSaqueInternacional, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional. | 
**taxaMaximaProximoPeriodo** | **Number** | Valor m\u00C3\u00A1ximo percentual da taxa de encargos para o pr\u00C3\u00B3ximo per\u00C3\u00ADodo. | [optional] 
**totalServicos** | **Number** | Apresenta a soma de todos os seguros cobrados na fatura do cliente. | 

