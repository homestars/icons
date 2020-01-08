import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan, trueBlack } from "../colours";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

const defaultProps = {
  fill: trueBlack,
  stroke: cyan
};

function BathTub({ fill, stroke, strokeWidth }) {
  return (
    <svg viewBox="0 0 43 38">
      <g transform="translate(0.000000, 16.140351)">
        <path
          d="M2.25779464,1.61403509 C1.86665625,1.61403509 1.60710268,1.83394737 1.60710268,1.97941228 L1.60710268,4.27497368 C1.60710268,4.4204386 1.86665625,4.64035088 2.25779464,4.64035088 L39.5278393,4.64035088 C39.9189777,4.64035088 40.1785313,4.4204386 40.1785313,4.27497368 L40.1785313,1.97941228 C40.1785313,1.83394737 39.9189777,1.61403509 39.5278393,1.61403509 L2.25779464,1.61403509 Z M39.5278393,6.25438596 L2.25779464,6.25438596 C1.01286161,6.25438596 -4.01785704e-05,5.36646491 -4.01785704e-05,4.27497368 L-4.01785704e-05,1.97941228 C-4.01785704e-05,0.887921053 1.01286161,0 2.25779464,0 L39.5278393,0 C40.7729732,0 41.7856741,0.887921053 41.7856741,1.97941228 L41.7856741,4.27497368 C41.7856741,5.36646491 40.7729732,6.25438596 39.5278393,6.25438596 L39.5278393,6.25438596 Z"
          stroke={stroke}
          fill={fill}
          strokeWidth={strokeWidth}
        ></path>
      </g>
      <path
        d="M33.8635045,34.0964912 L8.92667411,34.0964912 C5.55529018,34.0964912 2.8125,30.7677456 2.8125,26.6761667 L2.8125,23.1571667 C2.8125,22.9491579 2.81973214,22.7389298 2.83379464,22.5325351 C2.86433036,22.0878684 3.24924107,21.7523509 3.69060268,21.7828158 C4.13337054,21.8132807 4.46765625,22.1984298 4.43712054,22.6430965 C4.42546875,22.8129737 4.41964286,22.986079 4.41964286,23.1571667 L4.41964286,26.6761667 C4.41964286,29.877807 6.44162946,32.4824561 8.92667411,32.4824561 L33.8635045,32.4824561 C36.34875,32.4824561 38.3705357,29.877807 38.3705357,26.6761667 L38.3705357,23.1571667 C38.3705357,22.8462632 38.35125,22.5339474 38.3128795,22.2290965 C38.2576339,21.7868509 38.5696205,21.3831404 39.0099777,21.3276579 C39.4509375,21.272579 39.8521205,21.5855 39.907567,22.0277456 C39.9539732,22.3989737 39.9776786,22.779079 39.9776786,23.1571667 L39.9776786,26.6761667 C39.9776786,30.7677456 37.2348884,34.0964912 33.8635045,34.0964912"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M6.22767856,17.1491228 C5.78390624,17.1491228 5.42410714,16.7877807 5.42410714,16.3421053 L5.42410714,5.51455263 C5.42410714,2.47391228 7.88745531,0 10.9153124,0 L10.9822097,0 C12.0977677,0 13.7045088,0.739833333 14.4626784,1.97779825 C14.6951114,2.3575 14.5771873,2.85442105 14.199107,3.08805263 C13.8206248,3.3212807 13.3260266,3.20285088 13.0935936,2.82335088 C12.6349552,2.07403509 11.5545534,1.61403509 10.9822097,1.61403509 L10.9153124,1.61403509 C8.77359368,1.61403509 7.03124997,3.36385088 7.03124997,5.51455263 L7.03124997,16.3421053 C7.03124997,16.7877807 6.67145087,17.1491228 6.22767856,17.1491228"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M17.1207317,2.23723418 C16.0262674,2.23723418 15.0467139,2.63529558 14.2087898,3.41991838 C11.9242363,5.55952362 12.8917363,7.97876043 13.6125398,9.16568147 L19.5955307,2.82918154 C18.9830084,2.5463219 18.0916468,2.23723418 17.1207317,2.23723418 M13.5269595,11.2982257 L13.5120935,11.2982257 C13.2864908,11.2982257 13.0729417,11.1636555 12.9236783,10.9933748 C11.501156,9.37005894 9.70959358,5.44230448 13.1127185,2.25498862 C14.2578077,1.18246228 15.6062005,0.630865781 17.1207317,0.630865781 C19.4239683,0.630865781 21.2772048,1.91664651 21.3549503,1.97172546 C21.5459994,2.10669914 21.6691468,2.31632196 21.6924503,2.54975179 C21.7157539,2.78297986 21.6366021,3.01419039 21.4758878,3.18406759 L14.1101515,11.0159713 C13.9582765,11.1769713 13.747339,11.2982257 13.5269595,11.2982257"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M22.5731849,6.89590437 C22.413676,6.89590437 22.2525599,6.84849208 22.1121358,6.74922893 L21.125551,6.05378155 C20.7623367,5.79795699 20.6747474,5.29457979 20.9296805,4.92980786 C21.1846135,4.56483417 21.6858412,4.47686926 22.0490554,4.73289557 L23.0356402,5.4285447 C23.3988545,5.68436927 23.4864438,6.18774646 23.2315108,6.5525184 C23.0752161,6.77626401 22.826109,6.89590437 22.5731849,6.89590437"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M24.5178688,8.26700726 C24.3069313,8.26700726 24.1000116,8.18005112 23.949342,8.03095463 C23.8006813,7.88165638 23.7142973,7.67183182 23.7142973,7.45998972 C23.7142973,7.24794586 23.8006813,7.03812129 23.949342,6.8890248 C24.1000116,6.73972656 24.3069313,6.65297217 24.5178688,6.65297217 C24.7308152,6.65297217 24.9377348,6.73972656 25.0863955,6.8890248 C25.2370652,7.04034059 25.3214402,7.24794586 25.3214402,7.45998972 C25.3214402,7.67183182 25.2370652,7.87963884 25.0863955,8.03095463 C24.9377348,8.18005112 24.7308152,8.26700726 24.5178688,8.26700726"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M20.1320555,9.58490665 C19.9520555,9.58490665 19.7712519,9.52458209 19.6215868,9.4007049 L18.6912519,8.63081018 C18.3487296,8.34754703 18.2999126,7.83892424 18.5821671,7.49493302 C18.8640198,7.15114355 19.3704707,7.10151197 19.7131939,7.38538039 L20.6435287,8.15507335 C20.9860511,8.4383365 21.034868,8.94716105 20.7526136,9.29115227 C20.5939082,9.48483648 20.3638859,9.58490665 20.1320555,9.58490665"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M22.0709527,11.1883099 C21.8600152,11.1883099 21.6530956,11.103573 21.5044349,10.9522572 C21.3537652,10.802959 21.2693902,10.5953537 21.2693902,10.3833099 C21.2693902,10.1694502 21.3537652,9.96164319 21.502426,9.81234494 C21.6530956,9.66102915 21.8600152,9.57427477 22.0709527,9.57427477 C22.2838992,9.57427477 22.4908188,9.66102915 22.6394795,9.81234494 C22.7901492,9.96164319 22.8765331,10.1694502 22.8765331,10.3833099 C22.8765331,10.5953537 22.7901492,10.802959 22.6394795,10.9522572 C22.4908188,11.103573 22.2838992,11.1883099 22.0709527,11.1883099"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M17.5260534,12.3367761 C17.3376159,12.3367761 17.1485757,12.2706007 16.9958971,12.1360305 L16.0904731,11.3368814 C15.7571918,11.0425217 15.7244463,10.5326884 16.0173481,10.1977761 C16.3102498,9.86306554 16.818107,9.83038133 17.1513882,10.1243375 L18.0568123,10.9234866 C18.3900935,11.2178463 18.4228391,11.7276796 18.1299373,12.0625919 C17.971031,12.2439691 17.7490444,12.3367761 17.5260534,12.3367761"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M19.4111926,13.9986877 C19.1982462,13.9986877 18.9913266,13.9139509 18.8426658,13.7626351 C18.6919962,13.6135386 18.6076212,13.4057316 18.6076212,13.1916702 C18.6076212,12.9798281 18.6919962,12.7722228 18.8426658,12.620907 C18.9913266,12.4716088 19.1982462,12.3846526 19.4111926,12.3846526 C19.6221301,12.3846526 19.8290498,12.4716088 19.9777105,12.620907 C20.1283801,12.7722228 20.2147641,12.9798281 20.2147641,13.1916702 C20.2147641,13.403714 20.1283801,13.6113193 19.9777105,13.7626351 C19.8290498,13.9139509 19.6221301,13.9986877 19.4111926,13.9986877"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M32.6854087,31.2516323 C32.32119,31.2516323 31.991123,31.0012551 31.9039355,30.6296235 C31.8022837,30.1958516 32.069873,29.7610709 32.5017926,29.6587814 C33.9930203,29.305913 34.8833774,28.1964656 34.8833774,26.6911762 C34.8833774,26.2455007 35.2431765,25.8841586 35.6869488,25.8841586 C36.1307211,25.8841586 36.4905202,26.2455007 36.4905202,26.6911762 C36.4905202,28.9278253 35.0696051,30.7093165 32.870431,31.2300446 C32.8083551,31.2445709 32.7464801,31.2516323 32.6854087,31.2516323"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M35.9507018,25.0175446 L35.933425,25.0175446 C35.4898536,25.0175446 35.1561705,24.7191499 35.1561705,24.2734744 L35.1561705,24.2726674 L35.1561705,24.2718604 L35.1561705,24.2716587 L35.1561705,24.2676236 L35.1561705,24.2660095 L35.1561705,24.265606 L35.1561705,24.2230358 L35.1561705,24.2218253 L35.1525545,24.196606 C35.1527554,24.1919657 35.1509473,24.2292902 35.1509473,24.2244481 L35.1501438,24.2105271 L35.1525545,24.2105271 C35.1539607,24.2105271 35.1555679,24.1407201 35.1575768,24.1270008 C35.2477777,23.3873692 35.9231794,23.3573078 35.9535143,23.3573078 C36.1694741,23.3573078 36.3765946,23.4591937 36.527666,23.6143429 C36.7367955,23.828606 36.7562821,24.0087727 36.756483,24.2105271 L36.7568848,24.2105271 L36.7633133,24.1986236 L36.7633133,24.2036674 L36.7623089,24.2999043 L36.7633133,24.300106 L36.7633133,24.300913 L36.7633133,24.3049481 L36.7633133,24.3065622 C36.7633133,24.7459832 36.3864384,25.0175446 35.9507018,25.0175446"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M11.5831208,36.3157891 L11.5616253,36.3157891 C9.5800181,36.3157891 8.10526359,34.1394646 7.94354484,33.8896926 C7.70166983,33.5160435 7.80713858,33.031026 8.17899127,32.7881137 C8.55084396,32.5449997 9.0480538,32.6289295 9.29033059,33.0015699 C9.58162525,33.44664 10.6244601,34.701754 11.5750851,34.701754 L11.5843262,34.701754 C12.4981878,34.701754 13.9207102,33.6040084 14.6051522,32.8902014 C14.9129201,32.5696137 15.421179,32.5740523 15.7412013,32.8829383 C16.0608219,33.1918242 16.0712683,33.6798681 15.7641031,34.0010611 C15.5348844,34.2411488 13.4759334,36.3157891 11.5831208,36.3157891"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M29.0607987,36.3157891 L29.0393031,36.3157891 C27.0576959,36.3157891 25.5829414,34.1394646 25.4212226,33.8896926 C25.1793476,33.5160435 25.2848164,33.031026 25.6566691,32.7881137 C26.0285218,32.5449997 26.5259325,32.6289295 26.7680084,33.0015699 C27.0593031,33.44664 28.1021379,34.701754 29.0527629,34.701754 L29.062004,34.701754 C29.9758656,34.701754 31.398388,33.6040084 32.08283,32.8902014 C32.3905979,32.5696137 32.8988568,32.5740523 33.2188791,32.8829383 C33.5384997,33.1918242 33.5489461,33.6798681 33.2417809,34.0010611 C33.0125622,34.2411488 30.9536112,36.3157891 29.0607987,36.3157891"
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      ></path>
    </svg>
  );
}

BathTub.propTypes = propTypes;
BathTub.defaultProps = defaultProps;

export default iconWrapper(BathTub);
