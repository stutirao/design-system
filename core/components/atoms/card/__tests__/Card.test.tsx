import * as React from 'react';
import { shallow } from 'enzyme';
import Card, { ICardProps as IProps } from '../Card';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Shadow = ['light', 'medium', 'dark'];
const Style = [{
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
}];

const Mapper = {
  shadow: valueHelper(Shadow, { required: true, iterate: true }),
  style: valueHelper(Style, { required: true, iterate: true })
};

describe('Card component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Card
          {...attr}
        >
          <span>Hello</span>
        </Card>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
