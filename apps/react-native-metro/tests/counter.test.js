describe('Counter', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have counter text', async () => {
    const counterTitle = element(by.id('counter-title'));
    await expect(counterTitle).toBeVisible();
    await expect(counterTitle).toHaveText('Counter');
  });

  it('should increment counter', async () => {
    const counterValue = element(by.id('counter-value'));
    const incrementButton = element(by.id('counter-increment-button'));

    await expect(counterValue).toHaveText('0');
    await incrementButton.tap();
    await expect(counterValue).toHaveText('1');
  });

  it('should decrement counter', async () => {
    const counterValue = element(by.id('counter-value'));
    const decrementButton = element(by.id('counter-decrement-button'));

    await expect(counterValue).toHaveText('0');
    await decrementButton.tap();
    await expect(counterValue).toHaveText('-1');
  });

  it('should set counter add value', async () => {
    const counterValue = element(by.id('counter-value'));
    const addAmountInput = element(by.id('counter-amount-input'));
    const addAmountButton = element(by.id('counter-add-amount-button'));

    await expect(counterValue).toHaveText('0');
    await expect(addAmountInput).toHaveText('2');
    await addAmountInput.tap();
    await addAmountInput.clearText();
    await addAmountInput.typeText('5');
    await addAmountButton.tap();
    await expect(counterValue).toHaveText('5');
    await addAmountButton.tap();
    await expect(counterValue).toHaveText('10');
  });
});
