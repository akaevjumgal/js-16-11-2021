import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CounterPage from "../Pages/CounterPage"
import { counterSlice } from "../store/counter/counterSlice";
import { renderComponent } from "./setupTestEnv";

describe('Counter feature', () => {
  test('should increment value', async () => {
    const preloadedState = {
      counter: {
        value: 0,
      }
    }
    renderComponent(<CounterPage />, { preloadedState });
  
    const counterValue = screen.getByTestId('counter-value');
    const incrementBtn = screen.getByTestId('increment-btn');
  
    fireEvent.click(incrementBtn);
    
    expect(counterValue).toHaveTextContent('1');
  })

  test('should decrement value', async () => {
    const preloadedState = {
      counter: {
        value: 2,
      }
    }
    renderComponent(<CounterPage />, { preloadedState });

    const counterValue = screen.getByTestId('counter-value');
    const decrementBtn = screen.getByTestId('decrement-btn');
  
    fireEvent.click(decrementBtn);
  
    expect(counterValue).toHaveTextContent('1');
  })

  test('counter value should positive number', async () => {
    const preloadedState = {
      counter: {
        value: 0,
      }
    }
    renderComponent(<CounterPage />, { preloadedState });
  
    const counterValue = screen.getByTestId('counter-value');
    const decrementBtn = screen.getByTestId('decrement-btn');
  
    fireEvent.click(decrementBtn);
  
    expect(counterValue).toHaveTextContent('0');
  })

  test('should set counter value by specific amount', async () => {
    const preloadedState = {
      counter: {
        value: 0,
      }
    }
    renderComponent(<CounterPage />, { preloadedState });
  
    const counterValue = screen.getByTestId('counter-value');
    const input = screen.getByTestId('counter-input')

    fireEvent.change(input, { target: { value: 15 } })

    expect(counterValue).toHaveTextContent('15')
  })
})
