import { useState, useEffect } from 'react';
import './Survey.scss';
import CurrencyInput from 'react-currency-input-field';
import calculator from '../../Utils/Calculator/Caculator';


export default function Survey() {
  const [disputeValue, setDisputeValue] = useState('');
  const [disputeType, setDisputeType] = useState('');
  const [numberOfArbitrators, setNumberOfArbitrators] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [adminitrationFee, setAdministrationFee] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [arbitratorsFee, setArbitratorsFee] = useState(0);

  const allQuestionsAnswered = () => {
    const numericValue = disputeValue ? parseFloat(disputeValue.replace(/,/g, '.')) : 0;
    return disputeValue !== '' && disputeType !== '' && numberOfArbitrators !== '' && numericValue > 0;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    await calculator(disputeValue, disputeType, numberOfArbitrators, setRegistrationFee, setAdministrationFee, setArbitratorsFee);
     setShowResult(true);

    const resultElement = document.getElementById('result');
    resultElement.scrollIntoView({ behavior: 'smooth' });
  };
  

  useEffect(() => {
    if (showResult) {
      const resultElement = document.getElementById('result');
      resultElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showResult]);

  const handleInputChange = (value, name) => {
    if (name === 'disputeValue') {
      setDisputeValue(value);
    }
    setShowResult(false);
  };

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
              onValueChange={(value) => handleInputChange(value, 'disputeValue')}
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
                handleInputChange();
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
                handleInputChange();
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
                handleInputChange();
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
                handleInputChange();
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
                handleInputChange();
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
        <div id="result">
          <p>Valor da Demanda: <b className='formInfo'>R$ {parseFloat(disputeValue.replace(/,/g, '.')).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
          <p>Tipo de Arbitragem: {disputeType =='exp'? <b className='formInfo'>Expedita</b> : <b className='formInfo'>Convencional</b>}</p>
          <p>Número de árbitros: <b className='formInfo'>{numberOfArbitrators}</b></p>
          <div className="results">
            <p className='dotAfter'>Taxa de Registro: <b>R$ {parseFloat(registrationFee.toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
            <p className='dotAfter'>Taxa de Administração: <b>R$ {parseFloat(adminitrationFee.toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
            <p>Honorários dos Árbitros: <b>R$ {arbitratorsFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>

            <p className="total">Total: <b>R$ {parseFloat((registrationFee + adminitrationFee + arbitratorsFee).toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
          </div>
        </div>
      )}
    </div>
  )
}
