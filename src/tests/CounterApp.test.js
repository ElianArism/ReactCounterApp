import { shallow } from "enzyme"
import CounterApp from "../components/CounterApp/CounterApp"


describe('CounterApp', () => {
  const wrapper = shallow( <CounterApp value={10} /> ) // Aisla el componente y le toma un snapshot 
  
  beforeEach( () => {
    wrapper.find('button').at(2).simulate('click')
  })

  test('It should prove CounterApp renders correctly', () => {
    expect(wrapper).toMatchSnapshot() // Se encarga de asegurarse que el snapshot y el componente coincidan
  })

  test('It should prove CounterApp renders with 100 as value', () => {
    const wrapper = shallow( <CounterApp value={100} /> ) 
    const paragraph = wrapper.find('p').text() // encuentra un html element en el componente
    
    expect(paragraph).toBe( '100' )
  })

  test('It should increment counter with add button', () => {
    // const btn = wrapper.find('button').at(0).html() // Obt first button tag
    wrapper.find('button').at(0).simulate('click') // Simular click evt
    const counterText = wrapper.find('p').text().trim()

    expect(counterText).toBe('11')
  })

  test('It should decrement counter with substract button', () => {
    wrapper.find('button').at(1).simulate('click') 
    const counterText = wrapper.find('p').text().trim()
    
    expect(counterText).toBe('9')
  })

  test('It should reset counter with reset button', () => {
    wrapper.find('button').at(0).simulate('click') 
    wrapper.find('button').at(0).simulate('click') 
    wrapper.find('button').at(0).simulate('click') 

    wrapper.find('button').at(2).simulate('click') 

    const counterText = wrapper.find('p').text().trim()

    expect(counterText).toBe('10')
  })


})
