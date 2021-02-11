This README describes my thought-process as I was solving this refactoring problem

### Steps taken

1. Choose TypeScript as language and navigated to sub-folder
2. Explored `package.json` first to understand how the process is architected and what packages it use. This helped me figure out the `compile` and `test` commands for the projects
3. Executed commands `npm run compile` and `npm run test` to ensure the project builds without any errors and tests are executed successfully
4. Attempt to run `Golden specs` using `npx ts-node test/golden-master-text-test.ts`. Saved the output as `golden-master-text.txt`
