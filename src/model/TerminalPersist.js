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
    root.Pier.TerminalPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TerminalPersist model module.
   * @module model/TerminalPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TerminalPersist</code>.
   * {{{terminal_persist_description}}}
   * @alias module:model/TerminalPersist
   * @class
   * @param idEstabelecimento
   * @param flagConsultaExtrato
   * @param flagTerminalVirtual
   */
  var exports = function(idEstabelecimento, flagConsultaExtrato, flagTerminalVirtual) {

    this['idEstabelecimento'] = idEstabelecimento;
    this['flagConsultaExtrato'] = flagConsultaExtrato;
    this['flagTerminalVirtual'] = flagTerminalVirtual;
  };

  /**
   * Constructs a <code>TerminalPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TerminalPersist} obj Optional instance to populate.
   * @return {module:model/TerminalPersist} The populated <code>TerminalPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{terminal_persist_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{terminal_persist_flag_consulta_extrato_value}}}
   * @member {Boolean} flagConsultaExtrato
   */
  exports.prototype['flagConsultaExtrato'] = undefined;

  /**
   * {{{terminal_persist_flag_terminal_virtual_value}}}
   * @member {Boolean} flagTerminalVirtual
   */
  exports.prototype['flagTerminalVirtual'] = undefined;




  return exports;
}));
