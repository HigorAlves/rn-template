/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show the step one message', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible()
  })

  it('should take a screenshot', async () => {
    if (device.getPlatform() === 'android') {
      execSync('adb shel screencap /sdcard/test.png')
      // execSync(`adb pull /sdcard/test.png ${pwd}/android/fastlane`)
    } else {
    }
  })
})
