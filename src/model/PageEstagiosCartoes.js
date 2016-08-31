(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PageImplOfEstagioCartao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PageImplOfEstagioCartao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PageEstagiosCartoes = factory(root.Pier.ApiClient, root.Pier.PageImplOfEstagioCartao);
  }
}(this, function(ApiClient, PageImplOfEstagioCartao) {
  'use strict';

  /**
   * The PageEstagiosCartoes model module.
   * @module model/PageEstagiosCartoes
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>PageEstagiosCartoes</code>.
   * Page de Est\u00C3\u00A1gios Cart\u00C3\u00B5es
   * @alias module:model/PageEstagiosCartoes
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PageEstagiosCartoes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageEstagiosCartoes} obj Optional instance to populate.
   * @return {module:model/PageEstagiosCartoes} The populated <code>PageEstagiosCartoes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('estagioCartoes')) {
        obj['estagioCartoes'] = PageImplOfEstagioCartao.constructFromObject(data['estagioCartoes']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PageImplOfEstagioCartao} estagioCartoes
   */
  exports.prototype['estagioCartoes'] = undefined;




  return exports;
}));