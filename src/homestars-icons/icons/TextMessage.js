import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

import { cyan, white } from "../colours";

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: cyan
};

function TextMessage({ fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      path( fill=white fillRule="nonzero" d="M16.3375959,22 C16.3375959,22 6.09682097,22 6.09682097,22 C5.49190537,22 5,21.5064749 5,20.9000183 C5,20.9000183 5,1.09998167 5,1.09998167 C5,0.493525108 5.49190537,0 6.09682097,0 C6.09682097,0 16.3375959,0 16.3375959,0 C16.9425115,0 17.4347826,0.493525108 17.4347826,1.09998167 C17.4347826,1.09998167 17.4347826,20.9000183 17.4347826,20.9000183 C17.4347826,21.5064749 16.9425115,22 16.3375959,22 Z")
      path( fill=white fillRule="nonzero" d="M16.7033248 1.09998167C16.7033248.8979517 16.5391125.733321111 16.3375959.733321111 16.3375959.733321111 6.09682097.733321111 6.09682097.733321111 5.89530435.733321111 5.73109207.8979517 5.73109207 1.09998167 5.73109207 1.09998167 5.73109207 2.93328443 5.73109207 2.93328443 5.73109207 2.93328443 16.7033248 2.93328443 16.7033248 2.93328443 16.7033248 2.93328443 16.7033248 1.09998167 16.7033248 1.09998167zM16.7033248 3.66660557C16.7033248 3.66660557 5.73109207 3.66660557 5.73109207 3.66660557 5.73109207 3.66660557 5.73109207 16.8667522 5.73109207 16.8667522 5.73109207 16.8667522 16.7033248 16.8667522 16.7033248 16.8667522 16.7033248 16.8667522 16.7033248 3.66660557 16.7033248 3.66660557zM16.7033248 17.6000733C16.7033248 17.6000733 5.73109207 17.6000733 5.73109207 17.6000733 5.73109207 17.6000733 5.73109207 20.9000183 5.73109207 20.9000183 5.73109207 21.1020483 5.89530435 21.2666789 6.09682097 21.2666789 6.09682097 21.2666789 16.3375959 21.2666789 16.3375959 21.2666789 16.5391125 21.2666789 16.7033248 21.1020483 16.7033248 20.9000183 16.7033248 20.9000183 16.7033248 17.6000733 16.7033248 17.6000733z")
      path( fill=white fillRule="nonzero" d="M11.2173913,20.5333578 C10.61211,20.5333578 10.1202046,20.0398327 10.1202046,19.4333761 C10.1202046,18.8269195 10.61211,18.3333944 11.2173913,18.3333944 C11.8223069,18.3333944 12.314578,18.8269195 12.314578,19.4333761 C12.314578,20.0398327 11.8223069,20.5333578 11.2173913,20.5333578 Z")
      path( fill=cyan fillRule="nonzero" stroke="#27A9E1" d="M11.2173913,19.0667156 C11.015509,19.0667156 10.8516624,19.2309795 10.8516624,19.4333761 C10.8516624,19.6354061 11.015509,19.8000367 11.2173913,19.8000367 C11.4189079,19.8000367 11.5831202,19.6354061 11.5831202,19.4333761 C11.5831202,19.2309795 11.4189079,19.0667156 11.2173913,19.0667156 Z")
      path( fill=white fillRule="nonzero" d="M10.4859335,1.46664222 C10.4859335,1.46664222 11.9484834,1.46664222 11.9484834,1.46664222 C12.1507315,1.46664222 12.314578,1.63090615 12.314578,1.83330278 C12.314578,2.03606607 12.1507315,2.19996333 11.9484834,2.19996333 C11.9484834,2.19996333 10.4859335,2.19996333 10.4859335,2.19996333 C10.2836854,2.19996333 10.1202046,2.03606607 10.1202046,1.83330278 C10.1202046,1.63090615 10.2836854,1.46664222 10.4859335,1.46664222 Z")
      path( fill=cyan fillRule="nonzero" d="M16.3375959,22 C16.3375959,22 6.09682097,22 6.09682097,22 C5.49190537,22 5,21.5064749 5,20.9000183 C5,20.9000183 5,1.09998167 5,1.09998167 C5,0.493525108 5.49190537,0 6.09682097,0 C6.09682097,0 16.3375959,0 16.3375959,0 C16.9425115,0 17.4347826,0.493525108 17.4347826,1.09998167 C17.4347826,1.09998167 17.4347826,20.9000183 17.4347826,20.9000183 C17.4347826,21.5064749 16.9425115,22 16.3375959,22 Z M16.7033248,1.09998167 C16.7033248,0.8979517 16.5391125,0.733321111 16.3375959,0.733321111 C16.3375959,0.733321111 6.09682097,0.733321111 6.09682097,0.733321111 C5.89530435,0.733321111 5.73109207,0.8979517 5.73109207,1.09998167 C5.73109207,1.09998167 5.73109207,2.93328443 5.73109207,2.93328443 C5.73109207,2.93328443 16.7033248,2.93328443 16.7033248,2.93328443 C16.7033248,2.93328443 16.7033248,1.09998167 16.7033248,1.09998167 Z M16.7033248,3.66660557 C16.7033248,3.66660557 5.73109207,3.66660557 5.73109207,3.66660557 C5.73109207,3.66660557 5.73109207,16.8667522 5.73109207,16.8667522 C5.73109207,16.8667522 16.7033248,16.8667522 16.7033248,16.8667522 C16.7033248,16.8667522 16.7033248,3.66660557 16.7033248,3.66660557 Z M16.7033248,17.6000733 C16.7033248,17.6000733 5.73109207,17.6000733 5.73109207,17.6000733 C5.73109207,17.6000733 5.73109207,20.9000183 5.73109207,20.9000183 C5.73109207,21.1020483 5.89530435,21.2666789 6.09682097,21.2666789 C6.09682097,21.2666789 16.3375959,21.2666789 16.3375959,21.2666789 C16.5391125,21.2666789 16.7033248,21.1020483 16.7033248,20.9000183 C16.7033248,20.9000183 16.7033248,17.6000733 16.7033248,17.6000733 Z M11.2173913,20.5333578 C10.61211,20.5333578 10.1202046,20.0398327 10.1202046,19.4333761 C10.1202046,18.8269195 10.61211,18.3333944 11.2173913,18.3333944 C11.8223069,18.3333944 12.314578,18.8269195 12.314578,19.4333761 C12.314578,20.0398327 11.8223069,20.5333578 11.2173913,20.5333578 Z M11.2173913,19.0667156 C11.015509,19.0667156 10.8516624,19.2309795 10.8516624,19.4333761 C10.8516624,19.6354061 11.015509,19.8000367 11.2173913,19.8000367 C11.4189079,19.8000367 11.5831202,19.6354061 11.5831202,19.4333761 C11.5831202,19.2309795 11.4189079,19.0667156 11.2173913,19.0667156 Z M10.4859335,1.46664222 C10.4859335,1.46664222 11.9484834,1.46664222 11.9484834,1.46664222 C12.1507315,1.46664222 12.314578,1.63090615 12.314578,1.83330278 C12.314578,2.03606607 12.1507315,2.19996333 11.9484834,2.19996333 C11.9484834,2.19996333 10.4859335,2.19996333 10.4859335,2.19996333 C10.2836854,2.19996333 10.1202046,2.03606607 10.1202046,1.83330278 C10.1202046,1.63090615 10.2836854,1.46664222 10.4859335,1.46664222 Z")
      path( fill=cyan fillRule="nonzero" d="M14.2236738,12.5006258 C14.2236738,12.5006258 13.0118106,12.5006258 13.0118106,12.5006258 C13.0118106,12.5006258 13.0118106,13.4551523 13.0118106,13.4551523 C13.0118106,13.5033559 12.9822382,13.5469061 12.9369099,13.5654001 C12.9218813,13.5714852 12.9061255,13.5744681 12.8904909,13.5744681 C12.8589793,13.5744681 12.8280737,13.5622979 12.8048036,13.5395086 C12.8048036,13.5395086 11.7495288,12.5006258 11.7495288,12.5006258 C11.7495288,12.5006258 8.64854541,12.5006258 8.64854541,12.5006258 C8.3144013,12.5006258 8.04255319,12.2330004 8.04255319,11.9040467 C8.04255319,11.9040467 8.04255319,8.08594076 8.04255319,8.08594076 C8.04255319,7.75698707 8.3144013,7.4893617 8.64854541,7.4893617 C8.64854541,7.4893617 14.2236738,7.4893617 14.2236738,7.4893617 C14.5578179,7.4893617 14.8297872,7.75698707 14.8297872,8.08594076 C14.8297872,8.08594076 14.8297872,11.9040467 14.8297872,11.9040467 C14.8297872,12.2330004 14.5578179,12.5006258 14.2236738,12.5006258 Z")
      path( fill=cyan fillRule="nonzero" d="M14.5873903,8.08594076 C14.5873903,7.88859241 14.4243784,7.72799332 14.223795,7.72799332 C14.223795,7.72799332 8.6486666,7.72799332 8.6486666,7.72799332 C8.44820437,7.72799332 8.28507127,7.88859241 8.28507127,8.08594076 C8.28507127,8.08594076 8.28507127,11.9040467 8.28507127,11.9040467 C8.28507127,12.1013951 8.44820437,12.2619942 8.6486666,12.2619942 C8.6486666,12.2619942 11.7998261,12.2619942 11.7998261,12.2619942 C11.8320649,12.2619942 11.8628493,12.2745223 11.8855134,12.2969537 C11.8855134,12.2969537 12.7694137,13.1671239 12.7694137,13.1671239 C12.7694137,13.1671239 12.7694137,12.38131 12.7694137,12.38131 C12.7694137,12.3154476 12.8237106,12.2619942 12.8906121,12.2619942 C12.8906121,12.2619942 14.223795,12.2619942 14.223795,12.2619942 C14.4243784,12.2619942 14.5873903,12.1013951 14.5873903,11.9040467 C14.5873903,11.9040467 14.5873903,8.08594076 14.5873903,8.08594076 Z")
      path( fill=white fillRule="nonzero" d="M9.98184949,10.3529412 C9.71460693,10.3529412 9.49705571,10.1388886 9.49705571,9.87567792 C9.49705571,9.61246725 9.71460693,9.39841469 9.98184949,9.39841469 C10.2492133,9.39841469 10.4666433,9.61246725 10.4666433,9.87567792 C10.4666433,10.1388886 10.2492133,10.3529412 9.98184949,10.3529412 Z")
      path( fill=white fillRule="nonzero" d="M9.9894526,9.63704631 C9.85157761,9.63704631 9.7394526,9.74917131 9.7394526,9.8870463 C9.7394526,10.0249213 9.85157761,10.1370463 9.9894526,10.1370463 C10.1273276,10.1370463 10.2394526,10.0249213 10.2394526,9.8870463 C10.2394526,9.74917131 10.1273276,9.63704631 9.9894526,9.63704631 Z")
      path( fill=white fillRule="nonzero" d="M11.4362308,10.3529412 C11.1689882,10.3529412 10.951437,10.1388886 10.951437,9.87567792 C10.951437,9.61246725 11.1689882,9.39841469 11.4362308,9.39841469 C11.7035946,9.39841469 11.9210246,9.61246725 11.9210246,9.87567792 C11.9210246,10.1388886 11.7035946,10.3529412 11.4362308,10.3529412 Z")
      path( fill=white fillRule="nonzero" d="M11.4436503,9.63704631 C11.3059347,9.63704631 11.1937127,9.74917131 11.1937127,9.8870463 C11.1937127,10.0249213 11.3059347,10.1370463 11.4436503,10.1370463 C11.5814908,10.1370463 11.6937127,10.0249213 11.6937127,9.8870463 C11.6937127,9.74917131 11.5814908,9.63704631 11.4436503,9.63704631 Z")
      path( fill=white fillRule="nonzero" d="M12.8906121,10.3529412 C12.6233696,10.3529412 12.4058184,10.1388886 12.4058184,9.87567792 C12.4058184,9.61246725 12.6233696,9.39841469 12.8906121,9.39841469 C13.1579759,9.39841469 13.3754059,9.61246725 13.3754059,9.87567792 C13.3754059,10.1388886 13.1579759,10.3529412 12.8906121,10.3529412 Z")
      path( fill=white fillRule="nonzero" d="M12.8980316,9.63704631 C12.760191,9.63704631 12.648094,9.74917131 12.648094,9.8870463 C12.648094,10.0249213 12.760191,10.1370463 12.8980316,10.1370463 C13.0358721,10.1370463 13.148094,10.0249213 13.148094,9.8870463 C13.148094,9.74917131 13.0358721,9.63704631 12.8980316,9.63704631 Z")
  `;
}

TextMessage.propTypes = propTypes;
TextMessage.defaultProps = defaultProps;

export default iconWrapper(TextMessage);
