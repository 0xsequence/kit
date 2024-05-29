import { B as Buffer, c as commonjsGlobal, e as eventemitter3Exports, g as getDefaultExportFromCjs } from "./index-BOJCZO6i.js";
import { j as js, s as sha_jsExports, r as require$$0, a as require$$1, b as require$$2 } from "./hooks.module-C91hZtMW.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var dist = {};
var CoinbaseWalletSDK$1 = {};
var walletLogo$1 = {};
Object.defineProperty(walletLogo$1, "__esModule", { value: true });
walletLogo$1.walletLogo = void 0;
const walletLogo = (type2, width) => {
  let height;
  switch (type2) {
    case "standard":
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      height = width;
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
walletLogo$1.walletLogo = walletLogo;
var CoinbaseWalletProvider$1 = {};
var error = {};
var constants$2 = {};
Object.defineProperty(constants$2, "__esModule", { value: true });
constants$2.errorValues = constants$2.standardErrorCodes = void 0;
constants$2.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
constants$2.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  "4902": {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};
var errors = {};
var utils = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.serialize = exports.getErrorCode = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const constants_12 = constants$2;
  const FALLBACK_MESSAGE = "Unspecified error message.";
  exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (code && Number.isInteger(code)) {
      const codeString = code.toString();
      if (hasKey(constants_12.errorValues, codeString)) {
        return constants_12.errorValues[codeString].message;
      }
      if (isJsonRpcServerError(code)) {
        return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
      }
    }
    return fallbackMessage;
  }
  exports.getMessageFromCode = getMessageFromCode;
  function isValidCode(code) {
    if (!Number.isInteger(code)) {
      return false;
    }
    const codeString = code.toString();
    if (constants_12.errorValues[codeString]) {
      return true;
    }
    if (isJsonRpcServerError(code)) {
      return true;
    }
    return false;
  }
  exports.isValidCode = isValidCode;
  function getErrorCode(error2) {
    var _a;
    if (typeof error2 === "number") {
      return error2;
    } else if (isErrorWithCode(error2)) {
      return (_a = error2.code) !== null && _a !== void 0 ? _a : error2.errorCode;
    }
    return void 0;
  }
  exports.getErrorCode = getErrorCode;
  function isErrorWithCode(error2) {
    return typeof error2 === "object" && error2 !== null && (typeof error2.code === "number" || typeof error2.errorCode === "number");
  }
  function serialize2(error2, { shouldIncludeStack = false } = {}) {
    const serialized = {};
    if (error2 && typeof error2 === "object" && !Array.isArray(error2) && hasKey(error2, "code") && isValidCode(error2.code)) {
      const _error = error2;
      serialized.code = _error.code;
      if (_error.message && typeof _error.message === "string") {
        serialized.message = _error.message;
        if (hasKey(_error, "data")) {
          serialized.data = _error.data;
        }
      } else {
        serialized.message = getMessageFromCode(serialized.code);
        serialized.data = { originalError: assignOriginalError(error2) };
      }
    } else {
      serialized.code = constants_12.standardErrorCodes.rpc.internal;
      serialized.message = hasStringProperty(error2, "message") ? error2.message : FALLBACK_MESSAGE;
      serialized.data = { originalError: assignOriginalError(error2) };
    }
    if (shouldIncludeStack) {
      serialized.stack = hasStringProperty(error2, "stack") ? error2.stack : void 0;
    }
    return serialized;
  }
  exports.serialize = serialize2;
  function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32e3;
  }
  function assignOriginalError(error2) {
    if (error2 && typeof error2 === "object" && !Array.isArray(error2)) {
      return Object.assign({}, error2);
    }
    return error2;
  }
  function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function hasStringProperty(obj, prop) {
    return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
  }
})(utils);
Object.defineProperty(errors, "__esModule", { value: true });
errors.standardErrors = void 0;
const constants_1$6 = constants$2;
const utils_1$1 = utils;
errors.standardErrors = {
  rpc: {
    parse: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.parse, arg),
    invalidRequest: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.invalidRequest, arg),
    invalidParams: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.invalidParams, arg),
    methodNotFound: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.methodNotFound, arg),
    internal: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.internal, arg),
    server: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      }
      const { code } = opts;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    invalidInput: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.invalidInput, arg),
    resourceNotFound: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.resourceNotFound, arg),
    resourceUnavailable: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.resourceUnavailable, arg),
    transactionRejected: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.transactionRejected, arg),
    methodNotSupported: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.methodNotSupported, arg),
    limitExceeded: (arg) => getEthJsonRpcError(constants_1$6.standardErrorCodes.rpc.limitExceeded, arg)
  },
  provider: {
    userRejectedRequest: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.userRejectedRequest, arg);
    },
    unauthorized: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.unauthorized, arg);
    },
    unsupportedMethod: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.unsupportedMethod, arg);
    },
    disconnected: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.disconnected, arg);
    },
    chainDisconnected: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.chainDisconnected, arg);
    },
    unsupportedChain: (arg) => {
      return getEthProviderError(constants_1$6.standardErrorCodes.provider.unsupportedChain, arg);
    },
    custom: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      }
      const { code, message, data } = opts;
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string');
      }
      return new EthereumProviderError(code, message, data);
    }
  }
};
function getEthJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumRpcError(code, message || (0, utils_1$1.getMessageFromCode)(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumProviderError(code, message || (0, utils_1$1.getMessageFromCode)(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message || void 0, data];
    }
  }
  return [];
}
class EthereumRpcError extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    this.code = code;
    if (data !== void 0) {
      this.data = data;
    }
  }
}
class EthereumProviderError extends EthereumRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
}
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.standardErrors = exports.standardErrorCodes = void 0;
  var constants_12 = constants$2;
  Object.defineProperty(exports, "standardErrorCodes", { enumerable: true, get: function() {
    return constants_12.standardErrorCodes;
  } });
  var errors_1 = errors;
  Object.defineProperty(exports, "standardErrors", { enumerable: true, get: function() {
    return errors_1.standardErrors;
  } });
})(error);
var serialize = {};
var Web3Response = {};
Object.defineProperty(Web3Response, "__esModule", { value: true });
Web3Response.isErrorResponse = void 0;
function isErrorResponse(response) {
  return response.errorMessage !== void 0;
}
Web3Response.isErrorResponse = isErrorResponse;
var version = {};
Object.defineProperty(version, "__esModule", { value: true });
version.LIB_VERSION = void 0;
version.LIB_VERSION = "4.0.2";
Object.defineProperty(serialize, "__esModule", { value: true });
serialize.serializeError = void 0;
const Web3Response_1$2 = Web3Response;
const version_1$3 = version;
const constants_1$5 = constants$2;
const utils_1 = utils;
function serializeError(error2, requestOrMethod) {
  const serialized = (0, utils_1.serialize)(getErrorObject(error2), {
    shouldIncludeStack: true
  });
  const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  docUrl.searchParams.set("version", version_1$3.LIB_VERSION);
  docUrl.searchParams.set("code", serialized.code.toString());
  const method2 = getMethod(serialized.data, requestOrMethod);
  if (method2) {
    docUrl.searchParams.set("method", method2);
  }
  docUrl.searchParams.set("message", serialized.message);
  return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
serialize.serializeError = serializeError;
function getErrorObject(error2) {
  if (typeof error2 === "string") {
    return {
      message: error2,
      code: constants_1$5.standardErrorCodes.rpc.internal
    };
  } else if ((0, Web3Response_1$2.isErrorResponse)(error2)) {
    return Object.assign(Object.assign({}, error2), { message: error2.errorMessage, code: error2.errorCode, data: { method: error2.method } });
  }
  return error2;
}
function getMethod(serializedData, request) {
  const methodInData = serializedData === null || serializedData === void 0 ? void 0 : serializedData.method;
  if (methodInData) {
    return methodInData;
  }
  if (request === void 0) {
    return void 0;
  } else if (typeof request === "string") {
    return request;
  } else if (!Array.isArray(request)) {
    return request.method;
  } else if (request.length > 0) {
    return request[0].method;
  }
  return void 0;
}
var type = {};
Object.defineProperty(type, "__esModule", { value: true });
type.RegExpString = type.IntNumber = type.BigIntString = type.AddressString = type.HexString = type.OpaqueType = void 0;
function OpaqueType() {
  return (value) => value;
}
type.OpaqueType = OpaqueType;
type.HexString = OpaqueType();
type.AddressString = OpaqueType();
type.BigIntString = OpaqueType();
function IntNumber(num) {
  return Math.floor(num);
}
type.IntNumber = IntNumber;
type.RegExpString = OpaqueType();
var util$6 = {};
Object.defineProperty(util$6, "__esModule", { value: true });
util$6.areAddressArraysEqual = util$6.getFavicon = util$6.range = util$6.isBigNumber = util$6.ensureParsedJSONObject = util$6.ensureBigInt = util$6.ensureRegExpString = util$6.ensureIntNumber = util$6.ensureBuffer = util$6.ensureAddressString = util$6.ensureEvenLengthHexString = util$6.ensureHexString = util$6.isHexString = util$6.prepend0x = util$6.strip0x = util$6.has0xPrefix = util$6.hexStringFromIntNumber = util$6.intNumberFromHexString = util$6.bigIntStringFromBigInt = util$6.hexStringFromBuffer = util$6.hexStringToUint8Array = util$6.uint8ArrayToHex = util$6.randomBytesHex = void 0;
const error_1$8 = error;
const _1 = type;
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
util$6.randomBytesHex = randomBytesHex;
function uint8ArrayToHex(value) {
  return [...value].map((b) => b.toString(16).padStart(2, "0")).join("");
}
util$6.uint8ArrayToHex = uint8ArrayToHex;
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}
util$6.hexStringToUint8Array = hexStringToUint8Array;
function hexStringFromBuffer(buf, includePrefix = false) {
  const hex = buf.toString("hex");
  return (0, _1.HexString)(includePrefix ? `0x${hex}` : hex);
}
util$6.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBigInt(bi) {
  return (0, _1.BigIntString)(bi.toString(10));
}
util$6.bigIntStringFromBigInt = bigIntStringFromBigInt;
function intNumberFromHexString(hex) {
  return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(hex, true))));
}
util$6.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
  return (0, _1.HexString)(`0x${BigInt(num).toString(16)}`);
}
util$6.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
  return str.startsWith("0x") || str.startsWith("0X");
}
util$6.has0xPrefix = has0xPrefix;
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
util$6.strip0x = strip0x;
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return `0x${hex.slice(2)}`;
  }
  return `0x${hex}`;
}
util$6.prepend0x = prepend0x;
function isHexString$1(hex) {
  if (typeof hex !== "string") {
    return false;
  }
  const s = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s);
}
util$6.isHexString = isHexString$1;
function ensureHexString(hex, includePrefix = false) {
  if (typeof hex === "string") {
    const s = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s)) {
      return (0, _1.HexString)(includePrefix ? `0x${s}` : s);
    }
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
util$6.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
  let h = ensureHexString(hex, false);
  if (h.length % 2 === 1) {
    h = (0, _1.HexString)(`0${h}`);
  }
  return includePrefix ? (0, _1.HexString)(`0x${h}`) : h;
}
util$6.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
  if (typeof str === "string") {
    const s = strip0x(str).toLowerCase();
    if (isHexString$1(s) && s.length === 40) {
      return (0, _1.AddressString)(prepend0x(s));
    }
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
util$6.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === "string") {
    if (isHexString$1(str)) {
      const s = ensureEvenLengthHexString(str, false);
      return Buffer.from(s, "hex");
    }
    return Buffer.from(str, "utf8");
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
util$6.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return (0, _1.IntNumber)(num);
  }
  if (typeof num === "string") {
    if (INT_STRING_REGEX.test(num)) {
      return (0, _1.IntNumber)(Number(num));
    }
    if (isHexString$1(num)) {
      return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(num, true))));
    }
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
util$6.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
  if (regExp instanceof RegExp) {
    return (0, _1.RegExpString)(regExp.toString());
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
}
util$6.ensureRegExpString = ensureRegExpString;
function ensureBigInt(val) {
  if (val !== null && (typeof val === "bigint" || isBigNumber(val))) {
    return BigInt(val.toString(10));
  }
  if (typeof val === "number") {
    return BigInt(ensureIntNumber(val));
  }
  if (typeof val === "string") {
    if (INT_STRING_REGEX.test(val)) {
      return BigInt(val);
    }
    if (isHexString$1(val)) {
      return BigInt(ensureEvenLengthHexString(val, true));
    }
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
util$6.ensureBigInt = ensureBigInt;
function ensureParsedJSONObject(val) {
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  if (typeof val === "object") {
    return val;
  }
  throw error_1$8.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
util$6.ensureParsedJSONObject = ensureParsedJSONObject;
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== "function") {
    return false;
  }
  const { constructor } = val;
  return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
}
util$6.isBigNumber = isBigNumber;
function range(start, stop) {
  return Array.from({ length: stop - start }, (_, i) => start + i);
}
util$6.range = range;
function getFavicon() {
  const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
  const { protocol, host } = document.location;
  const href = el ? el.getAttribute("href") : null;
  if (!href || href.startsWith("javascript:") || href.startsWith("vbscript:")) {
    return null;
  }
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
    return href;
  }
  if (href.startsWith("//")) {
    return protocol + href;
  }
  return `${protocol}//${host}${href}`;
}
util$6.getFavicon = getFavicon;
function areAddressArraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index2) => value === arr2[index2]);
}
util$6.areAddressArraysEqual = areAddressArraysEqual;
var util$5 = {};
var SCWSigner$1 = {};
var SCWKeyManager$1 = {};
var cipher = {};
Object.defineProperty(cipher, "__esModule", { value: true });
cipher.decryptContent = cipher.encryptContent = cipher.importKeyFromHexString = cipher.exportKeyToHexString = cipher.decrypt = cipher.encrypt = cipher.deriveSharedSecret = cipher.generateKeyPair = void 0;
const util_1$b = util$6;
async function generateKeyPair() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, true, ["deriveKey"]);
}
cipher.generateKeyPair = generateKeyPair;
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: peerPublicKey
  }, ownPrivateKey, {
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
}
cipher.deriveSharedSecret = deriveSharedSecret;
async function encrypt(sharedSecret, plainText) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipherText = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, new TextEncoder().encode(plainText));
  return { iv, cipherText };
}
cipher.encrypt = encrypt;
async function decrypt(sharedSecret, { iv, cipherText }) {
  const plainText = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, sharedSecret, cipherText);
  return new TextDecoder().decode(plainText);
}
cipher.decrypt = decrypt;
function getFormat(keyType) {
  switch (keyType) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function exportKeyToHexString(type2, key) {
  const format = getFormat(type2);
  const exported = await crypto.subtle.exportKey(format, key);
  return (0, util_1$b.uint8ArrayToHex)(new Uint8Array(exported));
}
cipher.exportKeyToHexString = exportKeyToHexString;
async function importKeyFromHexString(type2, hexString) {
  const format = getFormat(type2);
  const arrayBuffer = (0, util_1$b.hexStringToUint8Array)(hexString).buffer;
  return await crypto.subtle.importKey(format, arrayBuffer, {
    name: "ECDH",
    namedCurve: "P-256"
  }, true, type2 === "private" ? ["deriveKey"] : []);
}
cipher.importKeyFromHexString = importKeyFromHexString;
async function encryptContent(content, sharedSecret) {
  const serialized = JSON.stringify(content, (_, value) => {
    if (!(value instanceof Error))
      return value;
    const error2 = value;
    return Object.assign(Object.assign({}, error2.code ? { code: error2.code } : {}), { message: error2.message });
  });
  return encrypt(sharedSecret, serialized);
}
cipher.encryptContent = encryptContent;
async function decryptContent(encryptedData, sharedSecret) {
  return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
cipher.decryptContent = decryptContent;
var ScopedLocalStorage$1 = {};
Object.defineProperty(ScopedLocalStorage$1, "__esModule", { value: true });
ScopedLocalStorage$1.ScopedLocalStorage = void 0;
class ScopedLocalStorage {
  constructor(scope, module) {
    this.scope = scope;
    this.module = module;
  }
  setItem(key, value) {
    localStorage.setItem(this.scopedKey(key), value);
  }
  getItem(key) {
    return localStorage.getItem(this.scopedKey(key));
  }
  removeItem(key) {
    localStorage.removeItem(this.scopedKey(key));
  }
  clear() {
    const prefix = this.scopedKey("");
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (typeof key === "string" && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }
  scopedKey(key) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${key}`;
  }
  static clearAll() {
    new ScopedLocalStorage("CBWSDK").clear();
    new ScopedLocalStorage("walletlink").clear();
  }
}
ScopedLocalStorage$1.ScopedLocalStorage = ScopedLocalStorage;
Object.defineProperty(SCWKeyManager$1, "__esModule", { value: true });
SCWKeyManager$1.SCWKeyManager = void 0;
const cipher_1$1 = cipher;
const ScopedLocalStorage_1$6 = ScopedLocalStorage$1;
const OWN_PRIVATE_KEY = {
  storageKey: "ownPrivateKey",
  keyType: "private"
};
const OWN_PUBLIC_KEY = {
  storageKey: "ownPublicKey",
  keyType: "public"
};
const PEER_PUBLIC_KEY = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
class SCWKeyManager {
  constructor() {
    this.storage = new ScopedLocalStorage_1$6.ScopedLocalStorage("CBWSDK", "SCWKeyManager");
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    await this.loadKeysIfNeeded();
    return this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    await this.loadKeysIfNeeded();
    return this.sharedSecret;
  }
  async setPeerPublicKey(key) {
    this.sharedSecret = null;
    this.peerPublicKey = key;
    await this.storeKey(PEER_PUBLIC_KEY, key);
    await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
    this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
    this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
    this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
  }
  async generateKeyPair() {
    const newKeyPair = await (0, cipher_1$1.generateKeyPair)();
    this.ownPrivateKey = newKeyPair.privateKey;
    this.ownPublicKey = newKeyPair.publicKey;
    await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
    await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null) {
      this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
    }
    if (this.ownPublicKey === null) {
      this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
    }
    if (this.ownPrivateKey === null || this.ownPublicKey === null) {
      await this.generateKeyPair();
    }
    if (this.peerPublicKey === null) {
      this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
    }
    if (this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await (0, cipher_1$1.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(item) {
    const key = this.storage.getItem(item.storageKey);
    if (!key)
      return null;
    return (0, cipher_1$1.importKeyFromHexString)(item.keyType, key);
  }
  async storeKey(item, key) {
    const hexString = await (0, cipher_1$1.exportKeyToHexString)(item.keyType, key);
    this.storage.setItem(item.storageKey, hexString);
  }
}
SCWKeyManager$1.SCWKeyManager = SCWKeyManager;
var SCWStateManager$1 = {};
Object.defineProperty(SCWStateManager$1, "__esModule", { value: true });
SCWStateManager$1.SCWStateManager = void 0;
const ScopedLocalStorage_1$5 = ScopedLocalStorage$1;
const ACCOUNTS_KEY = "accounts";
const ACTIVE_CHAIN_STORAGE_KEY = "activeChain";
const AVAILABLE_CHAINS_STORAGE_KEY = "availableChains";
const WALLET_CAPABILITIES_STORAGE_KEY = "walletCapabilities";
class SCWStateManager {
  get accounts() {
    return this._accounts;
  }
  get activeChain() {
    return this._activeChain;
  }
  get walletCapabilities() {
    return this._walletCapabilities;
  }
  constructor(params) {
    var _a, _b;
    this.storage = new ScopedLocalStorage_1$5.ScopedLocalStorage("CBWSDK", "SCWStateManager");
    this.updateListener = params.updateListener;
    this.availableChains = this.loadItemFromStorage(AVAILABLE_CHAINS_STORAGE_KEY);
    this._walletCapabilities = this.loadItemFromStorage(WALLET_CAPABILITIES_STORAGE_KEY);
    const accounts = this.loadItemFromStorage(ACCOUNTS_KEY);
    const chain = this.loadItemFromStorage(ACTIVE_CHAIN_STORAGE_KEY);
    if (accounts) {
      this.updateListener.onAccountsUpdate({
        accounts,
        source: "storage"
      });
    }
    if (chain) {
      this.updateListener.onChainUpdate({
        chain,
        source: "storage"
      });
    }
    this._accounts = accounts || [];
    this._activeChain = chain || { id: (_b = (_a = params.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1 };
  }
  updateAccounts(accounts) {
    this._accounts = accounts;
    this.storeItemToStorage(ACCOUNTS_KEY, accounts);
    this.updateListener.onAccountsUpdate({
      accounts,
      source: "wallet"
    });
  }
  switchChain(chainId) {
    var _a;
    const chain = (_a = this.availableChains) === null || _a === void 0 ? void 0 : _a.find((chain2) => chain2.id === chainId);
    if (!chain)
      return false;
    if (chain === this._activeChain)
      return true;
    this._activeChain = chain;
    this.storeItemToStorage(ACTIVE_CHAIN_STORAGE_KEY, chain);
    this.updateListener.onChainUpdate({
      chain,
      source: "wallet"
    });
    return true;
  }
  updateAvailableChains(rawChains) {
    if (!rawChains || Object.keys(rawChains).length === 0)
      return;
    const chains = Object.entries(rawChains).map(([id, rpcUrl]) => ({ id: Number(id), rpcUrl }));
    this.availableChains = chains;
    this.storeItemToStorage(AVAILABLE_CHAINS_STORAGE_KEY, chains);
    this.switchChain(this._activeChain.id);
  }
  updateWalletCapabilities(capabilities) {
    this._walletCapabilities = capabilities;
    this.storeItemToStorage(WALLET_CAPABILITIES_STORAGE_KEY, capabilities);
  }
  storeItemToStorage(key, item) {
    this.storage.setItem(key, JSON.stringify(item));
  }
  loadItemFromStorage(key) {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : void 0;
  }
  clear() {
    this.storage.clear();
  }
}
SCWStateManager$1.SCWStateManager = SCWStateManager;
Object.defineProperty(SCWSigner$1, "__esModule", { value: true });
SCWSigner$1.SCWSigner = void 0;
const SCWKeyManager_1 = SCWKeyManager$1;
const SCWStateManager_1 = SCWStateManager$1;
const error_1$7 = error;
const util_1$a = util$6;
const cipher_1 = cipher;
class SCWSigner {
  constructor(params) {
    this.metadata = params.metadata;
    this.communicator = params.communicator;
    this.keyManager = new SCWKeyManager_1.SCWKeyManager();
    this.stateManager = new SCWStateManager_1.SCWStateManager({
      appChainIds: this.metadata.appChainIds,
      updateListener: params.updateListener
    });
    this.handshake = this.handshake.bind(this);
    this.request = this.request.bind(this);
    this.createRequestMessage = this.createRequestMessage.bind(this);
    this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  async handshake() {
    const handshakeMessage = await this.createRequestMessage({
      handshake: {
        method: "eth_requestAccounts",
        params: this.metadata
      }
    });
    const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
    if ("failure" in response.content)
      throw response.content.failure;
    const peerPublicKey = await (0, cipher_1.importKeyFromHexString)("public", response.sender);
    await this.keyManager.setPeerPublicKey(peerPublicKey);
    const decrypted = await this.decryptResponseMessage(response);
    this.updateInternalState({ method: "eth_requestAccounts" }, decrypted);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    return this.stateManager.accounts;
  }
  async request(request) {
    const localResult = this.tryLocalHandling(request);
    if (localResult !== void 0) {
      if (localResult instanceof Error)
        throw localResult;
      return localResult;
    }
    await this.communicator.waitForPopupLoaded();
    const response = await this.sendEncryptedRequest(request);
    const decrypted = await this.decryptResponseMessage(response);
    this.updateInternalState(request, decrypted);
    const result = decrypted.result;
    if ("error" in result)
      throw result.error;
    return result.value;
  }
  async disconnect() {
    this.stateManager.clear();
    await this.keyManager.clear();
  }
  tryLocalHandling(request) {
    var _a;
    switch (request.method) {
      case "wallet_switchEthereumChain": {
        const params = request.params;
        if (!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
          throw error_1$7.standardErrors.rpc.invalidParams();
        }
        const chainId = (0, util_1$a.ensureIntNumber)(params[0].chainId);
        const switched = this.stateManager.switchChain(chainId);
        return switched ? null : void 0;
      }
      case "wallet_getCapabilities": {
        const walletCapabilities = this.stateManager.walletCapabilities;
        if (!walletCapabilities) {
          throw error_1$7.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
        }
        return walletCapabilities;
      }
      default:
        return void 0;
    }
  }
  async sendEncryptedRequest(request) {
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw error_1$7.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
    }
    const encrypted = await (0, cipher_1.encryptContent)({
      action: request,
      chainId: this.stateManager.activeChain.id
    }, sharedSecret);
    const message = await this.createRequestMessage({ encrypted });
    return this.communicator.postRequestAndWaitForResponse(message);
  }
  async createRequestMessage(content) {
    const publicKey = await (0, cipher_1.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      sender: publicKey,
      content,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(message) {
    const content = message.content;
    if ("failure" in content) {
      throw content.failure;
    }
    const sharedSecret = await this.keyManager.getSharedSecret();
    if (!sharedSecret) {
      throw error_1$7.standardErrors.provider.unauthorized("Invalid session");
    }
    return (0, cipher_1.decryptContent)(content.encrypted, sharedSecret);
  }
  updateInternalState(request, response) {
    var _a, _b;
    const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
    if (availableChains) {
      this.stateManager.updateAvailableChains(availableChains);
    }
    const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
    if (walletCapabilities) {
      this.stateManager.updateWalletCapabilities(walletCapabilities);
    }
    const result = response.result;
    if ("error" in result)
      return;
    switch (request.method) {
      case "eth_requestAccounts": {
        const accounts = result.value;
        this.stateManager.updateAccounts(accounts);
        break;
      }
      case "wallet_switchEthereumChain": {
        if (result.value !== null)
          return;
        const params = request.params;
        const chainId = (0, util_1$a.ensureIntNumber)(params[0].chainId);
        this.stateManager.switchChain(chainId);
        break;
      }
    }
  }
}
SCWSigner$1.SCWSigner = SCWSigner;
var WalletLinkSigner$1 = {};
const createKeccakHash = js;
function zeros(bytes) {
  return Buffer.allocUnsafe(bytes).fill(0);
}
function bitLengthFromBigInt(num) {
  return num.toString(2).length;
}
function bufferBEFromBigInt(num, length) {
  let hex = num.toString(16);
  if (hex.length % 2 !== 0)
    hex = "0" + hex;
  const byteArray = hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
  while (byteArray.length < length) {
    byteArray.unshift(0);
  }
  return Buffer.from(byteArray);
}
function twosFromBigInt(value, width) {
  const isNegative = value < 0n;
  let result;
  if (isNegative) {
    const mask = (1n << BigInt(width)) - 1n;
    result = (~value & mask) + 1n;
  } else {
    result = value;
  }
  result &= (1n << BigInt(width)) - 1n;
  return result;
}
function setLength(msg, length, right) {
  const buf = zeros(length);
  msg = toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf;
    }
    return msg.slice(0, length);
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf;
    }
    return msg.slice(-length);
  }
}
function setLengthRight(msg, length) {
  return setLength(msg, length, true);
}
function toBuffer(v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v);
    } else if (typeof v === "string") {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), "hex");
      } else {
        v = Buffer.from(v);
      }
    } else if (typeof v === "number") {
      v = intToBuffer(v);
    } else if (v === null || v === void 0) {
      v = Buffer.allocUnsafe(0);
    } else if (typeof v === "bigint") {
      v = bufferBEFromBigInt(v);
    } else if (v.toArray) {
      v = Buffer.from(v.toArray());
    } else {
      throw new Error("invalid type");
    }
  }
  return v;
}
function bufferToHex(buf) {
  buf = toBuffer(buf);
  return "0x" + buf.toString("hex");
}
function keccak(a, bits) {
  a = toBuffer(a);
  if (!bits)
    bits = 256;
  return createKeccakHash("keccak" + bits).update(a).digest();
}
function padToEven(str) {
  return str.length % 2 ? "0" + str : str;
}
function isHexString(str) {
  return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
}
function stripHexPrefix(str) {
  if (typeof str === "string" && str.startsWith("0x")) {
    return str.slice(2);
  }
  return str;
}
var util$4 = {
  zeros,
  setLength,
  setLengthRight,
  isHexString,
  stripHexPrefix,
  toBuffer,
  bufferToHex,
  keccak,
  bitLengthFromBigInt,
  bufferBEFromBigInt,
  twosFromBigInt
};
const util$3 = util$4;
function elementaryName(name) {
  if (name.startsWith("int[")) {
    return "int256" + name.slice(3);
  } else if (name === "int") {
    return "int256";
  } else if (name.startsWith("uint[")) {
    return "uint256" + name.slice(4);
  } else if (name === "uint") {
    return "uint256";
  } else if (name.startsWith("fixed[")) {
    return "fixed128x128" + name.slice(5);
  } else if (name === "fixed") {
    return "fixed128x128";
  } else if (name.startsWith("ufixed[")) {
    return "ufixed128x128" + name.slice(6);
  } else if (name === "ufixed") {
    return "ufixed128x128";
  }
  return name;
}
function parseTypeN(type2) {
  return parseInt(/^\D+(\d+)$/.exec(type2)[1], 10);
}
function parseTypeNxM(type2) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type2);
  return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
}
function parseTypeArray(type2) {
  var tmp = type2.match(/(.*)\[(.*?)\]$/);
  if (tmp) {
    return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
  }
  return null;
}
function parseNumber(arg) {
  var type2 = typeof arg;
  if (type2 === "string" || type2 === "number") {
    return BigInt(arg);
  } else if (type2 === "bigint") {
    return arg;
  } else {
    throw new Error("Argument is not a number");
  }
}
function encodeSingle(type2, arg) {
  var size, num, ret, i;
  if (type2 === "address") {
    return encodeSingle("uint160", parseNumber(arg));
  } else if (type2 === "bool") {
    return encodeSingle("uint8", arg ? 1 : 0);
  } else if (type2 === "string") {
    return encodeSingle("bytes", new Buffer(arg, "utf8"));
  } else if (isArray(type2)) {
    if (typeof arg.length === "undefined") {
      throw new Error("Not an array?");
    }
    size = parseTypeArray(type2);
    if (size !== "dynamic" && size !== 0 && arg.length > size) {
      throw new Error("Elements exceed array size: " + size);
    }
    ret = [];
    type2 = type2.slice(0, type2.lastIndexOf("["));
    if (typeof arg === "string") {
      arg = JSON.parse(arg);
    }
    for (i in arg) {
      ret.push(encodeSingle(type2, arg[i]));
    }
    if (size === "dynamic") {
      var length = encodeSingle("uint256", arg.length);
      ret.unshift(length);
    }
    return Buffer.concat(ret);
  } else if (type2 === "bytes") {
    arg = new Buffer(arg);
    ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
    if (arg.length % 32 !== 0) {
      ret = Buffer.concat([ret, util$3.zeros(32 - arg.length % 32)]);
    }
    return ret;
  } else if (type2.startsWith("bytes")) {
    size = parseTypeN(type2);
    if (size < 1 || size > 32) {
      throw new Error("Invalid bytes<N> width: " + size);
    }
    return util$3.setLengthRight(arg, 32);
  } else if (type2.startsWith("uint")) {
    size = parseTypeN(type2);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid uint<N> width: " + size);
    }
    num = parseNumber(arg);
    const bitLength = util$3.bitLengthFromBigInt(num);
    if (bitLength > size) {
      throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
    }
    if (num < 0) {
      throw new Error("Supplied uint is negative");
    }
    return util$3.bufferBEFromBigInt(num, 32);
  } else if (type2.startsWith("int")) {
    size = parseTypeN(type2);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid int<N> width: " + size);
    }
    num = parseNumber(arg);
    const bitLength = util$3.bitLengthFromBigInt(num);
    if (bitLength > size) {
      throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
    }
    const twos = util$3.twosFromBigInt(num, 256);
    return util$3.bufferBEFromBigInt(twos, 32);
  } else if (type2.startsWith("ufixed")) {
    size = parseTypeNxM(type2);
    num = parseNumber(arg);
    if (num < 0) {
      throw new Error("Supplied ufixed is negative");
    }
    return encodeSingle("uint256", num * BigInt(2) ** BigInt(size[1]));
  } else if (type2.startsWith("fixed")) {
    size = parseTypeNxM(type2);
    return encodeSingle("int256", parseNumber(arg) * BigInt(2) ** BigInt(size[1]));
  }
  throw new Error("Unsupported or invalid type: " + type2);
}
function isDynamic(type2) {
  return type2 === "string" || type2 === "bytes" || parseTypeArray(type2) === "dynamic";
}
function isArray(type2) {
  return type2.lastIndexOf("]") === type2.length - 1;
}
function rawEncode(types, values) {
  var output = [];
  var data = [];
  var headLength = 32 * types.length;
  for (var i in types) {
    var type2 = elementaryName(types[i]);
    var value = values[i];
    var cur = encodeSingle(type2, value);
    if (isDynamic(type2)) {
      output.push(encodeSingle("uint256", headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output.push(cur);
    }
  }
  return Buffer.concat(output.concat(data));
}
function solidityPack(types, values) {
  if (types.length !== values.length) {
    throw new Error("Number of types are not matching the values");
  }
  var size, num;
  var ret = [];
  for (var i = 0; i < types.length; i++) {
    var type2 = elementaryName(types[i]);
    var value = values[i];
    if (type2 === "bytes") {
      ret.push(value);
    } else if (type2 === "string") {
      ret.push(new Buffer(value, "utf8"));
    } else if (type2 === "bool") {
      ret.push(new Buffer(value ? "01" : "00", "hex"));
    } else if (type2 === "address") {
      ret.push(util$3.setLength(value, 20));
    } else if (type2.startsWith("bytes")) {
      size = parseTypeN(type2);
      if (size < 1 || size > 32) {
        throw new Error("Invalid bytes<N> width: " + size);
      }
      ret.push(util$3.setLengthRight(value, size));
    } else if (type2.startsWith("uint")) {
      size = parseTypeN(type2);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error("Invalid uint<N> width: " + size);
      }
      num = parseNumber(value);
      const bitLength = util$3.bitLengthFromBigInt(num);
      if (bitLength > size) {
        throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
      }
      ret.push(util$3.bufferBEFromBigInt(num, size / 8));
    } else if (type2.startsWith("int")) {
      size = parseTypeN(type2);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error("Invalid int<N> width: " + size);
      }
      num = parseNumber(value);
      const bitLength = util$3.bitLengthFromBigInt(num);
      if (bitLength > size) {
        throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
      }
      const twos = util$3.twosFromBigInt(num, size);
      ret.push(util$3.bufferBEFromBigInt(twos, size / 8));
    } else {
      throw new Error("Unsupported or invalid type: " + type2);
    }
  }
  return Buffer.concat(ret);
}
function soliditySHA3(types, values) {
  return util$3.keccak(solidityPack(types, values));
}
var abi$1 = {
  rawEncode,
  solidityPack,
  soliditySHA3
};
const util$2 = util$4;
const abi = abi$1;
const TYPED_MESSAGE_SCHEMA = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
};
const TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(primaryType, data, types, useV4 = true) {
    const encodedTypes = ["bytes32"];
    const encodedValues = [this.hashType(primaryType, types)];
    if (useV4) {
      const encodeField = (name, type2, value) => {
        if (types[type2] !== void 0) {
          return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util$2.keccak(this.encodeData(type2, value, types, useV4))];
        }
        if (value === void 0)
          throw new Error(`missing value for field ${name} of type ${type2}`);
        if (type2 === "bytes") {
          return ["bytes32", util$2.keccak(value)];
        }
        if (type2 === "string") {
          if (typeof value === "string") {
            value = Buffer.from(value, "utf8");
          }
          return ["bytes32", util$2.keccak(value)];
        }
        if (type2.lastIndexOf("]") === type2.length - 1) {
          const parsedType = type2.slice(0, type2.lastIndexOf("["));
          const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
          return ["bytes32", util$2.keccak(abi.rawEncode(
            typeValuePairs.map(([type3]) => type3),
            typeValuePairs.map(([, value2]) => value2)
          ))];
        }
        return [type2, value];
      };
      for (const field of types[primaryType]) {
        const [type2, value] = encodeField(field.name, field.type, data[field.name]);
        encodedTypes.push(type2);
        encodedValues.push(value);
      }
    } else {
      for (const field of types[primaryType]) {
        let value = data[field.name];
        if (value !== void 0) {
          if (field.type === "bytes") {
            encodedTypes.push("bytes32");
            value = util$2.keccak(value);
            encodedValues.push(value);
          } else if (field.type === "string") {
            encodedTypes.push("bytes32");
            if (typeof value === "string") {
              value = Buffer.from(value, "utf8");
            }
            value = util$2.keccak(value);
            encodedValues.push(value);
          } else if (types[field.type] !== void 0) {
            encodedTypes.push("bytes32");
            value = util$2.keccak(this.encodeData(field.type, value, types, useV4));
            encodedValues.push(value);
          } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
            throw new Error("Arrays currently unimplemented in encodeData");
          } else {
            encodedTypes.push(field.type);
            encodedValues.push(value);
          }
        }
      }
    }
    return abi.rawEncode(encodedTypes, encodedValues);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(primaryType, types) {
    let result = "";
    let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
    deps = [primaryType].concat(deps.sort());
    for (const type2 of deps) {
      const children = types[type2];
      if (!children) {
        throw new Error("No type definition specified: " + type2);
      }
      result += type2 + "(" + types[type2].map(({ name, type: type3 }) => type3 + " " + name).join(",") + ")";
    }
    return result;
  },
  /**
   * Finds all types within a type definition object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(primaryType, types, results = []) {
    primaryType = primaryType.match(/^\w*/)[0];
    if (results.includes(primaryType) || types[primaryType] === void 0) {
      return results;
    }
    results.push(primaryType);
    for (const field of types[primaryType]) {
      for (const dep of this.findTypeDependencies(field.type, types, results)) {
        !results.includes(dep) && results.push(dep);
      }
    }
    return results;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(primaryType, data, types, useV4 = true) {
    return util$2.keccak(this.encodeData(primaryType, data, types, useV4));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(primaryType, types) {
    return util$2.keccak(this.encodeType(primaryType, types));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(data) {
    const sanitizedData = {};
    for (const key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key]);
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
    }
    return sanitizedData;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(typedData, useV4 = true) {
    const sanitizedData = this.sanitizeData(typedData);
    const parts = [Buffer.from("1901", "hex")];
    parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
    if (sanitizedData.primaryType !== "EIP712Domain") {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
    }
    return util$2.keccak(Buffer.concat(parts));
  }
};
var ethEip712Util = {
  TYPED_MESSAGE_SCHEMA,
  TypedDataUtils,
  hashForSignTypedDataLegacy: function(msgParams) {
    return typedSignatureHashLegacy(msgParams.data);
  },
  hashForSignTypedData_v3: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data, false);
  },
  hashForSignTypedData_v4: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data);
  }
};
function typedSignatureHashLegacy(typedData) {
  const error2 = new Error("Expect argument to be non-empty array");
  if (typeof typedData !== "object" || !typedData.length)
    throw error2;
  const data = typedData.map(function(e) {
    return e.type === "bytes" ? util$2.toBuffer(e.value) : e.value;
  });
  const types = typedData.map(function(e) {
    return e.type;
  });
  const schema = typedData.map(function(e) {
    if (!e.name)
      throw error2;
    return e.type + " " + e.name;
  });
  return abi.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
      abi.soliditySHA3(types, data)
    ]
  );
}
var constants$1 = {};
Object.defineProperty(constants$1, "__esModule", { value: true });
constants$1.APP_VERSION_KEY = constants$1.LOCAL_STORAGE_ADDRESSES_KEY = constants$1.WALLET_USER_NAME_KEY = void 0;
constants$1.WALLET_USER_NAME_KEY = "walletUsername";
constants$1.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
constants$1.APP_VERSION_KEY = "AppVersion";
var RelayEventManager$1 = {};
Object.defineProperty(RelayEventManager$1, "__esModule", { value: true });
RelayEventManager$1.RelayEventManager = void 0;
const util_1$9 = util$6;
class RelayEventManager {
  constructor() {
    this._nextRequestId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const id = this._nextRequestId;
    const idStr = (0, util_1$9.prepend0x)(id.toString(16));
    const callback = this.callbacks.get(idStr);
    if (callback) {
      this.callbacks.delete(idStr);
    }
    return id;
  }
}
RelayEventManager$1.RelayEventManager = RelayEventManager;
var WalletLinkRelay$1 = {};
var WalletLinkConnection$1 = {};
var WalletLinkCipher$1 = {};
Object.defineProperty(WalletLinkCipher$1, "__esModule", { value: true });
WalletLinkCipher$1.WalletLinkCipher = void 0;
const util_1$8 = util$6;
class WalletLinkCipher {
  // @param secret hex representation of 32-byte secret
  constructor(secret) {
    this.secret = secret;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(plainText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", (0, util_1$8.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
    const enc = new TextEncoder();
    const encryptedResult = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: ivBytes
    }, secretKey, enc.encode(plainText));
    const tagLength = 16;
    const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    const authTagBytes = new Uint8Array(authTag);
    const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
    return (0, util_1$8.uint8ArrayToHex)(concatted);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(cipherText) {
    const secret = this.secret;
    if (secret.length !== 64)
      throw Error(`secret must be 256 bits`);
    return new Promise((resolve, reject) => {
      void async function() {
        const secretKey = await crypto.subtle.importKey("raw", (0, util_1$8.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const encrypted = (0, util_1$8.hexStringToUint8Array)(cipherText);
        const ivBytes = encrypted.slice(0, 12);
        const authTagBytes = encrypted.slice(12, 28);
        const encryptedPlaintextBytes = encrypted.slice(28);
        const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
        const algo = {
          name: "AES-GCM",
          iv: new Uint8Array(ivBytes)
        };
        try {
          const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
          const decoder = new TextDecoder();
          resolve(decoder.decode(decrypted));
        } catch (err) {
          reject(err);
        }
      }();
    });
  }
}
WalletLinkCipher$1.WalletLinkCipher = WalletLinkCipher;
var WalletLinkHTTP$1 = {};
Object.defineProperty(WalletLinkHTTP$1, "__esModule", { value: true });
WalletLinkHTTP$1.WalletLinkHTTP = void 0;
class WalletLinkHTTP {
  constructor(linkAPIUrl, sessionId, sessionKey) {
    this.linkAPIUrl = linkAPIUrl;
    this.sessionId = sessionId;
    const credentials = `${sessionId}:${sessionKey}`;
    this.auth = `Basic ${btoa(credentials)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(events) {
    return Promise.all(events.map((e) => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((error2) => console.error("Unabled to mark event as failed:", error2));
  }
  async fetchUnseenEvents() {
    var _a;
    const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (response.ok) {
      const { events, error: error2 } = await response.json();
      if (error2) {
        throw new Error(`Check unseen events failed: ${error2}`);
      }
      const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e) => e.event === "Web3Response").map((e) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: e.id,
        event: e.event,
        data: e.data
      }))) !== null && _a !== void 0 ? _a : [];
      this.markUnseenEventsAsSeen(responseEvents);
      return responseEvents;
    }
    throw new Error(`Check unseen events failed: ${response.status}`);
  }
}
WalletLinkHTTP$1.WalletLinkHTTP = WalletLinkHTTP;
var WalletLinkWebSocket$1 = {};
Object.defineProperty(WalletLinkWebSocket$1, "__esModule", { value: true });
WalletLinkWebSocket$1.WalletLinkWebSocket = WalletLinkWebSocket$1.ConnectionState = void 0;
var ConnectionState;
(function(ConnectionState2) {
  ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
  ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
  ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (WalletLinkWebSocket$1.ConnectionState = ConnectionState = {}));
class WalletLinkWebSocket {
  setConnectionStateListener(listener) {
    this.connectionStateListener = listener;
  }
  setIncomingDataListener(listener) {
    this.incomingDataListener = listener;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(url, WebSocketClass = WebSocket) {
    this.WebSocketClass = WebSocketClass;
    this.webSocket = null;
    this.pendingData = [];
    this.url = url.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket) {
      throw new Error("webSocket object is not null");
    }
    return new Promise((resolve, reject) => {
      var _a;
      let webSocket;
      try {
        this.webSocket = webSocket = new this.WebSocketClass(this.url);
      } catch (err) {
        reject(err);
        return;
      }
      (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
      webSocket.onclose = (evt) => {
        var _a2;
        this.clearWebSocket();
        reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
      };
      webSocket.onopen = (_) => {
        var _a2;
        resolve();
        (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
        if (this.pendingData.length > 0) {
          const pending = [...this.pendingData];
          pending.forEach((data) => this.sendData(data));
          this.pendingData = [];
        }
      };
      webSocket.onmessage = (evt) => {
        var _a2, _b;
        if (evt.data === "h") {
          (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
            type: "Heartbeat"
          });
        } else {
          try {
            const message = JSON.parse(evt.data);
            (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
          } catch (_c) {
          }
        }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var _a;
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.clearWebSocket();
    (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
    this.connectionStateListener = void 0;
    this.incomingDataListener = void 0;
    try {
      webSocket.close();
    } catch (_b) {
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(data) {
    const { webSocket } = this;
    if (!webSocket) {
      this.pendingData.push(data);
      this.connect();
      return;
    }
    webSocket.send(data);
  }
  clearWebSocket() {
    const { webSocket } = this;
    if (!webSocket) {
      return;
    }
    this.webSocket = null;
    webSocket.onclose = null;
    webSocket.onerror = null;
    webSocket.onmessage = null;
    webSocket.onopen = null;
  }
}
WalletLinkWebSocket$1.WalletLinkWebSocket = WalletLinkWebSocket;
Object.defineProperty(WalletLinkConnection$1, "__esModule", { value: true });
WalletLinkConnection$1.WalletLinkConnection = void 0;
const constants_1$4 = constants$1;
const WalletLinkCipher_1 = WalletLinkCipher$1;
const WalletLinkHTTP_1 = WalletLinkHTTP$1;
const WalletLinkWebSocket_1 = WalletLinkWebSocket$1;
const type_1$1 = type;
const HEARTBEAT_INTERVAL = 1e4;
const REQUEST_TIMEOUT = 6e4;
class WalletLinkConnection {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session, linkAPIUrl, listener, WebSocketClass = WebSocket }) {
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = (0, type_1$1.IntNumber)(1);
    this._connected = false;
    this._linked = false;
    this.shouldFetchUnseenEventsOnConnect = false;
    this.requestResolutions = /* @__PURE__ */ new Map();
    this.handleSessionMetadataUpdated = (metadata) => {
      if (!metadata)
        return;
      const handlers = /* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          (v) => metadata.JsonRpcUrl && this.handleChainUpdated(v, metadata.JsonRpcUrl)
        ]
      ]);
      handlers.forEach((handler, key) => {
        const value = metadata[key];
        if (value === void 0)
          return;
        handler(value);
      });
    };
    this.handleDestroyed = (__destroyed) => {
      var _a;
      if (__destroyed !== "1")
        return;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
    };
    this.handleAccountUpdated = async (encryptedEthereumAddress) => {
      var _a;
      {
        const address = await this.cipher.decrypt(encryptedEthereumAddress);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
      }
    };
    this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
      var _a;
      {
        const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
      }
    };
    this.handleWalletUsernameUpdated = async (walletUsername) => {
      this.handleMetadataUpdated(constants_1$4.WALLET_USER_NAME_KEY, walletUsername);
    };
    this.handleAppVersionUpdated = async (appVersion) => {
      this.handleMetadataUpdated(constants_1$4.APP_VERSION_KEY, appVersion);
    };
    this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
      var _a;
      {
        const chainId = await this.cipher.decrypt(encryptedChainId);
        const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
      }
    };
    this.session = session;
    this.cipher = new WalletLinkCipher_1.WalletLinkCipher(session.secret);
    this.listener = listener;
    const ws = new WalletLinkWebSocket_1.WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocketClass);
    ws.setConnectionStateListener(async (state) => {
      let connected = false;
      switch (state) {
        case WalletLinkWebSocket_1.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const connect = async () => {
              await new Promise((resolve) => setTimeout(resolve, 5e3));
              if (!this.destroyed) {
                ws.connect().catch(() => {
                  connect();
                });
              }
            };
            connect();
          }
          break;
        case WalletLinkWebSocket_1.ConnectionState.CONNECTED:
          try {
            await this.authenticate();
            this.sendIsLinked();
            this.sendGetSessionConfig();
            connected = true;
          } catch (_a) {
          }
          this.updateLastHeartbeat();
          setInterval(() => {
            this.heartbeat();
          }, HEARTBEAT_INTERVAL);
          if (this.shouldFetchUnseenEventsOnConnect) {
            this.fetchUnseenEventsAPI();
          }
          break;
        case WalletLinkWebSocket_1.ConnectionState.CONNECTING:
          break;
      }
      if (this.connected !== connected) {
        this.connected = connected;
      }
    });
    ws.setIncomingDataListener((m) => {
      var _a;
      switch (m.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const linked = m.type === "IsLinkedOK" ? m.linked : void 0;
          this.linked = linked || m.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(m.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(m);
          break;
        }
      }
      if (m.id !== void 0) {
        (_a = this.requestResolutions.get(m.id)) === null || _a === void 0 ? void 0 : _a(m);
      }
    });
    this.ws = ws;
    this.http = new WalletLinkHTTP_1.WalletLinkHTTP(linkAPIUrl, session.id, session.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed) {
      throw new Error("instance is destroyed");
    }
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    this.destroyed = true;
    this.ws.disconnect();
    this.listener = void 0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(connected) {
    var _a;
    this._connected = connected;
    if (connected)
      (_a = this.onceConnected) === null || _a === void 0 ? void 0 : _a.call(this);
  }
  setOnceConnected(callback) {
    return new Promise((resolve) => {
      if (this.connected) {
        callback().then(resolve);
      } else {
        this.onceConnected = () => {
          callback().then(resolve);
          this.onceConnected = void 0;
        };
      }
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(linked) {
    var _a, _b;
    this._linked = linked;
    if (linked)
      (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
  }
  setOnceLinked(callback) {
    return new Promise((resolve) => {
      if (this.linked) {
        callback().then(resolve);
      } else {
        this.onceLinked = () => {
          callback().then(resolve);
          this.onceLinked = void 0;
        };
      }
    });
  }
  async handleIncomingEvent(m) {
    var _a;
    if (m.type !== "Event" || m.event !== "Web3Response") {
      return;
    }
    {
      const decryptedData = await this.cipher.decrypt(m.data);
      const message = JSON.parse(decryptedData);
      if (message.type !== "WEB3_RESPONSE")
        return;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message);
    }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = true;
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e) {
      console.error("Unable to check for unseen events", e);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = false;
    const responseEvents = await this.http.fetchUnseenEvents();
    responseEvents.forEach((e) => this.handleIncomingEvent(e));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns a Promise that completes when successful
   */
  async setSessionMetadata(key, value) {
    const message = {
      type: "SetSessionConfig",
      id: (0, type_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [key]: value }
    };
    return this.setOnceConnected(async () => {
      const res = await this.makeRequest(message);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to set session metadata");
      }
    });
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(event, unencryptedData, callWebhook = false) {
    const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
    const message = {
      type: "PublishEvent",
      id: (0, type_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      event,
      data,
      callWebhook
    };
    return this.setOnceLinked(async () => {
      const res = await this.makeRequest(message);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to publish event");
      }
      return res.eventId;
    });
  }
  sendData(message) {
    this.ws.sendData(JSON.stringify(message));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch (_a) {
    }
  }
  async makeRequest(message, timeout = REQUEST_TIMEOUT) {
    const reqId = message.id;
    this.sendData(message);
    let timeoutId;
    return Promise.race([
      new Promise((_, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(new Error(`request ${reqId} timed out`));
        }, timeout);
      }),
      new Promise((resolve) => {
        this.requestResolutions.set(reqId, (m) => {
          clearTimeout(timeoutId);
          resolve(m);
          this.requestResolutions.delete(reqId);
        });
      })
    ]);
  }
  async authenticate() {
    const m = {
      type: "HostSession",
      id: (0, type_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    };
    const res = await this.makeRequest(m);
    if (res.type === "Fail") {
      throw new Error(res.error || "failed to authenticate");
    }
  }
  sendIsLinked() {
    const m = {
      type: "IsLinked",
      id: (0, type_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(m);
  }
  sendGetSessionConfig() {
    const m = {
      type: "GetSessionConfig",
      id: (0, type_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(m);
  }
}
WalletLinkConnection$1.WalletLinkConnection = WalletLinkConnection;
var WalletLinkSession$1 = {};
Object.defineProperty(WalletLinkSession$1, "__esModule", { value: true });
WalletLinkSession$1.WalletLinkSession = void 0;
const sha_js_1 = sha_jsExports;
const util_1$7 = util$6;
const STORAGE_KEY_SESSION_ID = "session:id";
const STORAGE_KEY_SESSION_SECRET = "session:secret";
const STORAGE_KEY_SESSION_LINKED = "session:linked";
class WalletLinkSession {
  constructor(storage2, id, secret, linked) {
    this._storage = storage2;
    this._id = id || (0, util_1$7.randomBytesHex)(16);
    this._secret = secret || (0, util_1$7.randomBytesHex)(32);
    this._key = new sha_js_1.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex");
    this._linked = !!linked;
  }
  static load(storage2) {
    const id = storage2.getItem(STORAGE_KEY_SESSION_ID);
    const linked = storage2.getItem(STORAGE_KEY_SESSION_LINKED);
    const secret = storage2.getItem(STORAGE_KEY_SESSION_SECRET);
    if (id && secret) {
      return new WalletLinkSession(storage2, id, secret, linked === "1");
    }
    return null;
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(val) {
    this._linked = val;
    this.persistLinked();
  }
  save() {
    this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
    this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
    this.persistLinked();
    return this;
  }
  persistLinked() {
    this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
  }
}
WalletLinkSession$1.WalletLinkSession = WalletLinkSession;
var util$1 = {};
Object.defineProperty(util$1, "__esModule", { value: true });
util$1.isDarkMode = util$1.isMobileWeb = util$1.getLocation = util$1.createQrUrl = void 0;
function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version2, chainId) {
  const sessionIdKey = isParentConnection ? "parent-id" : "id";
  const query = new URLSearchParams({
    [sessionIdKey]: sessionId,
    secret: sessionSecret,
    server: serverUrl,
    v: version2,
    chainId: chainId.toString()
  }).toString();
  const qrUrl = `${serverUrl}/#/link?${query}`;
  return qrUrl;
}
util$1.createQrUrl = createQrUrl;
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (e) {
    return false;
  }
}
function getLocation() {
  try {
    if (isInIFrame() && window.top) {
      return window.top.location;
    }
    return window.location;
  } catch (e) {
    return window.location;
  }
}
util$1.getLocation = getLocation;
function isMobileWeb() {
  var _a;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
util$1.isMobileWeb = isMobileWeb;
function isDarkMode() {
  var _a, _b;
  return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) !== null && _b !== void 0 ? _b : false;
}
util$1.isDarkMode = isDarkMode;
var WalletLinkRelayUI$1 = {};
var cssReset = {};
var cssResetCss = {};
Object.defineProperty(cssResetCss, "__esModule", { value: true });
cssResetCss.default = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(cssReset, "__esModule", { value: true });
cssReset.injectCssReset = void 0;
const cssReset_css_1 = __importDefault$3(cssResetCss);
function injectCssReset() {
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
  document.documentElement.appendChild(styleEl);
}
cssReset.injectCssReset = injectCssReset;
var Snackbar = {};
var SnackbarCss = {};
Object.defineProperty(SnackbarCss, "__esModule", { value: true });
SnackbarCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();
(function(exports) {
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
  const clsx_12 = __importDefault2(require$$0);
  const preact_12 = require$$1;
  const hooks_1 = require$$2;
  const util_12 = util$1;
  const Snackbar_css_1 = __importDefault2(SnackbarCss);
  const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
  const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
  class Snackbar2 {
    constructor() {
      this.items = /* @__PURE__ */ new Map();
      this.nextItemKey = 0;
      this.root = null;
      this.darkMode = (0, util_12.isDarkMode)();
    }
    attach(el) {
      this.root = document.createElement("div");
      this.root.className = "-cbwsdk-snackbar-root";
      el.appendChild(this.root);
      this.render();
    }
    presentItem(itemProps) {
      const key = this.nextItemKey++;
      this.items.set(key, itemProps);
      this.render();
      return () => {
        this.items.delete(key);
        this.render();
      };
    }
    clear() {
      this.items.clear();
      this.render();
    }
    render() {
      if (!this.root) {
        return;
      }
      (0, preact_12.render)((0, preact_12.h)(
        "div",
        null,
        (0, preact_12.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (0, preact_12.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key }))))
      ), this.root);
    }
  }
  exports.Snackbar = Snackbar2;
  const SnackbarContainer = (props) => (0, preact_12.h)(
    "div",
    { class: (0, clsx_12.default)("-cbwsdk-snackbar-container") },
    (0, preact_12.h)("style", null, Snackbar_css_1.default),
    (0, preact_12.h)("div", { class: "-cbwsdk-snackbar" }, props.children)
  );
  exports.SnackbarContainer = SnackbarContainer;
  const SnackbarInstance = ({ autoExpand, message, menuItems }) => {
    const [hidden, setHidden] = (0, hooks_1.useState)(true);
    const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
    (0, hooks_1.useEffect)(() => {
      const timers = [
        window.setTimeout(() => {
          setHidden(false);
        }, 1),
        window.setTimeout(() => {
          setExpanded(true);
        }, 1e4)
      ];
      return () => {
        timers.forEach(window.clearTimeout);
      };
    });
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
    return (0, preact_12.h)(
      "div",
      { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
      (0, preact_12.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
        (0, preact_12.h)("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        " ",
        (0, preact_12.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
        (0, preact_12.h)(
          "div",
          { class: "-gear-container" },
          !expanded && (0, preact_12.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, preact_12.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, preact_12.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
        )
      ),
      menuItems && menuItems.length > 0 && (0, preact_12.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i) => (0, preact_12.h)(
        "div",
        { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i },
        (0, preact_12.h)(
          "svg",
          { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, preact_12.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
        ),
        (0, preact_12.h)("span", { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
      )))
    );
  };
  exports.SnackbarInstance = SnackbarInstance;
})(Snackbar);
Object.defineProperty(WalletLinkRelayUI$1, "__esModule", { value: true });
WalletLinkRelayUI$1.WalletLinkRelayUI = void 0;
const cssReset_1$1 = cssReset;
const Snackbar_1$1 = Snackbar;
class WalletLinkRelayUI {
  constructor() {
    this.attached = false;
    this.snackbar = new Snackbar_1$1.Snackbar();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    const el = document.documentElement;
    const container = document.createElement("div");
    container.className = "-cbwsdk-css-reset";
    el.appendChild(container);
    this.snackbar.attach(container);
    this.attached = true;
    (0, cssReset_1$1.injectCssReset)();
  }
  showConnecting(options) {
    let snackbarProps;
    if (options.isUnlinkedErrorState) {
      snackbarProps = {
        autoExpand: true,
        message: "Connection lost",
        menuItems: [
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    } else {
      snackbarProps = {
        message: "Confirm on phone",
        menuItems: [
          {
            isRed: true,
            info: "Cancel transaction",
            svgWidth: "11",
            svgHeight: "11",
            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
            defaultFillRule: "inherit",
            defaultClipRule: "inherit",
            onClick: options.onCancel
          },
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    }
    return this.snackbar.presentItem(snackbarProps);
  }
}
WalletLinkRelayUI$1.WalletLinkRelayUI = WalletLinkRelayUI;
var WLMobileRelayUI$1 = {};
var RedirectDialog$1 = {};
var RedirectDialogCss = {};
Object.defineProperty(RedirectDialogCss, "__esModule", { value: true });
RedirectDialogCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(RedirectDialog$1, "__esModule", { value: true });
RedirectDialog$1.RedirectDialog = void 0;
const clsx_1 = __importDefault$2(require$$0);
const preact_1 = require$$1;
const cssReset_1 = cssReset;
const Snackbar_1 = Snackbar;
const util_1$6 = util$1;
const RedirectDialog_css_1 = __importDefault$2(RedirectDialogCss);
class RedirectDialog {
  constructor() {
    this.root = null;
    this.darkMode = (0, util_1$6.isDarkMode)();
  }
  attach() {
    const el = document.documentElement;
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-css-reset";
    el.appendChild(this.root);
    (0, cssReset_1.injectCssReset)();
  }
  present(props) {
    this.render(props);
  }
  clear() {
    this.render(null);
  }
  render(props) {
    if (!this.root)
      return;
    (0, preact_1.render)(null, this.root);
    if (!props)
      return;
    (0, preact_1.render)((0, preact_1.h)(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root);
  }
}
RedirectDialog$1.RedirectDialog = RedirectDialog;
const RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
  const theme = darkMode ? "dark" : "light";
  return (0, preact_1.h)(
    Snackbar_1.SnackbarContainer,
    { darkMode },
    (0, preact_1.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, preact_1.h)("style", null, RedirectDialog_css_1.default),
      (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
      (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-redirect-dialog-box", theme) },
        (0, preact_1.h)("p", null, title),
        (0, preact_1.h)("button", { onClick: onButtonClick }, buttonText)
      )
    )
  );
};
var constants = {};
Object.defineProperty(constants, "__esModule", { value: true });
constants.CBW_MOBILE_DEEPLINK_URL = constants.WALLETLINK_URL = constants.CB_KEYS_URL = void 0;
constants.CB_KEYS_URL = "https://keys.coinbase.com/connect";
constants.WALLETLINK_URL = "https://www.walletlink.org";
constants.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";
Object.defineProperty(WLMobileRelayUI$1, "__esModule", { value: true });
WLMobileRelayUI$1.WLMobileRelayUI = void 0;
const RedirectDialog_1 = RedirectDialog$1;
const util_1$5 = util$1;
const constants_1$3 = constants;
class WLMobileRelayUI {
  constructor() {
    this.attached = false;
    this.redirectDialog = new RedirectDialog_1.RedirectDialog();
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    this.redirectDialog.attach();
    this.attached = true;
  }
  redirectToCoinbaseWallet(walletLinkUrl) {
    const url = new URL(constants_1$3.CBW_MOBILE_DEEPLINK_URL);
    url.searchParams.append("redirect_url", (0, util_1$5.getLocation)().href);
    if (walletLinkUrl) {
      url.searchParams.append("wl_url", walletLinkUrl);
    }
    const anchorTag = document.createElement("a");
    anchorTag.target = "cbw-opener";
    anchorTag.href = url.href;
    anchorTag.rel = "noreferrer noopener";
    anchorTag.click();
  }
  openCoinbaseWalletDeeplink(walletLinkUrl) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(walletLinkUrl);
      }
    });
    setTimeout(() => {
      this.redirectToCoinbaseWallet(walletLinkUrl);
    }, 99);
  }
  showConnecting(_options) {
    return () => {
      this.redirectDialog.clear();
    };
  }
}
WLMobileRelayUI$1.WLMobileRelayUI = WLMobileRelayUI;
Object.defineProperty(WalletLinkRelay$1, "__esModule", { value: true });
WalletLinkRelay$1.WalletLinkRelay = void 0;
const WalletLinkConnection_1 = WalletLinkConnection$1;
const constants_1$2 = constants$1;
const RelayEventManager_1$1 = RelayEventManager$1;
const WalletLinkSession_1 = WalletLinkSession$1;
const Web3Response_1$1 = Web3Response;
const util_1$4 = util$1;
const WalletLinkRelayUI_1 = WalletLinkRelayUI$1;
const WLMobileRelayUI_1 = WLMobileRelayUI$1;
const error_1$6 = error;
const util_2$1 = util$6;
const ScopedLocalStorage_1$4 = ScopedLocalStorage$1;
class WalletLinkRelay {
  constructor(options) {
    this.accountsCallback = null;
    this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
    this.chainCallback = null;
    this.dappDefaultChain = 1;
    this.isMobileWeb = (0, util_1$4.isMobileWeb)();
    this.appName = "";
    this.appLogoUrl = null;
    this.linkedUpdated = (linked) => {
      this.isLinked = linked;
      const cachedAddresses = this.storage.getItem(constants_1$2.LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        this._session.linked = linked;
      }
      this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
        if (addresses[0] !== "" && !linked && this._session.linked && !wasConnectedViaStandalone) {
          this.isUnlinkedErrorState = true;
        }
      }
    };
    this.metadataUpdated = (key, value) => {
      this.storage.setItem(key, value);
    };
    this.chainUpdated = (chainId, jsonRpcUrl) => {
      if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
        return;
      }
      this.chainCallbackParams = {
        chainId,
        jsonRpcUrl
      };
      if (this.chainCallback) {
        this.chainCallback(chainId, jsonRpcUrl);
      }
    };
    this.accountUpdated = (selectedAddress) => {
      if (this.accountsCallback) {
        this.accountsCallback([selectedAddress]);
      }
      if (WalletLinkRelay.accountRequestCallbackIds.size > 0) {
        Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
          const message = {
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "requestEthereumAccounts",
              result: [selectedAddress]
            }
          };
          this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
        });
        WalletLinkRelay.accountRequestCallbackIds.clear();
      }
    };
    this.resetAndReload = this.resetAndReload.bind(this);
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    const { session, ui, connection } = this.subscribe();
    this._session = session;
    this.connection = connection;
    this.relayEventManager = new RelayEventManager_1$1.RelayEventManager();
    this.ui = ui;
  }
  subscribe() {
    const session = WalletLinkSession_1.WalletLinkSession.load(this.storage) || new WalletLinkSession_1.WalletLinkSession(this.storage).save();
    const { linkAPIUrl } = this;
    const connection = new WalletLinkConnection_1.WalletLinkConnection({
      session,
      linkAPIUrl,
      listener: this
    });
    const ui = this.isMobileWeb ? new WLMobileRelayUI_1.WLMobileRelayUI() : new WalletLinkRelayUI_1.WalletLinkRelayUI();
    connection.connect();
    return { session, ui, connection };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((resolve) => setTimeout(() => resolve(null), 1e3))
    ]).then(() => {
      this.connection.destroy();
      const storedSession = WalletLinkSession_1.WalletLinkSession.load(this.storage);
      if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
        ScopedLocalStorage_1$4.ScopedLocalStorage.clearAll();
      }
      document.location.reload();
    }).catch((_) => {
    });
  }
  setAppInfo(appName, appLogoUrl) {
    this.appName = appName;
    this.appLogoUrl = appLogoUrl;
  }
  getStorageItem(key) {
    return this.storage.getItem(key);
  }
  setStorageItem(key, value) {
    this.storage.setItem(key, value);
  }
  signEthereumMessage(message, address, addPrefix, typedDataJson) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, util_2$1.hexStringFromBuffer)(message, true),
        address,
        addPrefix,
        typedDataJson: typedDataJson || null
      }
    });
  }
  ethereumAddressFromSignedMessage(message, signature, addPrefix) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, util_2$1.hexStringFromBuffer)(message, true),
        signature: (0, util_2$1.hexStringFromBuffer)(signature, true),
        addPrefix
      }
    });
  }
  signEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: (0, util_2$1.bigIntStringFromBigInt)(params.weiValue),
        data: (0, util_2$1.hexStringFromBuffer)(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? (0, util_2$1.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
        maxFeePerGas: params.gasPriceInWei ? (0, util_2$1.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
        maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_2$1.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
        gasLimit: params.gasLimit ? (0, util_2$1.bigIntStringFromBigInt)(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: false
      }
    });
  }
  signAndSubmitEthereumTransaction(params) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: (0, util_2$1.bigIntStringFromBigInt)(params.weiValue),
        data: (0, util_2$1.hexStringFromBuffer)(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? (0, util_2$1.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
        maxFeePerGas: params.maxFeePerGas ? (0, util_2$1.bigIntStringFromBigInt)(params.maxFeePerGas) : null,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_2$1.bigIntStringFromBigInt)(params.maxPriorityFeePerGas) : null,
        gasLimit: params.gasLimit ? (0, util_2$1.bigIntStringFromBigInt)(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: true
      }
    });
  }
  submitEthereumTransaction(signedTransaction, chainId) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, util_2$1.hexStringFromBuffer)(signedTransaction, true),
        chainId
      }
    });
  }
  scanQRCode(regExp) {
    return this.sendRequest({
      method: "scanQRCode",
      params: {
        regExp
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  genericRequest(data, action) {
    return this.sendRequest({
      method: "generic",
      params: {
        action,
        data
      }
    });
  }
  sendGenericMessage(request) {
    return this.sendRequest(request);
  }
  sendRequest(request) {
    let hideSnackbarItem = null;
    const id = (0, util_2$1.randomBytesHex)(8);
    const cancel = (error2) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error2);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    return new Promise((resolve, reject) => {
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if ((0, Web3Response_1$1.isErrorResponse)(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  setAccountsCallback(accountsCallback) {
    this.accountsCallback = accountsCallback;
  }
  setChainCallback(chainCallback) {
    this.chainCallback = chainCallback;
  }
  setDappDefaultChainCallback(chainId) {
    this.dappDefaultChain = chainId;
  }
  publishWeb3RequestEvent(id, request) {
    const message = { type: "WEB3_REQUEST", id, request };
    this.publishEvent("Web3Request", message, true).then((_) => {
    }).catch((err) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: message.id,
        response: {
          method: request.method,
          errorMessage: err.message
        }
      });
    });
    if (this.isMobileWeb) {
      this.openCoinbaseWalletDeeplink(request.method);
    }
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(method2) {
    if (!(this.ui instanceof WLMobileRelayUI_1.WLMobileRelayUI))
      return;
    switch (method2) {
      case "requestEthereumAccounts":
      case "switchEthereumChain":
        return;
      default:
        window.addEventListener("blur", () => {
          window.addEventListener("focus", () => {
            this.connection.checkUnseenEvents();
          }, { once: true });
        }, { once: true });
        this.ui.openCoinbaseWalletDeeplink();
        break;
    }
  }
  publishWeb3RequestCanceledEvent(id) {
    const message = {
      type: "WEB3_REQUEST_CANCELED",
      id
    };
    this.publishEvent("Web3RequestCanceled", message, false).then();
  }
  publishEvent(event, message, callWebhook) {
    return this.connection.publishEvent(event, message, callWebhook);
  }
  handleWeb3ResponseMessage(message) {
    const { response } = message;
    if (response.method === "requestEthereumAccounts") {
      WalletLinkRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
      WalletLinkRelay.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(message);
  }
  handleErrorResponse(id, method2, error2) {
    var _a;
    const errorMessage = (_a = error2 === null || error2 === void 0 ? void 0 : error2.message) !== null && _a !== void 0 ? _a : "Unspecified error message.";
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id,
      response: {
        method: method2,
        errorMessage
      }
    });
  }
  invokeCallback(message) {
    const callback = this.relayEventManager.callbacks.get(message.id);
    if (callback) {
      callback(message.response);
      this.relayEventManager.callbacks.delete(message.id);
    }
  }
  requestEthereumAccounts() {
    const request = {
      method: "requestEthereumAccounts",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    };
    const id = (0, util_2$1.randomBytesHex)(8);
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        if ((0, Web3Response_1$1.isErrorResponse)(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      WalletLinkRelay.accountRequestCallbackIds.add(id);
      this.publishWeb3RequestEvent(id, request);
    });
  }
  watchAsset(type2, address, symbol, decimals, image, chainId) {
    const request = {
      method: "watchAsset",
      params: {
        type: type2,
        options: {
          address,
          symbol,
          decimals,
          image
        },
        chainId
      }
    };
    let hideSnackbarItem = null;
    const id = (0, util_2$1.randomBytesHex)(8);
    const cancel = (error2) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error2);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if ((0, Web3Response_1$1.isErrorResponse)(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
    const request = {
      method: "addEthereumChain",
      params: {
        chainId,
        rpcUrls,
        blockExplorerUrls,
        chainName,
        iconUrls,
        nativeCurrency
      }
    };
    let hideSnackbarItem = null;
    const id = (0, util_2$1.randomBytesHex)(8);
    const cancel = (error2) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error2);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if ((0, Web3Response_1$1.isErrorResponse)(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
  switchEthereumChain(chainId, address) {
    const request = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId }, { address })
    };
    const id = (0, util_2$1.randomBytesHex)(8);
    return new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        if ((0, Web3Response_1$1.isErrorResponse)(response) && response.errorCode) {
          return reject(error_1$6.standardErrors.provider.custom({
            code: response.errorCode,
            message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
          }));
        } else if ((0, Web3Response_1$1.isErrorResponse)(response)) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      this.publishWeb3RequestEvent(id, request);
    });
  }
}
WalletLinkRelay$1.WalletLinkRelay = WalletLinkRelay;
WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(WalletLinkSigner$1, "__esModule", { value: true });
WalletLinkSigner$1.WalletLinkSigner = void 0;
const eth_eip712_util_1 = __importDefault$1(ethEip712Util);
const constants_1$1 = constants$1;
const RelayEventManager_1 = RelayEventManager$1;
const Web3Response_1 = Web3Response;
const WalletLinkRelay_1 = WalletLinkRelay$1;
const constants_2 = constants;
const error_1$5 = error;
const util_1$3 = util$6;
const ScopedLocalStorage_1$3 = ScopedLocalStorage$1;
const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
class WalletLinkSigner {
  constructor(options) {
    var _a, _b;
    this._relay = null;
    this._addresses = [];
    this.hasMadeFirstChainChangedEmission = false;
    const { appName, appLogoUrl } = options.metadata;
    this._appName = appName;
    this._appLogoUrl = appLogoUrl;
    this._storage = new ScopedLocalStorage_1$3.ScopedLocalStorage("walletlink", constants_2.WALLETLINK_URL);
    this.updateListener = options.updateListener;
    this._relayEventManager = new RelayEventManager_1.RelayEventManager();
    this._jsonRpcUrlFromOpts = "";
    const cachedAddresses = this._storage.getItem(constants_1$1.LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      const addresses = cachedAddresses.split(" ");
      if (addresses[0] !== "") {
        this._addresses = addresses.map((address) => (0, util_1$3.ensureAddressString)(address));
        (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
          accounts: this._addresses,
          source: "storage"
        });
      }
    }
    const cachedChainId = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
    if (cachedChainId) {
      (_b = this.updateListener) === null || _b === void 0 ? void 0 : _b.onChainUpdate({
        chain: {
          id: this.getChainId(),
          rpcUrl: this.jsonRpcUrl
        },
        source: "storage"
      });
      this.hasMadeFirstChainChangedEmission = true;
    }
    this.initializeRelay();
  }
  getSession() {
    const relay = this.initializeRelay();
    const { id, secret } = relay.getWalletLinkSession();
    return { id, secret };
  }
  async handshake() {
    const ethAddresses = await this.request({ method: "eth_requestAccounts" });
    return ethAddresses;
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var _a;
    return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(value) {
    this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
  }
  updateProviderInfo(jsonRpcUrl, chainId) {
    var _a;
    this.jsonRpcUrl = jsonRpcUrl;
    const originalChainId = this.getChainId();
    this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
    const chainChanged = (0, util_1$3.ensureIntNumber)(chainId) !== originalChainId;
    if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
      (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onChainUpdate({
        chain: { id: chainId, rpcUrl: jsonRpcUrl },
        source: "wallet"
      });
      this.hasMadeFirstChainChangedEmission = true;
    }
  }
  async watchAsset(type2, address, symbol, decimals, image, chainId) {
    const relay = this.initializeRelay();
    const result = await relay.watchAsset(type2, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
    if ((0, Web3Response_1.isErrorResponse)(result))
      return false;
    return !!result.result;
  }
  async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
    var _a, _b;
    if ((0, util_1$3.ensureIntNumber)(chainId) === this.getChainId()) {
      return false;
    }
    const relay = this.initializeRelay();
    if (!this._isAuthorized()) {
      await relay.requestEthereumAccounts();
    }
    const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
    if ((0, Web3Response_1.isErrorResponse)(res))
      return false;
    if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
      this.updateProviderInfo(rpcUrls[0], chainId);
    }
    return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
  }
  async switchEthereumChain(chainId) {
    const relay = this.initializeRelay();
    const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0);
    if ((0, Web3Response_1.isErrorResponse)(res)) {
      if (!res.errorCode)
        return;
      if (res.errorCode === error_1$5.standardErrorCodes.provider.unsupportedChain) {
        throw error_1$5.standardErrors.provider.unsupportedChain();
      } else {
        throw error_1$5.standardErrors.provider.custom({
          message: res.errorMessage,
          code: res.errorCode
        });
      }
    }
    const switchResponse = res.result;
    if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
      this.updateProviderInfo(switchResponse.rpcUrl, chainId);
    }
  }
  async disconnect() {
    if (this._relay) {
      this._relay.resetAndReload();
    }
    this._storage.clear();
  }
  async request(args) {
    try {
      return this._request(args).catch((error2) => {
        throw error2;
      });
    } catch (error2) {
      return Promise.reject(error2);
    }
  }
  async _request(args) {
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw error_1$5.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: args
      });
    }
    const { method: method2, params } = args;
    if (typeof method2 !== "string" || method2.length === 0) {
      throw error_1$5.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: args
      });
    }
    if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
      throw error_1$5.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: args
      });
    }
    const newParams = params === void 0 ? [] : params;
    const id = this._relayEventManager.makeRequestId();
    const result = await this._sendRequestAsync({
      method: method2,
      params: newParams,
      jsonrpc: "2.0",
      id
    });
    return result.result;
  }
  _setAddresses(addresses, _) {
    var _a;
    if (!Array.isArray(addresses)) {
      throw new Error("addresses is not an array");
    }
    const newAddresses = addresses.map((address) => (0, util_1$3.ensureAddressString)(address));
    if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
      return;
    }
    this._addresses = newAddresses;
    (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
      accounts: newAddresses,
      source: "wallet"
    });
    this._storage.setItem(constants_1$1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
  }
  _sendRequestAsync(request) {
    return new Promise((resolve, reject) => {
      try {
        const syncResult = this._handleSynchronousMethods(request);
        if (syncResult !== void 0) {
          return resolve({
            jsonrpc: "2.0",
            id: request.id,
            result: syncResult
          });
        }
      } catch (err) {
        return reject(err);
      }
      this._handleAsynchronousMethods(request).then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
    });
  }
  _handleSynchronousMethods(request) {
    const { method: method2 } = request;
    switch (method2) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return void 0;
    }
  }
  async _handleAsynchronousMethods(request) {
    const { method: method2 } = request;
    const params = request.params || [];
    switch (method2) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(params);
      case "eth_ecRecover":
        return this._eth_ecRecover(params);
      case "personal_sign":
        return this._personal_sign(params);
      case "personal_ecRecover":
        return this._personal_ecRecover(params);
      case "eth_signTransaction":
        return this._eth_signTransaction(params);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(params);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(params);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(params);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(params);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(params);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(params);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(params);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(params);
      default:
        return this._throwUnsupportedMethodError();
    }
  }
  _isKnownAddress(addressString) {
    try {
      const addressStr = (0, util_1$3.ensureAddressString)(addressString);
      const lowercaseAddresses = this._addresses.map((address) => (0, util_1$3.ensureAddressString)(address));
      return lowercaseAddresses.includes(addressStr);
    } catch (_a) {
    }
    return false;
  }
  _ensureKnownAddress(addressString) {
    if (!this._isKnownAddress(addressString)) {
      throw new Error("Unknown Ethereum address");
    }
  }
  _prepareTransactionParams(tx) {
    const fromAddress = tx.from ? (0, util_1$3.ensureAddressString)(tx.from) : this.selectedAddress;
    if (!fromAddress) {
      throw new Error("Ethereum address is unavailable");
    }
    this._ensureKnownAddress(fromAddress);
    const toAddress = tx.to ? (0, util_1$3.ensureAddressString)(tx.to) : null;
    const weiValue = tx.value != null ? (0, util_1$3.ensureBigInt)(tx.value) : BigInt(0);
    const data = tx.data ? (0, util_1$3.ensureBuffer)(tx.data) : Buffer.alloc(0);
    const nonce = tx.nonce != null ? (0, util_1$3.ensureIntNumber)(tx.nonce) : null;
    const gasPriceInWei = tx.gasPrice != null ? (0, util_1$3.ensureBigInt)(tx.gasPrice) : null;
    const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1$3.ensureBigInt)(tx.maxFeePerGas) : null;
    const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1$3.ensureBigInt)(tx.maxPriorityFeePerGas) : null;
    const gasLimit = tx.gas != null ? (0, util_1$3.ensureBigInt)(tx.gas) : null;
    const chainId = tx.chainId ? (0, util_1$3.ensureIntNumber)(tx.chainId) : this.getChainId();
    return {
      fromAddress,
      toAddress,
      weiValue,
      data,
      nonce,
      gasPriceInWei,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      chainId
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized()) {
      throw error_1$5.standardErrors.provider.unauthorized({});
    }
  }
  _throwUnsupportedMethodError() {
    throw error_1$5.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
    this._ensureKnownAddress(address);
    try {
      const relay = this.initializeRelay();
      const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson);
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw error_1$5.standardErrors.provider.userRejectedRequest("User denied message signature");
      }
      throw err;
    }
  }
  async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
    const relay = this.initializeRelay();
    const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix);
    if ((0, Web3Response_1.isErrorResponse)(res)) {
      throw new Error(res.errorMessage);
    }
    return { jsonrpc: "2.0", id: 0, result: res.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, util_1$3.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
    if (!chainIdStr) {
      return (0, util_1$3.ensureIntNumber)(1);
    }
    const chainId = parseInt(chainIdStr, 10);
    return (0, util_1$3.ensureIntNumber)(chainId);
  }
  async _eth_requestAccounts() {
    if (this._isAuthorized()) {
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    }
    let res;
    try {
      const relay = this.initializeRelay();
      res = await relay.requestEthereumAccounts();
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw error_1$5.standardErrors.provider.userRejectedRequest("User denied account authorization");
      }
      throw err;
    }
    if (!res.result) {
      throw new Error("accounts received is empty");
    }
    this._setAddresses(res.result);
    return { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(params) {
    this._requireAuthorization();
    const address = (0, util_1$3.ensureAddressString)(params[0]);
    const message = (0, util_1$3.ensureBuffer)(params[1]);
    return this._signEthereumMessage(message, address, false);
  }
  _eth_ecRecover(params) {
    const message = (0, util_1$3.ensureBuffer)(params[0]);
    const signature = (0, util_1$3.ensureBuffer)(params[1]);
    return this._ethereumAddressFromSignedMessage(message, signature, false);
  }
  _personal_sign(params) {
    this._requireAuthorization();
    const message = (0, util_1$3.ensureBuffer)(params[0]);
    const address = (0, util_1$3.ensureAddressString)(params[1]);
    return this._signEthereumMessage(message, address, true);
  }
  _personal_ecRecover(params) {
    const message = (0, util_1$3.ensureBuffer)(params[0]);
    const signature = (0, util_1$3.ensureBuffer)(params[1]);
    return this._ethereumAddressFromSignedMessage(message, signature, true);
  }
  async _eth_signTransaction(params) {
    this._requireAuthorization();
    const tx = this._prepareTransactionParams(params[0] || {});
    try {
      const relay = this.initializeRelay();
      const res = await relay.signEthereumTransaction(tx);
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw error_1$5.standardErrors.provider.userRejectedRequest("User denied transaction signature");
      }
      throw err;
    }
  }
  async _eth_sendRawTransaction(params) {
    const signedTransaction = (0, util_1$3.ensureBuffer)(params[0]);
    const relay = this.initializeRelay();
    const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
    if ((0, Web3Response_1.isErrorResponse)(res)) {
      throw new Error(res.errorMessage);
    }
    return { jsonrpc: "2.0", id: 0, result: res.result };
  }
  async _eth_sendTransaction(params) {
    this._requireAuthorization();
    const tx = this._prepareTransactionParams(params[0] || {});
    try {
      const relay = this.initializeRelay();
      const res = await relay.signAndSubmitEthereumTransaction(tx);
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw error_1$5.standardErrors.provider.userRejectedRequest("User denied transaction signature");
      }
      throw err;
    }
  }
  async _eth_signTypedData_v1(params) {
    this._requireAuthorization();
    const typedData = (0, util_1$3.ensureParsedJSONObject)(params[0]);
    const address = (0, util_1$3.ensureAddressString)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  async _eth_signTypedData_v3(params) {
    this._requireAuthorization();
    const address = (0, util_1$3.ensureAddressString)(params[0]);
    const typedData = (0, util_1$3.ensureParsedJSONObject)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  async _eth_signTypedData_v4(params) {
    this._requireAuthorization();
    const address = (0, util_1$3.ensureAddressString)(params[0]);
    const typedData = (0, util_1$3.ensureParsedJSONObject)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  async _wallet_addEthereumChain(params) {
    var _a, _b, _c, _d;
    const request = params[0];
    if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: `please pass in at least 1 rpcUrl` }
      };
    }
    if (!request.chainName || request.chainName.trim() === "") {
      throw error_1$5.standardErrors.rpc.invalidParams("chainName is a required field");
    }
    if (!request.nativeCurrency) {
      throw error_1$5.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    }
    const chainIdNumber = parseInt(request.chainId, 16);
    const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
    if (success) {
      return { jsonrpc: "2.0", id: 0, result: null };
    }
    return {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: `unable to add ethereum chain` }
    };
  }
  async _wallet_switchEthereumChain(params) {
    const request = params[0];
    await this.switchEthereumChain(parseInt(request.chainId, 16));
    return { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(params) {
    const request = Array.isArray(params) ? params[0] : params;
    if (!request.type) {
      throw error_1$5.standardErrors.rpc.invalidParams("Type is required");
    }
    if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
      throw error_1$5.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
    }
    if (!(request === null || request === void 0 ? void 0 : request.options)) {
      throw error_1$5.standardErrors.rpc.invalidParams("Options are required");
    }
    if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
      throw error_1$5.standardErrors.rpc.invalidParams("Address is required");
    }
    const chainId = this.getChainId();
    const { address, symbol, image, decimals } = request.options;
    const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
    return { jsonrpc: "2.0", id: 0, result: res };
  }
  initializeRelay() {
    if (!this._relay) {
      const relay = new WalletLinkRelay_1.WalletLinkRelay({
        linkAPIUrl: constants_2.WALLETLINK_URL,
        storage: this._storage
      });
      relay.setAppInfo(this._appName, this._appLogoUrl);
      relay.attachUI();
      relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
      relay.setChainCallback((chainId, jsonRpcUrl) => {
        this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
      });
      this._relay = relay;
    }
    return this._relay;
  }
}
WalletLinkSigner$1.WalletLinkSigner = WalletLinkSigner;
var provider = {};
Object.defineProperty(provider, "__esModule", { value: true });
provider.checkErrorForInvalidRequestArgs = provider.getCoinbaseInjectedProvider = provider.getCoinbaseInjectedSigner = provider.fetchRPCRequest = void 0;
const version_1$2 = version;
const error_1$4 = error;
async function fetchRPCRequest(request, chain) {
  if (!chain.rpcUrl)
    throw error_1$4.standardErrors.rpc.internal("No RPC URL set for chain");
  const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: "2.0", id: crypto.randomUUID() });
  const res = await window.fetch(chain.rpcUrl, {
    method: "POST",
    body: JSON.stringify(requestBody),
    mode: "cors",
    headers: { "Content-Type": "application/json", "X-Cbw-Sdk-Version": version_1$2.LIB_VERSION }
  });
  const response = await res.json();
  return response.result;
}
provider.fetchRPCRequest = fetchRPCRequest;
function getCoinbaseInjectedSigner() {
  const window2 = globalThis;
  return window2.coinbaseWalletSigner;
}
provider.getCoinbaseInjectedSigner = getCoinbaseInjectedSigner;
function getCoinbaseInjectedProvider({ metadata, preference }) {
  var _a, _b, _c;
  const window2 = globalThis;
  if (preference.options !== "smartWalletOnly") {
    const signer = getCoinbaseInjectedSigner();
    if (signer)
      return void 0;
    const extension = window2.coinbaseWalletExtension;
    if (extension) {
      const { appName, appLogoUrl, appChainIds } = metadata;
      (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds);
      return extension;
    }
  }
  const ethereum = (_b = window2.ethereum) !== null && _b !== void 0 ? _b : (_c = window2.top) === null || _c === void 0 ? void 0 : _c.ethereum;
  if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
    return ethereum;
  }
  return void 0;
}
provider.getCoinbaseInjectedProvider = getCoinbaseInjectedProvider;
function checkErrorForInvalidRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    return error_1$4.standardErrors.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: args
    });
  }
  const { method: method2, params } = args;
  if (typeof method2 !== "string" || method2.length === 0) {
    return error_1$4.standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: args
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    return error_1$4.standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: args
    });
  }
  return void 0;
}
provider.checkErrorForInvalidRequestArgs = checkErrorForInvalidRequestArgs;
Object.defineProperty(util$5, "__esModule", { value: true });
util$5.createSigner = util$5.fetchSignerType = util$5.storeSignerType = util$5.loadSignerType = void 0;
const SCWSigner_1 = SCWSigner$1;
const WalletLinkSigner_1 = WalletLinkSigner$1;
const error_1$3 = error;
const provider_1$2 = provider;
const ScopedLocalStorage_1$2 = ScopedLocalStorage$1;
const SIGNER_TYPE_KEY = "SignerType";
const storage = new ScopedLocalStorage_1$2.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
function loadSignerType() {
  return storage.getItem(SIGNER_TYPE_KEY);
}
util$5.loadSignerType = loadSignerType;
function storeSignerType(signerType) {
  storage.setItem(SIGNER_TYPE_KEY, signerType);
}
util$5.storeSignerType = storeSignerType;
async function fetchSignerType(params) {
  const { communicator, metadata } = params;
  listenForWalletLinkSessionRequest(communicator, metadata).catch(() => {
  });
  const request = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: params.preference
  };
  const { data } = await communicator.postRequestAndWaitForResponse(request);
  return data;
}
util$5.fetchSignerType = fetchSignerType;
function createSigner(params) {
  const { signerType, metadata, communicator, updateListener } = params;
  switch (signerType) {
    case "scw":
      return new SCWSigner_1.SCWSigner({
        metadata,
        updateListener,
        communicator
      });
    case "walletlink":
      return new WalletLinkSigner_1.WalletLinkSigner({
        metadata,
        updateListener
      });
    case "extension": {
      const injectedSigner = (0, provider_1$2.getCoinbaseInjectedSigner)();
      if (!injectedSigner) {
        throw error_1$3.standardErrors.rpc.internal("injected signer not found");
      }
      return injectedSigner;
    }
  }
}
util$5.createSigner = createSigner;
async function listenForWalletLinkSessionRequest(communicator, metadata) {
  await communicator.onMessage(({ event }) => event === "WalletLinkSessionRequest");
  const walletlink = new WalletLinkSigner_1.WalletLinkSigner({
    metadata
  });
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { session: walletlink.getSession() }
  });
  await walletlink.handshake();
  communicator.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: true }
  });
}
var Communicator$1 = {};
var util = {};
Object.defineProperty(util, "__esModule", { value: true });
util.closePopup = util.openPopup = void 0;
const error_1$2 = error;
const POPUP_WIDTH = 420;
const POPUP_HEIGHT = 540;
function openPopup(url) {
  const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
  const popup = window.open(url, "Smart Wallet", `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
  popup === null || popup === void 0 ? void 0 : popup.focus();
  if (!popup) {
    throw error_1$2.standardErrors.rpc.internal("Pop up window failed to open");
  }
  return popup;
}
util.openPopup = openPopup;
function closePopup(popup) {
  if (popup && !popup.closed) {
    popup.close();
  }
}
util.closePopup = closePopup;
Object.defineProperty(Communicator$1, "__esModule", { value: true });
Communicator$1.Communicator = void 0;
const version_1$1 = version;
const util_1$2 = util;
const constants_1 = constants;
const error_1$1 = error;
class Communicator {
  constructor(url = constants_1.CB_KEYS_URL) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
      this.postMessage(request);
      return await responsePromise;
    };
    this.onMessage = async (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin)
            return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    this.disconnect = () => {
      (0, util_1$2.closePopup)(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(error_1$1.standardErrors.provider.userRejectedRequest("Request rejected"));
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    this.waitForPopupLoaded = async () => {
      if (this.popup && !this.popup.closed)
        return this.popup;
      this.popup = (0, util_1$2.openPopup)(this.url);
      this.onMessage(({ event }) => event === "PopupUnload").then(this.disconnect).catch(() => {
      });
      return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
        this.postMessage({
          requestId: message.id,
          data: { version: version_1$1.LIB_VERSION }
        });
      }).then(() => {
        if (!this.popup)
          throw error_1$1.standardErrors.rpc.internal();
        return this.popup;
      });
    };
    this.url = new URL(url);
  }
}
Communicator$1.Communicator = Communicator;
var method = {};
Object.defineProperty(method, "__esModule", { value: true });
method.determineMethodCategory = void 0;
const mapping = {
  handshake: ["eth_requestAccounts"],
  sign: [
    "eth_ecRecover",
    "personal_sign",
    "personal_ecRecover",
    "eth_signTransaction",
    "eth_sendTransaction",
    "eth_signTypedData_v1",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_signTypedData",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_watchAsset",
    "wallet_getCapabilities",
    "wallet_sendCalls",
    "wallet_showCallsStatus"
  ],
  state: [
    // internal state
    "eth_chainId",
    "eth_accounts",
    "eth_coinbase",
    "net_version"
  ],
  deprecated: ["eth_sign", "eth_signTypedData_v2"],
  unsupported: ["eth_subscribe", "eth_unsubscribe"],
  fetch: []
};
function determineMethodCategory(method2) {
  for (const c in mapping) {
    const category = c;
    if (mapping[category].includes(method2)) {
      return category;
    }
  }
  return void 0;
}
method.determineMethodCategory = determineMethodCategory;
var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(CoinbaseWalletProvider$1, "__esModule", { value: true });
CoinbaseWalletProvider$1.CoinbaseWalletProvider = void 0;
const eventemitter3_1 = __importDefault(eventemitter3Exports);
const error_1 = error;
const serialize_1 = serialize;
const type_1 = type;
const util_1$1 = util$6;
const util_2 = util$5;
const provider_1$1 = provider;
const Communicator_1 = Communicator$1;
const method_1 = method;
const ScopedLocalStorage_1$1 = ScopedLocalStorage$1;
class CoinbaseWalletProvider extends eventemitter3_1.default {
  constructor(_a) {
    var _b, _c;
    var { metadata } = _a, _d = _a.preference, { keysUrl } = _d, preference = __rest(_d, ["keysUrl"]);
    super();
    this.accounts = [];
    this.handlers = {
      // eth_requestAccounts
      handshake: async (_) => {
        try {
          if (this.connected) {
            this.emit("connect", { chainId: (0, util_1$1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
            return this.accounts;
          }
          const signerType2 = await this.requestSignerSelection();
          const signer = this.initSigner(signerType2);
          const accounts = await signer.handshake();
          this.signer = signer;
          (0, util_2.storeSignerType)(signerType2);
          this.emit("connect", { chainId: (0, util_1$1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
          return accounts;
        } catch (error2) {
          this.handleUnauthorizedError(error2);
          throw error2;
        }
      },
      sign: async (request) => {
        if (!this.connected || !this.signer) {
          throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
        }
        try {
          return await this.signer.request(request);
        } catch (error2) {
          this.handleUnauthorizedError(error2);
          throw error2;
        }
      },
      fetch: (request) => (0, provider_1$1.fetchRPCRequest)(request, this.chain),
      state: (request) => {
        const getConnectedAccounts = () => {
          if (this.connected)
            return this.accounts;
          throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
        };
        switch (request.method) {
          case "eth_chainId":
          case "net_version":
            return this.chain.id;
          case "eth_accounts":
            return getConnectedAccounts();
          case "eth_coinbase":
            return getConnectedAccounts()[0];
          default:
            return this.handlers.unsupported(request);
        }
      },
      deprecated: ({ method: method2 }) => {
        throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method2} is deprecated.`);
      },
      unsupported: ({ method: method2 }) => {
        throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method2} is not supported.`);
      }
    };
    this.isCoinbaseWallet = true;
    this.updateListener = {
      onAccountsUpdate: ({ accounts, source }) => {
        if ((0, util_1$1.areAddressArraysEqual)(this.accounts, accounts))
          return;
        this.accounts = accounts;
        if (source === "storage")
          return;
        this.emit("accountsChanged", this.accounts);
      },
      onChainUpdate: ({ chain, source }) => {
        if (chain.id === this.chain.id && chain.rpcUrl === this.chain.rpcUrl)
          return;
        this.chain = chain;
        if (source === "storage")
          return;
        this.emit("chainChanged", (0, util_1$1.hexStringFromIntNumber)((0, type_1.IntNumber)(chain.id)));
      }
    };
    this.metadata = metadata;
    this.preference = preference;
    this.communicator = new Communicator_1.Communicator(keysUrl);
    this.chain = {
      id: (_c = (_b = metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1
    };
    const signerType = (0, util_2.loadSignerType)();
    this.signer = signerType ? this.initSigner(signerType) : null;
  }
  get connected() {
    return this.accounts.length > 0;
  }
  async request(args) {
    var _a;
    try {
      const invalidArgsError = (0, provider_1$1.checkErrorForInvalidRequestArgs)(args);
      if (invalidArgsError)
        throw invalidArgsError;
      const category = (_a = (0, method_1.determineMethodCategory)(args.method)) !== null && _a !== void 0 ? _a : "fetch";
      return this.handlers[category](args);
    } catch (error2) {
      return Promise.reject((0, serialize_1.serializeError)(error2, args.method));
    }
  }
  handleUnauthorizedError(error2) {
    const e = error2;
    if (e.code === error_1.standardErrorCodes.provider.unauthorized)
      this.disconnect();
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
    return await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    this.accounts = [];
    this.chain = { id: 1 };
    ScopedLocalStorage_1$1.ScopedLocalStorage.clearAll();
    this.emit("disconnect", error_1.standardErrors.provider.disconnected("User initiated disconnection"));
  }
  requestSignerSelection() {
    return (0, util_2.fetchSignerType)({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata
    });
  }
  initSigner(signerType) {
    return (0, util_2.createSigner)({
      signerType,
      metadata: this.metadata,
      communicator: this.communicator,
      updateListener: this.updateListener
    });
  }
}
CoinbaseWalletProvider$1.CoinbaseWalletProvider = CoinbaseWalletProvider;
Object.defineProperty(CoinbaseWalletSDK$1, "__esModule", { value: true });
CoinbaseWalletSDK$1.CoinbaseWalletSDK = void 0;
const wallet_logo_1 = walletLogo$1;
const CoinbaseWalletProvider_1 = CoinbaseWalletProvider$1;
const ScopedLocalStorage_1 = ScopedLocalStorage$1;
const version_1 = version;
const util_1 = util$6;
const provider_1 = provider;
class CoinbaseWalletSDK {
  constructor(metadata) {
    this.metadata = {
      appName: metadata.appName || "Dapp",
      appLogoUrl: metadata.appLogoUrl || (0, util_1.getFavicon)(),
      appChainIds: metadata.appChainIds || []
    };
    this.storeLatestVersion();
  }
  makeWeb3Provider(preference = { options: "all" }) {
    var _a;
    const params = { metadata: this.metadata, preference };
    return (_a = (0, provider_1.getCoinbaseInjectedProvider)(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider_1.CoinbaseWalletProvider(params);
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(type2, width = 240) {
    return (0, wallet_logo_1.walletLogo)(type2, width);
  }
  storeLatestVersion() {
    const versionStorage = new ScopedLocalStorage_1.ScopedLocalStorage("CBWSDK");
    versionStorage.setItem("VERSION", version_1.LIB_VERSION);
  }
}
CoinbaseWalletSDK$1.CoinbaseWalletSDK = CoinbaseWalletSDK;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CoinbaseWalletSDK = void 0;
  const CoinbaseWalletSDK_1 = CoinbaseWalletSDK$1;
  exports.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
  var CoinbaseWalletSDK_2 = CoinbaseWalletSDK$1;
  Object.defineProperty(exports, "CoinbaseWalletSDK", { enumerable: true, get: function() {
    return CoinbaseWalletSDK_2.CoinbaseWalletSDK;
  } });
})(dist);
const index = /* @__PURE__ */ getDefaultExportFromCjs(dist);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [dist]);
export {
  index$1 as i
};