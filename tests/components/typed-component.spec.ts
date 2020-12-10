import { mount } from '@vue/test-utils'

import TypedComponent from '~/components/TypedComponent.vue'

describe('unit tests for TypedComponent component', () => {
  test('should render something', () => {
    expect.hasAssertions()
    const wrapper = mount(TypedComponent)
    /**
     * start here :)
     */
  })
})

describe('snapshot tests for TypedComponent component', () => {
  test('should match the snapshot', () => {
      expect.hasAssertions()

      /**
       * and here :)
       */
    })
})
