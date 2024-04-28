import { useState, useEffect } from 'react';
import './Survey.scss';
import CurrencyInput from 'react-currency-input-field';
import calculator from '../../Utils/Calculator/Caculator';
import Results from '../Results/Results';

export default function Survey() {
  const [disputeValue, setDisputeValue] = useState('');
  const [disputeType, setDisputeType] = useState('');
  const [numberOfArbitrators, setNumberOfArbitrators] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [administrationFee, setAdministrationFee] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [arbitratorsFee, setArbitratorsFee] = useState(0);

  const allQuestionsAnswered = () => {
    const numericValue = disputeValue ? parseFloat(disputeValue.replace(/,/g, '.')) : 0;
    return disputeValue !== '' && disputeType !== '' && numberOfArbitrators !== 0 && numericValue > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await calculator(disputeValue, disputeType, numberOfArbitrators, setRegistrationFee, setAdministrationFee, setArbitratorsFee);
    setShowResult(true);
  };

  useEffect(() => {
    if (showResult) {
      const resultElement = document.getElementById('result');
      resultElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showResult]);

  return (
    <div className='survey'>
      <h2>Para calcular as custas da sua arbitragem, preencha o questionário abaixo:</h2>
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

      {showResult && (
        <Results
          disputeValue={disputeValue}
          disputeType={disputeType}
          numberOfArbitrators={numberOfArbitrators}
          registrationFee={registrationFee}
          administrationFee={administrationFee}
          arbitratorsFee={arbitratorsFee}
        />
      )}
    </div>
  );
}
