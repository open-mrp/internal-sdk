const fs = require('fs');

function readAttwReport() {
  let raw;
  try {
    raw = fs.readFileSync('.attw.json', 'utf8').trim();
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error('attw output file .attw.json was not created');
    }
    throw err;
  }
  if (!raw) {
    let detail = '';
    try {
      detail = fs.readFileSync('.attw.stderr', 'utf8').trim();
    } catch {}
    throw new Error(detail ? `attw produced no JSON output:\n${detail}` : 'attw produced no JSON output');
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(`attw produced invalid JSON (${err.message})`);
  }
}

function cleanupAttwArtifacts() {
  for (const file of ['.attw.json', '.attw.stderr']) {
    try {
      fs.unlinkSync(file);
    } catch {}
  }
}

let report;
try {
  report = readAttwReport();
} catch (err) {
  cleanupAttwArtifacts();
  process.stderr.write(`${err.message}\n`);
  process.stderr.write('Re-run: ./node_modules/.bin/attw --pack dist\n');
  process.exit(1);
}

const problems = Object.values(report.problems ?? {})
  .flat()
  .filter(
    (problem) =>
      !(
        // This is intentional, if the user specifies .mjs they get ESM.
        (
          (problem.kind === 'CJSResolvesToESM' && problem.entrypoint.endsWith('.mjs')) ||
          // This is intentional for backwards compat reasons.
          (problem.kind === 'MissingExportEquals' && problem.implementationFileName.endsWith('/index.js')) ||
          // this is intentional, we deliberately attempt to import types that may not exist from parent node_modules
          // folders to better support various runtimes without triggering automatic type acquisition.
          (problem.kind === 'InternalResolutionError' && problem.moduleSpecifier.includes('node_modules'))
        )
      ),
  );
cleanupAttwArtifacts();
if (problems.length) {
  process.stdout.write('The types are wrong!\n' + JSON.stringify(problems, null, 2) + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write('Types ok!\n');
}
