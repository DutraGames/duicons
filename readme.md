# **Duicons**

![duicons](https://img.shields.io/npm/v/duicons?color=red)
![npm](https://img.shields.io/npm/dm/duicons)

Duicons is a versatile icon component library for ReactJS, designed to provide a wide range of modern, customizable icons for web applications. With Duicons, developers can easily integrate scalable icons into their projects, allowing for seamless adaptation to various themes and sizes. The library offers optimized performance and a user-friendly API, making it ideal for both small and large-scale applications.

## How Install

```cmd
npm i duicons
```

## Usage

```tsx
import { AddOutline } from "duicons";

export default function IconExample() {
  return <AddOutline />;
}
```

You can configure Icons with inline props:

```tsx
<AddOutline color="#eafe23" size={40} />
```

## Props

| Props   | Type                 | Default | Note                   |
| ------- | -------------------- | ------- | ---------------------- |
| `size`  | `string` or `number` | `32px`  | size={32} or size="32" |
| `color` | `string`             | `#000`  | css color              |
