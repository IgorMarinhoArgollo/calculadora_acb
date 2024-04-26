import { useState } from 'react';
import './Survey.scss';

export default function Survey() {
  const [disputeValue, setDisputeValue] = useState('');
  const [disputeType, setDisputeType] = useState('');

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
          />
        </label>

        <label htmlFor="disputeType" className='questions'>
          2. Qual o tipo de arbitragem desejada?
        </label>
        <div className='disputeOptions'>
          <label htmlFor="exp" className='options'>
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
          <label htmlFor="conv" className='options'>
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

        <p>{disputeValue}</p>
        <p>{disputeType}</p>
      </form>
    </div>
  )
}
