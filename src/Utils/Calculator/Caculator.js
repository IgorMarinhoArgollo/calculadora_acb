const calculator = async (
  disputeValue,
  disputeType,
  numberOfArbitrators,
  setRegistrationFee,
  setAdministrationFee,
  setArbitratorsFee
) => {
  const numericValue = parseFloat(disputeValue.replace(/,/g, '.'));

  const categories = [
    { min: 0, max: 100000, registrationFee: 1500, arbitratorsFee: 6000 },
    { min: 100000, max: 250000, registrationFee: 2000, arbitratorsFee: 10000 },
    { min: 250000, max: 500000, registrationFee: 2500, arbitratorsFee: 15000 },
    { min: 500000, max: 750000, registrationFee: 3000, arbitratorsFee: 19000 },
    { min: 750000, max: 1000000, registrationFee: 3500, arbitratorsFee: 23000 },
    { min: 1000000, max: 2000000, registrationFee: 6500, arbitratorsFee: 30000 },
    { min: 2000000, max: 5000000, registrationFee: 4500, arbitratorsFee: 32000 },
    { min: 5000000, max: 10000000, registrationFee: 5000, arbitratorsFee: 38000 },
    { min: 10000000, max: 20000000, registrationFee: 6000, arbitratorsFee: 45000 },
    { min: 20000000, max: 50000000, registrationFee: 7000, arbitratorsFee: 52000 },
    { min: 50000000, max: Infinity, registrationFee: 20000, arbitratorsFee: 130000 }
  ];

  let selectedCategory = categories.find(category => numericValue > category.min && numericValue <= category.max);

  setRegistrationFee(selectedCategory.registrationFee);

  let adminFee = Math.min(0.02 * numericValue, 180000);
  adminFee = Math.max(adminFee, 5000);
  setAdministrationFee(adminFee);

  if (numberOfArbitrators === 1) {
    setArbitratorsFee(() => parseFloat(selectedCategory.arbitratorsFee * 1.15));
  } else {
    setArbitratorsFee(() => parseFloat(selectedCategory.arbitratorsFee * numberOfArbitrators));
  }

  if (disputeType === 'exp') {
    setAdministrationFee((adminFee) => adminFee * 0.7);
    setArbitratorsFee((arbitratorsFee) => arbitratorsFee * 0.7);
  }
};

export default calculator;
