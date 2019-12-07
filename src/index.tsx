import * as React from 'react'
import { render } from 'react-dom'
import AppRouter from './app-router'
import './styles/styles.css'


const rootElement = document.getElementById('root')


render(<AppRouter />, rootElement)
