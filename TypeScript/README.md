The solution can be found on GitHub at https://github.com/Kirandeepv/gilded-rose/tree/master/TypeScript

This README describes my thought-process as I was solving this refactoring problem

### Steps to compile | run | test

1. Navigate to folder `/TypeScript` using `cd TypeScript`
2. Install packages using `npm install`
3. Compile the project using `npm run compile`. This should compile all the TypeScript files
4. Execute `Golden specs` using `npx ts-node test/golden-master-text-test.ts`
5. If you want to change the input date, you can modify `items` array in [golden-master-text-test.ts](https://github.com/Kirandeepv/gilded-rose/blob/master/TypeScript/test/golden-master-text-test.ts#L3)
6. Execute unit tests using `npm run test`

### An overview of my initial steps

1. Chose TypeScript as language and navigated to sub-folder
2. Explored `package.json` first to understand how the process is architected and what packages it use. This helped me figure out the `compile` and `test` commands for the projects
3. Executed commands `npm run compile` and `npm run test` to ensure the project builds without any errors and tests are executed successfully
4. Attempt to run `Golden specs` using `npx ts-node test/golden-master-text-test.ts`. Saved the output as `golden-master-text.txt`
5. As I started updating the code, I kept running the above command to verify if it matches the golden master text using above command.
6. Continued to explore the source files, understanding the code and mapping it to the requirements

### Refactoring logic

- The first thing I observed in the requirements was `Item` is one entity which then has many variations. There are few core business logic, which has a few exceptions for certain types
- I decided to use `TypeScript` inheritence for my solution making a base class named `DefaultItem.ts`. This class implements the default functionality for generic items.
- Other types extend from `DefaultItem.ts`
- In my solution, I introduce two main properties in `DefaultIitem` viz.
  1. UPDATE_QUALITY_BY: Represents the number by which quality increases or decreases for a particular item. This can be a positive or negative integer based on whether the quality increases or decreases with time respectively.
  2. UPDATE_SELLIN_DATE_BY: Represents the number by which the `sellIn` date changes. Set to (-1) since the day decreses
- For each of the sub-types, the above values are updated per requirements
- The logic for `updateQuality` method is moved to `DefaultItem.ts` which will now be a centralized place to compute the quality value

### Folder structure

- `models` folder contains the base type `DefaultIitem` and all the child types
- `services` folder contains single service `service.ts`. This service is responsible for parsing data

app
models
aged-brie.ts
backstage.ts
conjured.ts
defaultItem.ts
sulfuras.ts
services
gilded-rose.ts
test
gilded-rose.spec.ts
golden-master-text-test.ts

### Can be improved

1. Didn't get sufficient time to verify all the scenarios, specially with huge dataset.
2. Add more unit tests. Only a few are added currently to describe the thought process. Each file should have its own specs
3. Service method can be DRYed up a bit
