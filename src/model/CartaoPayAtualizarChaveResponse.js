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
    root.Pier.CartaoPayAtualizarChaveResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoPayAtualizarChaveResponse model module.
   * @module model/CartaoPayAtualizarChaveResponse
   * @version 2.46.3
   */

  /**
   * Constructs a new <code>CartaoPayAtualizarChaveResponse</code>.
   * Resposta da requisi\u00C3\u00A7\u00C3\u00A3o para atualizar a chave do criptograma
   * @alias module:model/CartaoPayAtualizarChaveResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>CartaoPayAtualizarChaveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoPayAtualizarChaveResponse} obj Optional instance to populate.
   * @return {module:model/CartaoPayAtualizarChaveResponse} The populated <code>CartaoPayAtualizarChaveResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidadeCartao')) {
        obj['dataValidadeCartao'] = ApiClient.convertToType(data['dataValidadeCartao'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('idEntidade')) {
        obj['idEntidade'] = ApiClient.convertToType(data['idEntidade'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEntidade')) {
        obj['nomeEntidade'] = ApiClient.convertToType(data['nomeEntidade'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('chaveCriptograma')) {
        obj['chaveCriptograma'] = ApiClient.convertToType(data['chaveCriptograma'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id do cart\u00C3\u00A3o
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o real criptografado
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Data de validade do cart\u00C3\u00A3o
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * Nome impresso no cart\u00C3\u00A3o criptografado
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Identificador do emissor do cart\u00C3\u00A3o
   * @member {Integer} idEntidade
   */
  exports.prototype['idEntidade'] = undefined;

  /**
   * Nome do emissor do cart\u00C3\u00A3o
   * @member {String} nomeEntidade
   */
  exports.prototype['nomeEntidade'] = undefined;

  /**
   * Status do cart\u00C3\u00A3o
   * @member {module:model/CartaoPayAtualizarChaveResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o criptograda
   * @member {String} chaveCriptograma
   */
  exports.prototype['chaveCriptograma'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: BLOQUEADO
     * @const
     */
    BLOQUEADO: "BLOQUEADO"
  };

  return exports;
}));