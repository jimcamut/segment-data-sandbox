const initDevEnv = ((additionalKeys, pathToEnv = '../../.env') => {
  // Merge in environment variables
  if (process.env.NODE_ENV !== 'production') {
    try {
      const fs = require('fs');
      const path = require('path');
      const envString = fs.readFileSync(
        path.resolve(__dirname, pathToEnv),
        'utf8'
      );
      const env = envString
        .split('\n')
        .map((it) => it.trim().split('='))
        .map((it) => ({ key: [it[0]], val: it[1] }))
        .reduce((it, next) => {
          if (it && next.val) {
            it[next.key] = next.val.replace(/'|"/gi, '');
          }
          return it;
        }, {});

      process.env = { ...process.env, ...env, ...(additionalKeys | {}) };
    } catch (e) {
      console.log('Could not update environment variables', e);
    }
  }
})();
