module.exports = {
  name: 'loan',
  exposes: {
    './Module': 'apps/loan/src/app/remote-entry/entry.module.ts',
  },
};
