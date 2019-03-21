import React from 'react';
import { shallow } from 'enzyme';
import '../../src/setupTests';
import Search from '../component/Search';
import {findByTestAttr} from '../../Utils/helper';

const setUp = (props={})=>{
    const component = shallow(<Search {...props}/>);
    return component;
};

describe('Search Component', ()=>{

    let component;
    beforeEach(()=>{
      component = setUp();
    });
  
    it('should render without crash', ()=>{
      const wrapper = findByTestAttr(component, 'SearchComponent');
      expect(wrapper.length).toBe(1);
    });
  
  });

