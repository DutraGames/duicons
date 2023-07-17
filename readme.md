# **Duicons**

Duicons Icon Library for React in Production **OPEN SORCE**

>>## **NOTICE!**
>
>The library is currently under development and >undergoing testing, but if you wish to try it out >in your project with the limited icons available >at the moment.

## How Install

```cmd
npm i duicons
```

## Usage

```tsx
import {AddOutline} from 'duicons';

export default function IconExample() {

return (
        <AddOutline/>
    )
}
```

You can configure Icons with inline props:

```tsx
<AddOutline color="#eafe23" size={40}/>
```

## Props

|Props|Type|Default|Note|
|---|---|---|---|
|`size`|`string` or `number`|`32px`|size={32} or size="32"|
|`color`|`string`|`#000`|css color|
