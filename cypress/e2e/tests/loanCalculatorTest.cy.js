import { LoanCalculatorPage } from '../pages/LoanCalculatorPage';

const calculator = new LoanCalculatorPage();

describe('Loan calculator modal', () => {
 
  beforeEach(() => {
    calculator.openLoanCalculatorPage();
  });

 it('display calculator modal', () => {
    calculator.getCalculatorModal().should('be.visible');
  })

 it('display the calculator modal title', () => {
    calculator.getCalculatorModalTitle().should('have.length', 1).and('be.visible');
  })

  it('displays correct monthly payment after entering amount and period', () => {
    calculator.fillAmount('10000');
    calculator.fillPeriod('36');
    calculator.clickOnMonthlyPaymentBox();
    calculator.getMonthlyPayment().should('contain', '350.36');
  })

    it('displays correct monthly payment if amount and period inputs change', () => {
    calculator.fillAmount('10000');
    calculator.fillPeriod('36');
    calculator.clickOnMonthlyPaymentBox();
    calculator.getMonthlyPayment().should('contain', '350.36');
    calculator.fillAmount('7528');
    calculator.fillPeriod('102');
    calculator.clickOnMonthlyPaymentBox();
    calculator.getMonthlyPayment().should('contain', '135.19');
  })

    it('allows decimal input values in the amount field', () => {
    calculator.fillAmount('5020,55');
    calculator.getAmountField().should('have.value', '5020.55');
    calculator.fillPeriod('66');
    calculator.clickOnMonthlyPaymentBox();
    calculator.getMonthlyPayment().should('contain', '116.19');
  })

  it('continue button navigates to next step and displays correct loan amount', () => {
    calculator.fillAmount('12000');
    calculator.clickContinue();
    calculator.getNextStepLoanAmount().should('contain', '12000');
  })

  })



