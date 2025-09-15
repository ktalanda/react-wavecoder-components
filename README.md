# react-wavecoder-components

This is a simple React library that hosts multiple reusable components. It is built with TypeScript and can be easily integrated into your React projects.

## Installation

You can install the library via npm:

```
npm install react-wavecoder-components
```

## Usage

To use the components from this library, you can import them as follows:

```tsx
import { Footer } from 'react-wavecoder-components';
```

## Components

### Background

`Background` is a component for displaying a video or image background with play/stop controls. Example usage:

```tsx
<Background imageUrl={imageUrl} videoUrl={videoUrl} />
```

### Footer

`Footer` is a reusable React component for displaying a website footer. Example usage:

```tsx
<Footer />
```

### Preloader

`Preloader` displays a loading animation with customizable text. Example usage:

```tsx
<Preloader topLine="Loading..." bottomLine="Please wait" loaded={false} />
```

### RotatingText

`RotatingText` animates a list of strings, showing one at a time in rotation. Example usage:

```tsx
<RotatingText texts={["First", "Second", "Third"]} />
```

## Development

To contribute to this library, clone the repository and install the dependencies:

```
git clone <repository-url>
cd react-wavecoder-components
npm install
```

To build the library, run:

```
npm run build
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.