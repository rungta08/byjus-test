import React from 'react';
import { shallow } from 'enzyme';
import '../src/setupTests';
import App from './App';
import {findByTestAttr} from '../Utils/helper';

const setUp = (props={})=>{
  const component = shallow(<App {...props}/>);
  return component;
}

describe('App Component', ()=>{

  let component;
  beforeEach(()=>{
    component = setUp();
  });

  it('should render without crash', ()=>{
    const wrapper = findByTestAttr(component, 'AppComponent');
    expect(wrapper.length).toBe(1);
  });

});
