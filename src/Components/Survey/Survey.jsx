import { useState } from 'react';
import './Survey.scss';

export default function Survey() {
  const [disputeValue, setDisputeValue] = useState('');
  const [disputeType, setDisputeType] = useState('');
  const [numberOfArbitrators, setNumberOfArbitrators] = useState('');

  return (
    <div className='survey'>
      <h2>Para calcular as custas da sua arbitragem, preencha o questionário abaixo:</h2>
      <form>
        <label htmlFor="disputeValue" className='questions'>
          1. Qual o valor da demanda?
          <input
            type="number"
            name="disputeValue"
            id="disputeValue"
            value={disputeValue}
            onChange={(e) => setDisputeValue(e.target.value)}
            step="any"
          />
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
              onChange={() => setDisputeType('exp')}
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
              onChange={() => setDisputeType('conv')}
            />
            Arbitragem Convencional
          </label>
        </div>

        <label htmlFor="numberOfArbitrators" className='questions'>
          3. Qual o número de árbitros?
        </label>
        <div className='disputequestions'>
          <label htmlFor="option1" className={`options ${numberOfArbitrators === '1' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="numberOfArbitrators"
              value="1"
              id="option1"
              checked={numberOfArbitrators === '1'}
              onChange={() => setNumberOfArbitrators('1')}
            />
            1
          </label>
          <label htmlFor="option3" className={`options ${numberOfArbitrators === '3' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="numberOfArbitrators"
              value="3"
              id="option3"
              checked={numberOfArbitrators === '3'}
              onChange={() => setNumberOfArbitrators('3')}
            />
            3
          </label>
          <label htmlFor="option5" className={`options ${numberOfArbitrators === '5' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="numberOfArbitrators"
              value="5"
              id="option5"
              checked={numberOfArbitrators === '5'}
              onChange={() => setNumberOfArbitrators('5')}
            />
            5
          </label>
        </div>
        <p>{disputeValue}</p>
        <p>{disputeType}</p>
        <p>{numberOfArbitrators}</p>
      </form>
    </div>
  )
}
