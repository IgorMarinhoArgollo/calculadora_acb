import { useState, useEffect } from 'react';
import './Survey.scss';
import calculator from '../../Utils/Calculator/Caculator';
import Results from '../Results/Results';
import SurveyForm from '../SurveyForm/SurveyForm';

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

      <SurveyForm
        disputeValue={disputeValue}
        setDisputeValue={setDisputeValue}
        disputeType={disputeType}
        setDisputeType={setDisputeType}
        numberOfArbitrators={numberOfArbitrators}
        setNumberOfArbitrators={setNumberOfArbitrators}
        setShowResult={setShowResult}
        handleSubmit={handleSubmit}
        allQuestionsAnswered={allQuestionsAnswered}
      />

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
