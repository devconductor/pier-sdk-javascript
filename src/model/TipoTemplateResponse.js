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
    root.Pier.TipoTemplateResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoTemplateResponse model module.
   * @module model/TipoTemplateResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoTemplateResponse</code>.
   * {{{tipo_template_response_description}}}
   * @alias module:model/TipoTemplateResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TipoTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoTemplateResponse} obj Optional instance to populate.
   * @return {module:model/TipoTemplateResponse} The populated <code>TipoTemplateResponse</code> instance.
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
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('sigla')) {
        obj['sigla'] = ApiClient.convertToType(data['sigla'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{tipo_template_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_template_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{tipo_template_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_template_response_sigla_value}}}
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;




  return exports;
}));
