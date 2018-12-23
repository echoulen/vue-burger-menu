import {mount} from '@vue/test-utils';
import VBurgerMenu from '@/components/VBurgerMenu.vue';

describe('VBurgerMenu spec', () => {
  it('App shows VBurgerMenu with position = left', () => {
    const wrapper = mount(VBurgerMenu, {
      propsData: {isOpen: false, position: 'left'},
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('App shows VBurgerMenu with position = right', () => {
    const wrapper = mount(VBurgerMenu, {
      propsData: {isOpen: false, position: 'right'},
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
