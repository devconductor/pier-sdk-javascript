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
    root.Pier.PermissaoUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PermissaoUpdate model module.
   * @module model/PermissaoUpdate
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PermissaoUpdate</code>.
   * {{{permissao_update_object_description}}}
   * @alias module:model/PermissaoUpdate
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PermissaoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissaoUpdate} obj Optional instance to populate.
   * @return {module:model/PermissaoUpdate} The populated <code>PermissaoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{permissao_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
