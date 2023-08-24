import React from "react";
import PropTypes from "prop-types";
import { formats } from "investira.sdk";
import { InfoCard } from "../";
import utils from "../../utils";

const TotalCard = (props) => {
  const calculatedValue = utils.calc.somaAttr(props.data, props.options);
  const formatedValue = formats.formatNumber(calculatedValue, 2, true, true);

  return (
    <InfoCard
      label={props.label}
      value={props.value || formatedValue || "Sem dados"}
    />
  );
};

TotalCard.displayName = "TotalCard";

TotalCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.array,
  options: PropTypes.shape({
    soma: PropTypes.string,
    filter: PropTypes.string,
    filter_value: PropTypes.string,
  }),
};

export default TotalCard;
