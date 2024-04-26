import { useState, useEffect } from 'react';
import './Survey.scss';

export default function Survey() {
  const [disputeValue, setDisputeValue] = useState();
  const [disputeType, setDisputeType] = useState('');
  const [numberOfArbitrators, setNumberOfArbitrators] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [adminitrationFee, setAdministrationFee] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [arbitratorsFee, setArbitratorsFee] = useState(0);

  const allQuestionsAnswered = () => {
    return disputeValue !== '' && disputeType !== '' && numberOfArbitrators !== '';
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await calculator();
     setShowResult(true);

    const resultElement = document.getElementById('result');
    resultElement.scrollIntoView({ behavior: 'smooth' });
  };
  
  const calculator = async () => {
    if (disputeValue > 0 && disputeValue <= 100000) {
      setRegistrationFee(1500);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(6000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(6000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }

    } 
    
    else if (disputeValue > 100000 && disputeValue <= 250000) {
      setRegistrationFee(2000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(10000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(10000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 250000 && disputeValue <= 500000) {
      setRegistrationFee(2500);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(15000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(15000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 500000 && disputeValue <= 750000) {
      setRegistrationFee(3000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(19000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(19000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }
      
    else if (disputeValue > 750000 && disputeValue <= 1000000) {
      setRegistrationFee(3500);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(23000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(23000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 1000000 && disputeValue <= 2000000) {
      setRegistrationFee(6500);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(30000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(30000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 2000000 && disputeValue <= 5000000) {
      setRegistrationFee(4500);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(32000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(32000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 5000000 && disputeValue <= 10000000) {
      setRegistrationFee(5000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(38000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(38000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 10000000 && disputeValue <= 20000000) {
      setRegistrationFee(6000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(45000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(45000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }

    else if (disputeValue > 20000000 && disputeValue <= 50000000) {
      setRegistrationFee(7000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(52000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(52000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }
      
    else if (disputeValue > 50000000) {
      setRegistrationFee(20000);
      let adminFee = Math.min((0.02 * disputeValue), 180000);
      adminFee = Math.max(adminFee, 5000);
      setAdministrationFee(adminFee);

      if (numberOfArbitrators === 1) {
        setArbitratorsFee(() => parseFloat(130000 * 1.15));
      } else {
        setArbitratorsFee(() => parseFloat(130000 * numberOfArbitrators));
      }

      if (disputeType === 'exp') {
        setAdministrationFee((adminitrationFee) => adminitrationFee * 0.7);
        setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
      }
    }
  };

  useEffect(() => {
    if (showResult) {
      const resultElement = document.getElementById('result');
      resultElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showResult]);

  const handleInputChange = () => {
    setShowResult(false);
  };

  return (
    <div className='survey'>
      <h2>Para calcular as custas da sua arbitragem, preencha o questionário abaixo:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="disputeValue" className='questions'>
          1. Qual o valor da demanda?
          <span className="inputWrapper">
            <input
              type="number"
              name="disputeValue"
              id="disputeValue"
              value={disputeValue}
              onChange={(e) => {
                handleInputChange();
                setDisputeValue(parseFloat(e.target.value));
              }}
              step="any"
              min={1}
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
          <p>Valor da Demanda: <b className='formInfo'>R$ {disputeValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
          <p>Tipo de Arbitragem: {disputeType =='exp'? <b className='formInfo'>Expedita</b> : <b className='formInfo'>Convencional</b>}</p>
          <p>Número de árbitros: <b className='formInfo'>{numberOfArbitrators}</b></p>
          <div className="results">
            <p className='dotAfter'>Taxa de Registro: <b>R$ {registrationFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
            <p className='dotAfter'>Taxa de Administração: <b>R$ {adminitrationFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
            <p>Honorários dos Árbitros: <b>R$ {arbitratorsFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>

            <p className="total">Total: <b>R$ {(registrationFee + adminitrationFee + arbitratorsFee).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
          </div>
        </div>
      )}
    </div>
  )
}
