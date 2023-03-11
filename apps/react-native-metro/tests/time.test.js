async function doesNotHaveText(ele, text) {
  try {
    await expect(ele).toHaveText(text);
    return false;
  } catch (error) {
    return true;
  }
}

describe('Time', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have time title', async () => {
    const timeTitle = element(by.id('time-title'));
    await expect(timeTitle).toBeVisible();
    await expect(timeTitle).toHaveText('Time Zone');
  });

  it('should have time zone', async () => {
    const timeZoneText = element(by.id('time-zone-text'));
    await expect(timeZoneText).toBeVisible();
    await expect(timeZoneText).toHaveText('(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima');
  });

  it('should have date time text that isn\'t unknown', async () => {
    const dateTimeText = element(by.id('time-datetime-text'));
    await expect(dateTimeText).toBeVisible();

    // Wait for the date time text to be updated
    await new Promise(resolve => setTimeout(resolve, 800));
    if(!await doesNotHaveText(dateTimeText, 'unknown')) {
      throw new Error('Date time text should not have unknown text');
      return;
    }
  });

});
