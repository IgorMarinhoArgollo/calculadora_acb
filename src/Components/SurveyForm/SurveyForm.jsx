import PropTypes from "prop-types"
import CurrencyInput from 'react-currency-input-field';
import './SurveyForm.scss';

export default function SurveyForm({
  disputeValue,
  setDisputeValue,
  disputeType,
  setDisputeType,
  numberOfArbitrators,
  setNumberOfArbitrators,
  setShowResult,
  handleSubmit,
  allQuestionsAnswered,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="disputeValue" className='questions'>
        1. Qual o valor da demanda?
        <span className="inputWrapper">
          <CurrencyInput
            name="disputeValue"
            id="disputeValue"
            value={disputeValue}
            onValueChange={(value) => {
              setShowResult(false);
              setDisputeValue(value);
            }}
            decimalsLimit={2}
            allowNegativeValue={false}
          />
        </span>
      </label>

      <label htmlFor="disputeType" className='questions'>
        2. Qual o tipo de arbitragem desejada?
      </label>
      <div className='disputequestions'>
        <label htmlFor="exp" className={`options ${disputeType === 'exp' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="disputeType"
            value="exp"
            id="exp"
            checked={disputeType === 'exp'}
            onChange={() => {
              setShowResult(false);
              setDisputeType('exp')
            }}
          />
          Arbitragem Expedita
        </label>
        <label htmlFor="conv" className={`options ${disputeType === 'conv' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="disputeType"
            value="conv"
            id="conv"
            checked={disputeType === 'conv'}
            onChange={() => {
              setShowResult(false);
              setDisputeType('conv')
            }}
          />
          Arbitragem Convencional
        </label>
      </div>

      <label htmlFor="numberOfArbitrators" className='questions'>
        3. Qual o número de árbitros?
      </label>
      <div className='disputequestions'>
        <label htmlFor="option1" className={`options ${numberOfArbitrators === 1 ? 'selected' : ''}`}>
          <input
            type="radio"
            name="numberOfArbitrators"
            value="1"
            id="option1"
            checked={numberOfArbitrators === 1}
            onChange={() => {
              setShowResult(false);
              setNumberOfArbitrators(1)
            }}
          />
          1
        </label>
        <label htmlFor="option3" className={`options ${numberOfArbitrators === 3 ? 'selected' : ''}`}>
          <input
            type="radio"
            name="numberOfArbitrators"
            value="3"
            id="option3"
            checked={numberOfArbitrators === 3}
            onChange={() => {
              setShowResult(false);
              setNumberOfArbitrators(3)
            }}
          />
          3
        </label>
        <label htmlFor="option5" className={`options ${numberOfArbitrators === 5 ? 'selected' : ''}`}>
          <input
            type="radio"
            name="numberOfArbitrators"
            value="5"
            id="option5"
            checked={numberOfArbitrators === 5}
            onChange={() => {
              setShowResult(false);
              setNumberOfArbitrators(5)
            }}
          />
          5
        </label>
      </div>
      
      <button
        type="submit"
        disabled={!allQuestionsAnswered()}
        id='submitButton'>
        Calcular
      </button>
    </form>
  );
}

SurveyForm.propTypes = {
  allQuestionsAnswered: PropTypes.func,
  disputeType: PropTypes.string,
  disputeValue: PropTypes.any,
  handleSubmit: PropTypes.any,
  numberOfArbitrators: PropTypes.number,
  setDisputeType: PropTypes.func,
  setDisputeValue: PropTypes.func,
  setNumberOfArbitrators: PropTypes.func,
  setShowResult: PropTypes.func
}
