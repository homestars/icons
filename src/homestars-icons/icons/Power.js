import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import { cyan } from "../colours";

const propTypes = {
  stroke: PropTypes.string
};

const defaultProps = {
  stroke: cyan
};

function Power({ stroke }) {
  return (
    <svg viewBox="0 0 45 43">
      <defs>
        <polygon
          id="path-1"
          points="0 0.0867543874 44.598153 0.0867543874 44.598153 42.9736857 0 42.9736857"
        ></polygon>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-938.000000, -746.000000)">
          <g id="Group" transform="translate(240.000000, 714.000000)">
            <g transform="translate(640.000000, 0.000000)">
              <g transform="translate(58.000000, 31.000000)">
                <g transform="translate(0.000000, 0.807018)">
                  <path
                    d="M30.7530805,25.2812967 L25.3289734,25.2812967 C24.885201,25.2812967 24.5254019,24.9199546 24.5254019,24.4742792 C24.5254019,24.0286037 24.885201,23.6672616 25.3289734,23.6672616 L29.9495091,23.6672616 L29.9495091,20.0356827 L14.8825448,20.0356827 L14.8825448,23.6672616 L21.7129019,23.6672616 C22.1566743,23.6672616 22.5164734,24.0286037 22.5164734,24.4742792 C22.5164734,24.9199546 22.1566743,25.2812967 21.7129019,25.2812967 L14.0789734,25.2812967 C13.635201,25.2812967 13.2754019,24.9199546 13.2754019,24.4742792 L13.2754019,19.2286651 C13.2754019,18.7829897 13.635201,18.4216476 14.0789734,18.4216476 L30.7530805,18.4216476 C31.1968528,18.4216476 31.5566519,18.7829897 31.5566519,19.2286651 L31.5566519,24.4742792 C31.5566519,24.9199546 31.1968528,25.2812967 30.7530805,25.2812967"
                    fill={stroke}
                  ></path>
                  <path
                    d="M18.9004019,17.4128764 C18.4566296,17.4128764 18.0968305,17.0515343 18.0968305,16.6058589 L18.0968305,12.3690168 C18.0968305,11.9233413 18.4566296,11.5619992 18.9004019,11.5619992 C19.3441743,11.5619992 19.7039734,11.9233413 19.7039734,12.3690168 L19.7039734,16.6058589 C19.7039734,17.0515343 19.3441743,17.4128764 18.9004019,17.4128764"
                    fill={stroke}
                  ></path>
                  <path
                    d="M26.3334376,17.4128764 C25.8896653,17.4128764 25.5298662,17.0515343 25.5298662,16.6058589 L25.5298662,12.3690168 C25.5298662,11.9233413 25.8896653,11.5619992 26.3334376,11.5619992 C26.77721,11.5619992 27.1370091,11.9233413 27.1370091,12.3690168 L27.1370091,16.6058589 C27.1370091,17.0515343 26.77721,17.4128764 26.3334376,17.4128764"
                    fill={stroke}
                  ></path>
                  <path
                    d="M22.4077903,34.2307989 C18.1233482,34.2307989 14.637656,30.3728516 14.637656,25.6308166 C14.637656,25.1998693 14.6669864,24.7658956 14.7244418,24.3410009 C14.7843078,23.8993605 15.1881025,23.5922904 15.6292632,23.6501939 C16.0688168,23.7103167 16.3767856,24.1170535 16.3171204,24.5586938 C16.269107,24.911764 16.244799,25.2725009 16.244799,25.6308166 C16.244799,29.482913 19.0094866,32.6167639 22.4077903,32.6167639 C25.8058931,32.6167639 28.5705808,29.482913 28.5705808,25.6308166 C28.5705808,25.4236149 28.562545,25.2150009 28.5466745,25.0116324 C28.5121209,24.5673693 28.8427906,24.1789921 29.2851567,24.1440886 C29.7321433,24.1103956 30.1144424,24.4414746 30.148996,24.8859395 C30.1680808,25.131071 30.1777237,25.3818517 30.1777237,25.6308166 C30.1777237,30.3728516 26.6920316,34.2307989 22.4077903,34.2307989"
                    fill={stroke}
                  ></path>
                  <g id="Group-11" transform="translate(0.000000, 0.115000)">
                    <mask id="mask-2" fill="white">
                      <use href="#path-1"></use>
                    </mask>
                    <g id="Clip-10"></g>
                    <path
                      d="M13.461971,42.9736857 C13.351279,42.9736857 13.2389799,42.9506857 13.1315022,42.9020629 C5.15444866,39.2844049 -6.026786e-05,31.2687028 -6.026786e-05,22.4812902 C-6.026786e-05,10.1329126 10.0031987,0.0867543874 22.2990469,0.0867543874 C34.5948951,0.0867543874 44.598154,10.1329126 44.598154,22.4812902 C44.598154,25.7684746 43.9599174,31.8921239 39.685721,35.9726065 L39.6198281,36.0355539 C38.174404,37.4157557 36.6795603,38.843168 34.8184888,39.6998172 C31.1489799,41.3891067 26.2122388,42.0982734 23.3615692,39.0225277 C22.1891585,37.7575276 21.9129308,35.3392995 21.9308103,34.237317 C21.9378415,33.7916415 22.3026629,33.4307029 22.7472388,33.4436152 C23.1910112,33.4506766 23.5447835,33.8176678 23.5375513,34.2633433 C23.5176629,35.5099837 23.8863013,37.2194486 24.5379978,37.9227645 C26.8058772,40.3698435 30.9896719,39.6871066 34.1487121,38.232861 C35.7663013,37.4881855 37.1625067,36.1549925 38.5123058,34.8657819 L38.5783996,34.8026328 C42.4178638,31.1373607 42.9910112,25.5096237 42.9910112,22.4812902 C42.9910112,11.0228513 33.7085558,1.70078953 22.2990469,1.70078953 C10.8895379,1.70078953 1.60708259,11.0228513 1.60708259,22.4812902 C1.60708259,30.6357993 6.39034152,38.0740803 13.7930424,41.4310716 C14.1974397,41.6144663 14.3774397,42.0924225 14.1946272,42.4987558 C14.0604308,42.7969488 13.7679308,42.9736857 13.461971,42.9736857"
                      fill={stroke}
                      mask="url(#mask-2)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Power.propTypes = propTypes;

export default iconWrapper(Power);
