function generate () {
  mkdir ./src/components/$1 &&
  touch ./src/components/$1/$1.tsx &&
  echo "import { Component, Prop, h } from '@stencil/core';" >> ./src/components/$1/$1.tsx &&
  echo  "@Component({" >> ./src/components/$1/$1.tsx &&
  echo  "  tag: '$1'," >> ./src/components/$1/$1.tsx &&
  echo  "  shadow: true" >> ./src/components/$1/$1.tsx &&
  echo  "})" >> ./src/components/$1/$1.tsx &&
  echo  "export class $1Component{" >> ./src/components/$1/$1.tsx &&
  echo  "  render() {" >> ./src/components/$1/$1.tsx &&
  echo  "    return <div>Hello, World!</div>;" >> ./src/components/$1/$1.tsx &&
  echo  "  }" >> ./src/components/$1/$1.tsx &&
  echo  "}" >> ./src/components/$1/$1.tsx &&
  touch ./src/components/$1/$1.scss &&
  touch ./src/components/$1/$1.e2e.ts &&
  touch ./src/components/$1/readme.md
}
