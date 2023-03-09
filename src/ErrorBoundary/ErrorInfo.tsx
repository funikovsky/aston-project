import PropTypes, { InferProps } from 'prop-types';

const ComponentPropTypes = {
  errorInfoContent: PropTypes.string.isRequired,
};
type ComponentTypes = InferProps<typeof ComponentPropTypes>;

export const ErrorIfo = ({ errorInfoContent }: ComponentTypes) => {
  return (
    <div>
      <h2>Ознакомиться с ошибкой можно открыв вкладку "Сведения"</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>{errorInfoContent}</details>
    </div>
  );
};

ErrorIfo.propTypes = ComponentPropTypes;
