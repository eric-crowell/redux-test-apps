describe('Post', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have post title', async () => {
    const postTitle = element(by.id('post-title'));
    await expect(postTitle).toBeVisible();
    await expect(postTitle).toHaveText('Post');
  });

  it('should have fetched post name', async () => {
    const postName = element(by.id('post-name'));

    // Wait for the post text to be updated
    await new Promise(resolve => setTimeout(resolve, 800));

    await expect(postName).toBeVisible();
    await expect(postName).toHaveText('A sample post');
  });

});
