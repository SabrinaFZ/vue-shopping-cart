import { mount } from '@vue/test-utils';
import Input from '@/components/Input';
import { expect } from 'chai';

describe('Input.vue implementation', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(Input, {
      propsData: {
        id: '',
        label: '',
        placeholder: '',
        defaultValue: null,
        type: 'text',
        rules: ''
      }
    });
  });

  test('render component', () => {
    const component = wrapper.get('.input');
    expect(component.exists()).to.be.true;
  });

  test('emit event when write in input', () => {
    const input = wrapper.find('.form-control');
    input.setValue('some value');
    expect(wrapper.emitted().input.length).to.equal(1);
  });
});
