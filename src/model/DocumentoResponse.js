(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DocumentoDetalheResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentoDetalheResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentoResponse = factory(root.Pier.ApiClient, root.Pier.DocumentoDetalheResponse);
  }
}(this, function(ApiClient, DocumentoDetalheResponse) {
  'use strict';

  /**
   * The DocumentoResponse model module.
   * @module model/DocumentoResponse
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>DocumentoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta para o recurso de Documento
   * @alias module:model/DocumentoResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>DocumentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoResponse} The populated <code>DocumentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idDocumentoTipo')) {
        obj['idDocumentoTipo'] = ApiClient.convertToType(data['idDocumentoTipo'], 'Integer');
      }
      if (data.hasOwnProperty('idDocumentoTemplate')) {
        obj['idDocumentoTemplate'] = ApiClient.convertToType(data['idDocumentoTemplate'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('documento')) {
        obj['documento'] = ApiClient.convertToType(data['documento'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
      if (data.hasOwnProperty('documentoDetalhes')) {
        obj['documentoDetalhes'] = ApiClient.convertToType(data['documentoDetalhes'], [DocumentoDetalheResponse]);
      }
    }
    return obj;
  }


  /**
   * ID do Documento.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * ID do Tipo de Documento associado.
   * @member {Integer} idDocumentoTipo
   */
  exports.prototype['idDocumentoTipo'] = undefined;

  /**
   * ID do Template de Documento associado.
   * @member {Integer} idDocumentoTemplate
   */
  exports.prototype['idDocumentoTemplate'] = undefined;

  /**
   * Nome do Documento.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Nome do Documento.
   * @member {String} documento
   */
  exports.prototype['documento'] = undefined;

  /**
   * Extens\u00C3\u00A3o do Documento.
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * Detalhamento do documento.
   * @member {Array.<module:model/DocumentoDetalheResponse>} documentoDetalhes
   */
  exports.prototype['documentoDetalhes'] = undefined;




  return exports;
}));