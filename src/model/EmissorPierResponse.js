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
    root.Pier.EmissorPierResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmissorPierResponse model module.
   * @module model/EmissorPierResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>EmissorPierResponse</code>.
   * {{{emissor_response_description}}}
   * @alias module:model/EmissorPierResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>EmissorPierResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmissorPierResponse} obj Optional instance to populate.
   * @return {module:model/EmissorPierResponse} The populated <code>EmissorPierResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('tema')) {
        obj['tema'] = ApiClient.convertToType(data['tema'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{emissor_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{emissor_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{emissor_response_tema_value}}}
   * @member {String} tema
   */
  exports.prototype['tema'] = undefined;




  return exports;
}));
