import React from 'react';
import PropTypes from 'prop-types';
import iconWrapper from '../iconWrapper';

import { cyan } from '../colours';

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: cyan
};

function ScalesOfJustice({ fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      path(
        fill=fill
        d="M17.5996964,19.080282 C15.1731177,19.080282 13.19907,17.1062343 13.19907,14.6796556 C13.1987033,14.6308819 13.2071378,14.5817416 13.2265739,14.5344349 C13.2265739,14.5344349 17.1024256,5.02688152 17.1024256,5.02688152 C16.8534235,4.89926335 16.6590625,4.67923203 16.5637156,4.41189398 C16.5637156,4.41189398 13.19907,4.41189398 13.19907,4.41189398 C13.007276,5.32502396 12.2852066,6.05112731 11.3658424,6.20808299 C11.3658424,6.20808299 11.3658424,20.543857 11.3658424,20.543857 C11.3658424,20.543857 14.2992266,20.543857 14.2992266,20.543857 C14.5016554,20.543857 14.6659455,20.708147 14.6659455,20.9105758 C14.6659455,21.1130046 14.5016554,21.2772947 14.2992266,21.2772947 C14.2992266,21.2772947 11.0148924,21.2772947 11.0148924,21.2772947 C10.9829879,21.2772947 7.69865371,21.2772947 7.69865371,21.2772947 C7.49622489,21.2772947 7.33193484,21.1130046 7.33193484,20.9105758 C7.33193484,20.708147 7.49622489,20.543857 7.69865371,20.543857 C7.69865371,20.543857 10.6320379,20.543857 10.6320379,20.543857 C10.6320379,20.543857 10.6320379,6.20881643 10.6320379,6.20881643 C9.70973998,6.05369435 8.98473678,5.32722427 8.83181501,4.40382616 C8.79220937,4.41189398 5.42756376,4.41189398 5.42756376,4.41189398 C5.33295029,4.67703172 5.14078961,4.8963296 4.89435453,5.02394777 C4.89435453,5.02394777 8.7713064,14.5344349 8.7713064,14.5344349 C8.7907425,14.5817416 8.79917703,14.6305152 8.79844359,14.6785554 C8.79881031,17.1062343 6.82439593,19.080282 4.3981839,19.080282 C1.97160515,19.080282 -0.00207579229,17.1062343 -0.00207579229,14.6796556 C-0.00280923003,14.6308819 0.00562530393,14.5817416 0.0250614039,14.5344349 C0.0250614039,14.5344349 3.90237999,5.02358105 3.90237999,5.02358105 C3.54372894,4.84205521 3.29509355,4.47386947 3.29509355,4.04517511 C3.29509355,3.4386221 3.78833042,2.94501851 4.39488343,2.94501851 C4.8723514,2.94501851 5.27574215,3.25269564 5.42756376,3.67845624 C5.42756376,3.67845624 8.79220937,3.67845624 8.79220937,3.67845624 C8.98473678,2.76312595 9.70973998,2.03665587 10.6320379,1.88190051 C10.6320379,1.88190051 10.6320379,1.11142417 10.6320379,1.11142417 C10.6320379,0.908995353 10.796328,0.7447053 10.9991235,0.7447053 C11.2015523,0.7447053 11.3658424,0.908995353 11.3658424,1.11142417 C11.3658424,1.11142417 11.3658424,1.88226723 11.3658424,1.88226723 C12.2852066,2.03958962 13.007276,2.76532626 13.1598311,3.68652406 C13.19907,3.67845624 16.5637156,3.67845624 16.5637156,3.67845624 C16.7159039,3.25269564 17.118928,2.94501851 17.5963959,2.94501851 C18.202949,2.94501851 18.6965526,3.4386221 18.6965526,4.04517511 C18.6965526,4.47166915 18.4501175,4.83838802 18.0944002,5.0206473 C18.0944002,5.0206473 21.9728189,14.5344349 21.9728189,14.5344349 C21.992255,14.5817416 22.0006895,14.6305152 21.9999561,14.6785554 C21.9999561,17.1062343 20.0259084,19.080282 17.5996964,19.080282 Z M4.3981839,18.3468442 C6.29632076,18.3468442 7.86221032,16.8968378 8.04666991,15.0463744 C8.04666991,15.0463744 0.749697886,15.0463744 0.749697886,15.0463744 C0.934157477,16.8968378 2.50004704,18.3468442 4.3981839,18.3468442 Z M0.907020281,14.3129367 C0.907020281,14.3129367 7.88934752,14.3129367 7.88934752,14.3129367 C7.88934752,14.3129367 4.3981839,5.75005112 4.3981839,5.75005112 C4.3981839,5.75005112 0.907020281,14.3129367 0.907020281,14.3129367 Z M4.39488343,3.67845624 C4.19282133,3.67845624 4.02816456,3.84311301 4.02816456,4.04517511 C4.02816456,4.2472372 4.19282133,4.41189398 4.39488343,4.41189398 C4.59731225,4.41189398 4.7616023,4.2472372 4.7616023,4.04517511 C4.7616023,3.84311301 4.59731225,3.67845624 4.39488343,3.67845624 Z M10.995823,2.57829964 C10.1868412,2.57829964 9.52894758,3.23656001 9.52894758,4.04517511 C9.52894758,4.85415693 10.1868412,5.51205058 10.995823,5.51205058 C11.8044382,5.51205058 12.4626985,4.85415693 12.4626985,4.04517511 C12.4626985,3.23656001 11.8044382,2.57829964 10.995823,2.57829964 Z M17.5963959,3.67845624 C17.3943339,3.67845624 17.2296771,3.84311301 17.2296771,4.04517511 C17.2296771,4.2472372 17.3943339,4.41189398 17.5963959,4.41189398 C17.798458,4.41189398 17.9631148,4.2472372 17.9631148,4.04517511 C17.9631148,3.84311301 17.798458,3.67845624 17.5963959,3.67845624 Z M17.5996964,5.75005112 C17.5996964,5.75005112 14.1085328,14.3129367 14.1085328,14.3129367 C14.1085328,14.3129367 21.09086,14.3129367 21.09086,14.3129367 C21.09086,14.3129367 17.5996964,5.75005112 17.5996964,5.75005112 Z M13.9512104,15.0463744 C14.13567,16.8968378 15.7011928,18.3468442 17.5996964,18.3468442 C19.4978333,18.3468442 21.0637228,16.8968378 21.2481824,15.0463744 C21.2481824,15.0463744 13.9512104,15.0463744 13.9512104,15.0463744 Z M17.5963959,17.6134065 C16.470569,17.6134065 15.4305543,16.954046 14.9468521,15.9338341 C14.8599398,15.7508414 14.9380509,15.5322769 15.1210436,15.4453645 C15.3040363,15.3588189 15.522234,15.4365633 15.6095131,15.619556 C15.9725648,16.385265 16.7525758,16.8799688 17.5963959,16.8799688 C17.7988248,16.8799688 17.9631148,17.0442588 17.9631148,17.2466876 C17.9631148,17.4491164 17.7988248,17.6134065 17.5963959,17.6134065 Z M4.39488343,17.6134065 C3.26942323,17.6134065 2.22940852,16.954046 1.74533961,15.9338341 C1.65879396,15.7508414 1.73690508,15.5322769 1.91953107,15.4453645 C2.10252379,15.3588189 2.32145495,15.4365633 2.40836732,15.619556 C2.77105228,16.385265 3.55106332,16.8799688 4.39488343,16.8799688 C4.59767896,16.8799688 4.7616023,17.0442588 4.7616023,17.2466876 C4.7616023,17.4491164 4.59767896,17.6134065 4.39488343,17.6134065 Z"
      )
  `;
}

ScalesOfJustice.defaultProps = defaultProps;
ScalesOfJustice.propTypes = propTypes;

export default iconWrapper(ScalesOfJustice);
