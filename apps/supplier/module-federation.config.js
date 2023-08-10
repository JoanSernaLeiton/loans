module.exports = {
  name: 'supplier',
  exposes: {
    './Module': 'apps/supplier/src/app/remote-entry/entry.module.ts',
  },
};
