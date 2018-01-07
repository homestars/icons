import React from "react";
import PropTypes from "prop-types";
import iconWrapper from "../iconWrapper";
import * as colours from "../colours";

const propTypes = {
  arrowFill: PropTypes.string,
  fill: PropTypes.string
};

const defaultProps = {
  arrowFill: "none",
  fill: colours.trueBlack
};

function YouTube({ arrowFill, fill }) {
  return pug`
    svg(xmlns='http://www.w3.org/2000/svg', width='22', height='22', viewBox='0 0 22 22')
      path(
        fill=fill
        stroke="none"
        d='M20.5820795,6.18612258 C20.3520795,5.32557419 19.6744659,4.64792903 18.8137841,4.41794516 C17.2542386,3.99997742 11.0000341,3.99997742 11.0000341,3.99997742 C11.0000341,3.99997742 4.74582955,3.99997742 3.18617045,4.41794516 C2.32560227,4.64792903 1.647875,5.32557419 1.417875,6.18612258 C1.00003409,7.74576774 1.00003409,10.9999774 1.00003409,10.9999774 C1.00003409,10.9999774 1.00003409,14.2540742 1.417875,15.8139452 C1.647875,16.6743806 2.32560227,17.3520258 3.18617045,17.5821226 C4.74582955,17.9999774 11.0000341,17.9999774 11.0000341,17.9999774 C11.0000341,17.9999774 17.2542386,17.9999774 18.8137841,17.5821226 C19.6744659,17.3520258 20.3520795,16.6743806 20.5820795,15.8139452 C21.0000341,14.2540742 21.0000341,10.9999774 21.0000341,10.9999774 C21.0000341,10.9999774 21.0000341,7.74576774 20.5820795,6.18612258'
      )
      polygon(fill=arrowFill, stroke="none", points='9 14 14 11 9 8')
  `;
}

YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;

export default iconWrapper(YouTube);
