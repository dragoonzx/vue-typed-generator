import { mount } from '@vue/test-utils'

import <%= name %> from '~/components/<%= name %>.vue'

describe('unit tests for <%= name %> component', () => {
  test('should render something', () => {
    expect.hasAssertions()
    const wrapper = mount(<%= name %>)
    /**
     * start here :)
     */
  })
})

describe('snapshot tests for <%= name %> component', () => {
  test('should match the snapshot', () => {
      expect.hasAssertions()

      /**
       * and here :)
       */
    })
})
