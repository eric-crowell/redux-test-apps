declare module 'detox/runners/jest/globalSetup' {
  export default function setup(): Promise<void>;
}
declare module 'detox/runners/jest/globalTeardown' {
  export default function teardown(): Promise<void>;
}