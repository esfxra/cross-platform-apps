# cross-platform-apps
Turbo repo showcasing cross-platform app development for Web, iOS, and Android.

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/).
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/).
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications.
- `data-hooks`: a shared data fetching library based on [TanStack Query](https://tanstack.com/query/v4/) for both `web` and `native` applications.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo.

Additional expo projects could be added. Expo can also be ejected to gain access to the app's native methods.

Bare React Native apps could also be added with the correct transpiler configurations.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

### Preview
<img width="700" alt="screenshot-web" src="https://user-images.githubusercontent.com/12316761/209724105-2545977b-c467-49c4-961c-4fa473d2a86a.png">

<img width="350" alt="screenshot-simulator" src="https://user-images.githubusercontent.com/12316761/209724093-541ae65b-c986-4a08-91c9-1e50db560aff.png">
