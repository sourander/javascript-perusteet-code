import { readdirSync, renameSync } from 'fs';
import { parse, join, resolve } from 'path';

// Paths
const tasksDir = resolve('./src/tasks/') // '/app/src/tasks';
const testsDir = resolve('./src/tests/') // '/app/src/tests';


// Get a list of all task filenames (without extensions)
const taskFilenames = readdirSync(tasksDir)
  .filter(file => file.endsWith('.js'))
  .map(file => parse(file).name);


// Walk through test files and activate/disable them based on task filenames
readdirSync(testsDir)
  .filter(
    file => file.endsWith('.test.js') || file.endsWith('.test.js.disabled')
  )
  .forEach(testFile => {
    const testName = parse(testFile).name;
    const testNameBasic = testName.split('.')[0];
    const isEnabled = taskFilenames.includes(testNameBasic);

    const oldPath = join(testsDir, testFile);
    const newExtension = isEnabled ? 'test.js' : 'test.js.disabled';
    const newFileName = `${testNameBasic}.${newExtension}`;
    const newPath = join(testsDir, newFileName);

    renameSync(oldPath, newPath);

    console.log(`${testFile} => ${newFileName} (${isEnabled ? 'Enabled' : 'Disabled'})`);
  });
