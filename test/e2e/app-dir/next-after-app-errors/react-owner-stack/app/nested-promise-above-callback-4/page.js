import { unstable_after } from 'next/server'

export default function Page() {
  return <Wrapper />
}

function Wrapper() {
  return <Inner />
}

async function Inner() {
  await foo()
  return null
}

async function foo() {
  unstable_after(bar())
}

async function bar() {
  unstable_after(function aboveZap() {
    return zap()
  })
}

async function zap() {
  throws()
}

function throws() {
  throw new Error('kaboom')
}
