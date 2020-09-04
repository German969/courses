# NextJS

## Installation
`npx create-next-app`

## Running
`npm run dev`

## Linking pages
```JavaScript
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </div>
)

export default Index
```

## Adding CSS
```
const Index = props => (
  <div>
		<h1>Home page</h1>

		<style jsx>{`
		  h1 {
		    font-size: ${props.size}rem;
		  }
		`}</style>
  </div>
)
```

### Globally
```
<style jsx global>{`
body {
  margin: 0;
}
`}</style>
```

### Import external CSS file
`npm install @zeit/next-css`

```JavaScript
// in next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
```

In component:
```JavaScript
import '../style.css'
```

## getStaticProps
data will be available inside our page as a prop
```JavaScript
export async function getStaticProps(context) {
  const data = /* ... */

  return {
    props: {
      data
    }
  }
}
```

## getStatisPaths
render statically the dynamic pages
```JavaScript
export async function getStaticPaths() {
return { 
paths: [
  { params: { id: 1 } },
  { params: { id: 2 } }
], 
fallback: false }
}
```

## getServerSideProps
render pages with data from the server
```JavaScript
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```
the context also contains:
- query: the query string of the URL
- req: the Node.js HTTP request object
- res: the Node.js HTTP response object

## Change head tag
```JavaScript
import Head from 'next/head'

const House = props => (
  <div>
    <Head>
      <title>The page title</title>
    </Head>
    {/* the rest of the JSX */}
  </div>
)

export default House
```

## Run code in server side or client side
```JavaScript
if (typeof window === 'undefined') {
  // server-side
}

if (typeof window !== 'undefined') {
  // client-side
}
```
*Next.js, as a build-time optimization, also removes the code that uses those checks from bundles.*