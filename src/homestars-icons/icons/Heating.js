import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  stroke: PropTypes.string
};

const defaultProps = {
  stroke: "#27A9E1"
};

function Heating({ stroke }) {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 43 48"
    >
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          transform="translate(-778.000000, -744.000000)"
          stroke={stroke}
        >
          <g id="Group" transform="translate(240.000000, 714.000000)">
            <g
              transform="translate(480.000000, 0.000000)"
            >
              <g
                transform="translate(58.000000, 31.000000)"
              >
                <g transform="translate(1.607143, 0.807018)">
                  <line
                    x1="36.1607143"
                    y1="6.05263158"
                    x2="40.1785714"
                    y2="6.05263158"
                    id="Stroke-1"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="36.1607143"
                    y1="12.1052632"
                    x2="40.1785714"
                    y2="12.1052632"
                    id="Stroke-3"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="36.1607143"
                    y1="18.1578947"
                    x2="40.1785714"
                    y2="18.1578947"
                    id="Stroke-5"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="36.1607143"
                    y1="24.2105263"
                    x2="40.1785714"
                    y2="24.2105263"
                    id="Stroke-7"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  ></line>
                  <path
                    d="M12.277266,26.6251225 C13.4826231,26.3830173 15.1319536,25.7363945 15.920458,25.1583682 C19.6661055,22.412491 21.2822885,17.2929735 18.0127572,13.4788069 C19.2623108,16.0491577 15.3951232,19.6484559 12.2049445,16.8551665 C8.55673015,13.6603858 17.8399893,9.17135082 7.28106047,2.01714038 C10.17894,9.99047361 -3.47775679,12.2218771 0.857511185,21.6992893 C2.05583711,24.3200787 4.2656586,25.9129296 6.74869439,26.6261313"
                    id="Stroke-9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M33.1473214,33.0974035 L33.1473214,22.1925789 L33.1473214,3.02591228 C33.1473214,1.35538596 31.7983259,-0.000403508791 30.1339286,-0.000403508791 C28.4695312,-0.000403508791 27.1205357,1.35538596 27.1205357,3.02591228 L27.1205357,22.1925789 L27.1205357,33.0974035 C25.3205357,34.1445088 24.1071429,36.0944649 24.1071429,38.3329298 C24.1071429,41.676 26.8061384,44.3855614 30.1339286,44.3855614 C33.4617188,44.3855614 36.1607143,41.676 36.1607143,38.3329298 C36.1607143,36.0944649 34.9473214,34.1445088 33.1473214,33.0974035 Z"
                    id="Stroke-11"
                    stroke-width="2"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Heating.propTypes = propTypes;

export default iconWrapper(Heating);
