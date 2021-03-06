(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LimiteDisponibilidadeResponse', '../model/SensibilizarSaldoGlobalUpdateValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LimiteDisponibilidadeResponse'), require('../model/SensibilizarSaldoGlobalUpdateValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaglimitedisponibilidadeApi = factory(root.Pier.ApiClient, root.Pier.LimiteDisponibilidadeResponse, root.Pier.SensibilizarSaldoGlobalUpdateValue);
  }
}(this, function(ApiClient, LimiteDisponibilidadeResponse, SensibilizarSaldoGlobalUpdateValue) {
  'use strict';

  /**
   * globaltaglimitedisponibilidade service.
   * @module api/GlobaltaglimitedisponibilidadeApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltaglimitedisponibilidadeApi. 
   * @alias module:api/GlobaltaglimitedisponibilidadeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT9 operation.
     * @callback module:api/GlobaltaglimitedisponibilidadeApi~alterarUsingPUT9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{limite_disponibilidade_resource_alterar}}}
     * {{{limite_disponibilidade_resource_alterar_notes}}}
     * @param {Integer} idConta {{{limite_disponibilidade_update_id_conta_value}}}
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limiteGlobal {{{limite_disponibilidade_persist_limite_global_value}}}
     * @param {Number} opts.limiteCompra {{{limite_disponibilidade_persist_limite_compra_value}}}
     * @param {Number} opts.limiteParcelado {{{limite_disponibilidade_persist_limite_parcelado_value}}}
     * @param {Number} opts.limiteParcelas {{{limite_disponibilidade_persist_limite_parcelas_value}}}
     * @param {Number} opts.limiteSaqueGlobal {{{limite_disponibilidade_persist_limite_saque_global_value}}}
     * @param {Number} opts.limiteSaquePeriodo {{{limite_disponibilidade_persist_limite_saque_periodo_value}}}
     * @param {Number} opts.limiteConsignado {{{limite_disponibilidade_persist_limite_consignado_value}}}
     * @param {Number} opts.limiteInternacionalCompra {{{limite_disponibilidade_persist_limite_internacional_compra_value}}}
     * @param {Number} opts.limiteInternacionalParcelado {{{limite_disponibilidade_persist_limite_internacional_parcelado_value}}}
     * @param {Number} opts.limiteInternacionalParcelas {{{limite_disponibilidade_persist_limite_internacional_parcelas_value}}}
     * @param {Number} opts.limiteInternacionalSaqueGlobal {{{limite_disponibilidade_persist_limite_internacional_saque_global_value}}}
     * @param {Number} opts.limiteInternacionalSaquePeriodo {{{limite_disponibilidade_persist_limite_internacional_saque_periodo_value}}}
     * @param {Number} opts.limiteMaximo {{{limite_disponibilidade_persist_limite_maximo_value}}}
     * @param {module:api/GlobaltaglimitedisponibilidadeApi~alterarUsingPUT9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.alterarUsingPUT9 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling alterarUsingPUT9";
      }


      var pathParams = {
      };
      var queryParams = {
        'limiteGlobal': opts['limiteGlobal'],
        'limiteCompra': opts['limiteCompra'],
        'limiteParcelado': opts['limiteParcelado'],
        'limiteParcelas': opts['limiteParcelas'],
        'limiteSaqueGlobal': opts['limiteSaqueGlobal'],
        'limiteSaquePeriodo': opts['limiteSaquePeriodo'],
        'limiteConsignado': opts['limiteConsignado'],
        'limiteInternacionalCompra': opts['limiteInternacionalCompra'],
        'limiteInternacionalParcelado': opts['limiteInternacionalParcelado'],
        'limiteInternacionalParcelas': opts['limiteInternacionalParcelas'],
        'limiteInternacionalSaqueGlobal': opts['limiteInternacionalSaqueGlobal'],
        'limiteInternacionalSaquePeriodo': opts['limiteInternacionalSaquePeriodo'],
        'limiteMaximo': opts['limiteMaximo'],
        'idConta': idConta
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/limites-disponibilidades', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET25 operation.
     * @callback module:api/GlobaltaglimitedisponibilidadeApi~consultarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{limite_disponibilidade_resource_consultar}}}
     * {{{limite_disponibilidade_resource_consultar_notes}}}
     * @param {Integer} idConta {{{limite_disponibilidade_resource_consultar_param_id_conta}}}
     * @param {module:api/GlobaltaglimitedisponibilidadeApi~consultarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarUsingGET25 = function(idConta, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarUsingGET25";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensibilizarSaldoDisponivelGlobalUsingPOST operation.
     * @callback module:api/GlobaltaglimitedisponibilidadeApi~sensibilizarSaldoDisponivelGlobalUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{limite_disponibilidade_resource_sensibilizar_credito_disponivel}}}
     * {{{limite_disponibilidade_resource_sensibilizar_credito_disponivel_notes}}}
     * @param {Integer} id {{{sensibilizar_saldo_global_param_id}}}
     * @param {module:model/SensibilizarSaldoGlobalUpdateValue} sensibilizarSaldoGlobal sensibilizarSaldoGlobal
     * @param {module:api/GlobaltaglimitedisponibilidadeApi~sensibilizarSaldoDisponivelGlobalUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.sensibilizarSaldoDisponivelGlobalUsingPOST = function(id, sensibilizarSaldoGlobal, callback) {
      var postBody = sensibilizarSaldoGlobal;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling sensibilizarSaldoDisponivelGlobalUsingPOST";
      }

      // verify the required parameter 'sensibilizarSaldoGlobal' is set
      if (sensibilizarSaldoGlobal == undefined || sensibilizarSaldoGlobal == null) {
        throw "Missing the required parameter 'sensibilizarSaldoGlobal' when calling sensibilizarSaldoDisponivelGlobalUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/limites-disponibilidades/sensibilizar-saldo-disponivel-global', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
