'use strict'

import test from 'ava'
import mqlBrowser from '../src/browser'
import mqlNode from '../src/node'
;[
  { constructor: mqlNode, target: 'node' },
  { constructor: mqlBrowser, target: 'browser' }
].forEach(({ constructor: mql, target }) => {
  test(`${target} » url without query params`, t => {
    t.snapshot(mql.getApiUrl('https://kikobeats.com'))
  })

  test(`${target} » apiKey`, t => {
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { apiKey: 'foobar' }))
  })

  test(`${target} » flatten options`, t => {
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { overlay: { browser: 'dark' } }))
  })

  test(`${target} » don't pass null`, t => {
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { colorScheme: undefined }))
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { colorScheme: null }))
  })

  test(`${target} » don't pass undefined`, t => {
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { colorScheme: undefined }))
    t.snapshot(mql.getApiUrl('https://kikobeats.com', { colorScheme: null }))
  })
})
