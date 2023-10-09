# Nitro + Vanilla Custom Elements

This is a Proof of Concept and testing ground for using [Nitro](https://nitro.unjs.io) and vanilla JS custom elements using my [Web Component Base](https://ayco.io/n/web-component-base) class.

## Ambitious Goals
We want a way to:
1. create web apps with vanilla custom elements
1. write real .HTML files
1. no frameworks or reactivity libraries on the browser
1. server-side pre-rendering
1. control on when and where JS is downloaded for interactive elements
   
## Special directories
**1. `src/pages`**
- file based routing for `.html` files
- directly use custom elements (no registry maintenance needed)

**2. `src/components`**
- custom element constructor class files go here (only `.js` files for now)
- all components are automatically registered using their file names (e.g., a `hello-world.js` component can be used as `<hello-world>` element)

## Setting up

Do the following steps to get you started:

1. clone project and go into the directory
```
git clone https://github.com/ayoayco/nitro-web-components.git
```
```
cd nitro-web-components
```

2. install deps
```
npm i
```

3. run the dev server
```
npm run dev
```

4. open the browser to `https://localhost:3000` (or what the dev server said)




## More info

This project was generated from Nitro starter guide. Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

