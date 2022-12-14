import {render} from '@testing-library/react'

import { WeatherContextProvider } from './context/weatherContext'



const customRender = (ui, options) =>
  render(ui, {wrapper: WeatherContextProvider, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}