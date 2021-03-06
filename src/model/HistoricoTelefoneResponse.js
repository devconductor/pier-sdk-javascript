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
    root.Pier.HistoricoTelefoneResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoTelefoneResponse model module.
   * @module model/HistoricoTelefoneResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>HistoricoTelefoneResponse</code>.
   * {{{historico_telefone_response_description}}}
   * @alias module:model/HistoricoTelefoneResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>HistoricoTelefoneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoTelefoneResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoTelefoneResponse} The populated <code>HistoricoTelefoneResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('idTipoTelefone')) {
        obj['idTipoTelefone'] = ApiClient.convertToType(data['idTipoTelefone'], 'Integer');
      }
      if (data.hasOwnProperty('tipoTelefone')) {
        obj['tipoTelefone'] = ApiClient.convertToType(data['tipoTelefone'], 'String');
      }
      if (data.hasOwnProperty('dataModificacao')) {
        obj['dataModificacao'] = ApiClient.convertToType(data['dataModificacao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{historico_telefone_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{historico_telefone_response_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{historico_telefone_response_id_tipo_telefone_value}}}
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * {{{historico_telefone_response_tipo_telefone_value}}}
   * @member {String} tipoTelefone
   */
  exports.prototype['tipoTelefone'] = undefined;

  /**
   * {{{historico_telefone_response_data_modificacao_value}}}
   * @member {String} dataModificacao
   */
  exports.prototype['dataModificacao'] = undefined;




  return exports;
}));
