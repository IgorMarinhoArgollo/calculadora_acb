const calculator = async (
  disputeValue,
  disputeType,
  numberOfArbitrators,
  setRegistrationFee,
  setAdministrationFee,
  setArbitratorsFee
) => {
  const numericValue = parseFloat(disputeValue.replace(/,/g, '.'));

  if (numericValue > 0 && numericValue <= 100000) {
    setRegistrationFee(1500);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 100000 && numericValue <= 250000) {
    setRegistrationFee(2000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 250000 && numericValue <= 500000) {
    setRegistrationFee(2500);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 500000 && numericValue <= 750000) {
    setRegistrationFee(3000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 750000 && numericValue <= 1000000) {
    setRegistrationFee(3500);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 1000000 && numericValue <= 2000000) {
    setRegistrationFee(6500);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 2000000 && numericValue <= 5000000) {
    setRegistrationFee(4500);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 5000000 && numericValue <= 10000000) {
    setRegistrationFee(5000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 10000000 && numericValue <= 20000000) {
    setRegistrationFee(6000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 20000000 && numericValue <= 50000000) {
    setRegistrationFee(7000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

  else if (numericValue > 50000000) {
    setRegistrationFee(20000);
    let adminFee = Math.min((0.02 * numericValue), 180000);
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

export default calculator;