import { render, screen } from '@testing-library/react';
import PlayerProfile from '../components/PlayerProfile';
// let wrapper
// const createWrapper = props => shallow(<MyComponent {...props} />)
// beforeEach(() => {
//   const props = createTestProps()
//   wrapper = createWrapper(props)
// })

test('render <PlayerProfile />', () => {
  render(<PlayerProfile profileId="abc" />);
  // console.log(`screen `, screen);
  // render(<LoadingIndicator profileId="abc" />);
  // expect(screen.getByText(/Player Archive/)).toBeInTheDocument();
});

// test('shows the children when the checkbox is checked', () => {
//   const testMessage = 'Test Message'
//   render(<HiddenMessage>{testMessage}</HiddenMessage>)

//   // query* functions will return the element or null if it cannot be found
//   // get* functions will return the element or throw an error if it cannot be found
//   expect(screen.queryByText(testMessage)).toBeNull()

//   // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
//   fireEvent.click(screen.getByLabelText(/show/i))

//   // .toBeInTheDocument() is an assertion that comes from jest-dom
//   // otherwise you could use .toBeDefined()
//   expect(screen.getByText(testMessage)).toBeInTheDocument()
// })

// it("should update state on click", () => {
//   const changeSize = jest.fn();
//   const wrapper = mount(<App onClick={changeSize} />);
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation(size => [size, changeSize]);

//   wrapper.find("#para1").simulate("click");
//   expect(changeSize).toBeTruthy();
// });
