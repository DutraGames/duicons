# **Duicons**

Duicons Icon Library for React.

![duicons](https://img.shields.io/npm/v/duicons?color=red)

![npm](https://img.shields.io/npm/dm/duicons)

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
