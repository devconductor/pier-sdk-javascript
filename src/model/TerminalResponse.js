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
    root.Pier.TerminalResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TerminalResponse model module.
   * @module model/TerminalResponse
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>TerminalResponse</code>.
   * ObjetoTerminal
   * @alias module:model/TerminalResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>TerminalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TerminalResponse} obj Optional instance to populate.
   * @return {module:model/TerminalResponse} The populated <code>TerminalResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('terminal')) {
        obj['terminal'] = ApiClient.convertToType(data['terminal'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('flagConsultaExtrato')) {
        obj['flagConsultaExtrato'] = ApiClient.convertToType(data['flagConsultaExtrato'], 'Boolean');
      }
      if (data.hasOwnProperty('flagTerminalVirtual')) {
        obj['flagTerminalVirtual'] = ApiClient.convertToType(data['flagTerminalVirtual'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * N\u00C3\u00BAmero \u00C3\u00BAnico do terminal.
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * Flag indicando se o terminal \u00C3\u00A9 f\u00C3\u00ADsico ou virtual, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
   * @member {Boolean} flagConsultaExtrato
   */
  exports.prototype['flagConsultaExtrato'] = undefined;

  /**
   * Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
   * @member {Boolean} flagTerminalVirtual
   */
  exports.prototype['flagTerminalVirtual'] = undefined;




  return exports;
}));
