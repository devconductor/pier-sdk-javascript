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
    root.Pier.VinculoOperacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VinculoOperacaoResponse model module.
   * @module model/VinculoOperacaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>VinculoOperacaoResponse</code>.
   * {{{vinculo_operacao_response_description}}}
   * @alias module:model/VinculoOperacaoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>VinculoOperacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VinculoOperacaoResponse} obj Optional instance to populate.
   * @return {module:model/VinculoOperacaoResponse} The populated <code>VinculoOperacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('codigoMCC')) {
        obj['codigoMCC'] = ApiClient.convertToType(data['codigoMCC'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{vinculo_operacao_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{vinculo_operacao_response_id_operacao_value}}}
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * {{{vinculo_operacao_response_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{vinculo_operacao_response_codigo_m_c_c_value}}}
   * @member {Integer} codigoMCC
   */
  exports.prototype['codigoMCC'] = undefined;




  return exports;
}));
