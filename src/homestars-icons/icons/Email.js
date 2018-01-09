import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";

const propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  words: PropTypes.bool
};

const defaultProps = {
  fill: "none",
  words: true
};

function Email({ fill, stroke, strokeWidth, words }) {
  const multiplier = 3; // viewbox is 3x the normal size
  const multipliedStrokeWidth = strokeWidth * multiplier;

  const renderWords = () => {
    if (!words) return null;

    if (strokeWidth < 1) {
      return pug`
        path(
          fill=fill
          stroke=stroke
          strokeLinecap='round'
          strokeWidth=multipliedStrokeWidth
          d='M6.90566038 21.9811321L13.9056604 21.9811321M16.9056604 21.9811321L24.9056604 21.9811321M6.90566038 15.9811321L9.89558415 15.9811321M12.9056604 15.9811321L23.8706199 15.9811321M26.9056604 15.9811321L27.9056604 15.9811321M6.90566038 9.98113208L21.9056604 9.98113208M24.9056604 9.98113208L25.9056604 9.98113208M29 10L31.9110512 10'
          transform='translate(11.094 5.019)'
        )
      `;
    } else {
      return pug`
        g
          line(fill='none', stroke='#000000', strokeWidth='6', strokeLinecap='round', x1='20', y1='23', x2='22.99', y2='23')
          line(fill='none', stroke='#000000', strokeWidth='6', strokeLinecap='round', x1='29', y1='23', x2='39.965', y2='23')
          line(fill='none', stroke='#000000', strokeWidth='6', strokeLinecap='round', x1='20', y1='15', x2='31.5', y2='15')
          line(fill='none', stroke='#000000', strokeWidth='6', strokeLinecap='round', x1='38', y1='15', x2='39', y2='15')
          line(fill='none', stroke='#000000', strokeWidth='6', strokeLinecap='round', x1='43.5', y1='15.019', x2='45.005', y2='15.019')
      `;
    }
  };

  return pug`
    svg(width='22', height='22', viewBox='0 0 66 66')
      defs
        path#contact-email-a(d='M0.633714374,0.0107889516 L0.633714374,0.0107889516 L22.7544409,14.0695122 L31.2257165,14.0695122 L53.3464431,0.0107889516 L53.3367269,0.00215779033 C53.7340129,0.39271784 53.9790779,0.935402107 53.9790779,1.53634671 L53.9790779,33.4271153 C53.9790779,34.6182156 53.0128524,35.5849057 51.8199148,35.5849057 L2.15916312,35.5849057 C0.967305076,35.5849057 0,34.6182156 0,33.4271153 L0,1.53634671 C0,0.934323212 0.248303758,0.391638944 0.645589771,0 L0.633714374,0.0107889516 Z')
      path(
        fill=fill
        stroke=stroke
        strokeLinecap='round'
        strokeLinejoin='round'
        style={ strokeLinejoin: 'round' }
        strokeWidth=multipliedStrokeWidth
        d='M53.3367269,22.6410183 L31.4752003,1.7948016 C28.9694915,-0.598267201 25.0106659,-0.598267201 22.5038776,1.7948016 L0.64451019,22.6388711 C0.247224177,23.0275166 0,23.5686143 0,24.1666131 L0,55.8527871 C0,57.0391222 0.966225494,58 2.15916312,58 L51.8199148,58 C53.0117728,58 53.9790779,57.0391222 53.9790779,55.8527871 L53.9790779,24.1666131 C53.9790779,23.5696879 53.7329333,23.0296638 53.3367269,22.6410183 Z'
        transform='translate(6 3)'
      )
      rect(
        stroke='#000'
        strokeWidth=multipliedStrokeWidth
        width='42.094'
        height='36'
        x='.906'
        y='.981'
        fill='#FFF'
        rx='3'
        transform='translate(11.094 5.019)'
      )
      = renderWords()
      g(transform='translate(6 25.415)')
        use(fill='#FFF', href='#contact-email-a')
        path(
          fill=fill
          stroke=stroke
          strokeLinecap='round'
          strokeLinejoin='round'
          style={ strokeLinejoin: 'round' }
          strokeWidth=multipliedStrokeWidth
          d='M22.7544409,14.6793534 L31.2257165,14.6793534 L53.3464431,1.01048977 C53.7340129,1.38182746 54,1.90946266 54,2.4937426 L54,33.4869526 C54,34.6450227 53.0128524,35.5849057 51.8199148,35.5849057 L2.15916312,35.5849057 C0.967305076,35.5849057 0,34.6450227 0,33.4869526 L0,2.4937426 C0,1.90841369 0.248303758,1.38077848 0.645589771,1 L22.7544409,14.6793534 Z'
        )
        path(
          stroke=stroke
          strokeLinecap='round'
          strokeLinejoin='round'
          style={ strokeLinejoin: 'round' }
          strokeWidth=multipliedStrokeWidth
          fill='#FFF'
          d='M53.3476306,35.509233 L31.4763878,14.5516944 C28.9695995,12.1468371 25.0107739,12.1468371 22.5050651,14.5516944 L0.633822332,35.5081541 L0.631663169,35.5081541 C1.02355127,35.8987141 1.56334205,36.1414655 2.16035065,36.1414655 L51.8211023,36.1414655 C52.4170313,36.1414655 52.9568221,35.899793 53.3476306,35.509233'
        )
  `;
}

Email.propTypes = propTypes;
Email.defaultProps = defaultProps;

export default iconWrapper(Email);
