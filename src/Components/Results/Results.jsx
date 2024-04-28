import PropTypes from "prop-types"
import './Results.scss';

const Results = ({ disputeValue, disputeType, numberOfArbitrators, registrationFee, administrationFee, arbitratorsFee }) => {
  return (
    <div id="result">
      <p>Valor da Demanda: <b className='formInfo'>R$ {parseFloat(disputeValue.replace(/,/g, '.')).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
      <p>Tipo de Arbitragem: {disputeType === 'exp' ? <b className='formInfo'>Expedita</b> : <b className='formInfo'>Convencional</b>}</p>
      <p>Número de árbitros: <b className='formInfo'>{numberOfArbitrators}</b></p>
      <div className="results">
        <p className='dotAfter'>Taxa de Registro: <b>R$ {parseFloat(registrationFee.toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
        <p className='dotAfter'>Taxa de Administração: <b>R$ {parseFloat(administrationFee.toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
        <p>Honorários dos Árbitros: <b>R$ {arbitratorsFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>

        <p className="total">Total: <b>R$ {parseFloat((registrationFee + administrationFee + arbitratorsFee).toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
      </div>
    </div>
  );
};

Results.propTypes = {
  administrationFee: PropTypes.shape({
    toFixed: PropTypes.func
  }),
  arbitratorsFee: PropTypes.shape({
    toLocaleString: PropTypes.func
  }),
  disputeType: PropTypes.string,
  disputeValue: PropTypes.shape({
    replace: PropTypes.func
  }),
  numberOfArbitrators: PropTypes.any,
  registrationFee: PropTypes.shape({
    toFixed: PropTypes.func
  })
}

export default Results;
