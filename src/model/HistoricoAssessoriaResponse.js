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
    root.Pier.HistoricoAssessoriaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoAssessoriaResponse model module.
   * @module model/HistoricoAssessoriaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>HistoricoAssessoriaResponse</code>.
   * {{{historico_assessoria_response_description}}}
   * @alias module:model/HistoricoAssessoriaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>HistoricoAssessoriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoAssessoriaResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoAssessoriaResponse} The populated <code>HistoricoAssessoriaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHoraHistorico')) {
        obj['dataHoraHistorico'] = ApiClient.convertToType(data['dataHoraHistorico'], 'String');
      }
      if (data.hasOwnProperty('tipoHistorico')) {
        obj['tipoHistorico'] = ApiClient.convertToType(data['tipoHistorico'], 'String');
      }
      if (data.hasOwnProperty('nomeAssessoria')) {
        obj['nomeAssessoria'] = ApiClient.convertToType(data['nomeAssessoria'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{historico_assessoria_response_data_hora_historico_value}}}
   * @member {String} dataHoraHistorico
   */
  exports.prototype['dataHoraHistorico'] = undefined;

  /**
   * {{{historico_assessoria_response_tipo_historico_value}}}
   * @member {String} tipoHistorico
   */
  exports.prototype['tipoHistorico'] = undefined;

  /**
   * {{{historico_assessoria_response_nome_assessoria_value}}}
   * @member {String} nomeAssessoria
   */
  exports.prototype['nomeAssessoria'] = undefined;




  return exports;
}));
