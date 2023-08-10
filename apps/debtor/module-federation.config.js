module.exports = {
  name: 'debtor',
  exposes: {
    './Module': 'apps/debtor/src/app/remote-entry/entry.module.ts',
  },
};
