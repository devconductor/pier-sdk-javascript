(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransacaoOnUsPorIdCartaoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoOnUsPorIdCartaoRequest model module.
   * @module model/TransacaoOnUsPorIdCartaoRequest
   * @version 2.39.3
   */

  /**
   * Constructs a new <code>TransacaoOnUsPorIdCartaoRequest</code>.
   * Objeto de Requisi\u00C3\u00A7\u00C3\u00A3o de Transa\u00C3\u00A7\u00C3\u00A3o On Us por idCartao
   * @alias module:model/TransacaoOnUsPorIdCartaoRequest
   * @class
   * @param nsuOrigem
   * @param codigoProcessamento
   * @param valorTransacao
   * @param numeroEstabelecimento
   * @param dataHoraTerminal
   * @param terminalRequisitante
   * @param numeroParcelas
   */
  var exports = function(nsuOrigem, codigoProcessamento, valorTransacao, numeroEstabelecimento, dataHoraTerminal, terminalRequisitante, numeroParcelas) {

    this['nsuOrigem'] = nsuOrigem;
    this['codigoProcessamento'] = codigoProcessamento;
    this['valorTransacao'] = valorTransacao;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
    this['dataHoraTerminal'] = dataHoraTerminal;
    this['terminalRequisitante'] = terminalRequisitante;
    this['numeroParcelas'] = numeroParcelas;
  };

  /**
   * Constructs a <code>TransacaoOnUsPorIdCartaoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoOnUsPorIdCartaoRequest} obj Optional instance to populate.
   * @return {module:model/TransacaoOnUsPorIdCartaoRequest} The populated <code>TransacaoOnUsPorIdCartaoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTerminal')) {
        obj['dataHoraTerminal'] = ApiClient.convertToType(data['dataHoraTerminal'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema que a originou.
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * C\u00C3\u00B3digo de Processamento que identifica o Tipo da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o com duas casas decimais para os centavos.
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * N\u00C3\u00BAmero do Estabelecimento (N\u00C3\u00BAmero+DV).
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * Apresenta a data e hora local da consulta yyyy-MM-dd'T'HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * Apresenta a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * N\u00C3\u00BAmero de Parcelas.
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;




  return exports;
}));
