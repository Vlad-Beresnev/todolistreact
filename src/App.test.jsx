import App from './App'
import TodoTable from './components/todoTable'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders App component', () => {
    render(<App />)
    const header = screen.getByText('Todo List')
    expect(header).toBeInTheDocument()
})

test('add todo', () => {
    render(<App />)

    const description = screen.getByPlaceholderText('description')
    fireEvent.change(description, { target: { value: 'Test description' } })

    const date = screen.getByPlaceholderText('date')
    fireEvent.change(date, { target: { value: '2021-09-01' } })

    const addButton = screen.getByText('add')
    fireEvent.click(addButton)

    const description2 = screen.getByPlaceholderText('description')
    fireEvent.change(description2, { target: { value: 'Test description 2' } })

    const date2 = screen.getByPlaceholderText('date')
    fireEvent.change(date2, { target: { value: '2021-09-02' } })
    fireEvent.click(addButton)

    const row = screen.getByText('Test description')
    expect(row).toBeInTheDocument()
})

test('clean todo', () => {
    render(<App />)

    const description = screen.getByPlaceholderText('description')
    fireEvent.change(description, { target: { value: 'Test description3' } })

    const date = screen.getByPlaceholderText('date')
    fireEvent.change(date, { target: { value: '2021-09-03' } })

    const addButton = screen.getByText('add')
    fireEvent.click(addButton)

    const cleanButton = screen.getByText('Clean')
    fireEvent.click(cleanButton)

    const row = screen.queryByText('Test description3')
    expect(row).not.toBeInTheDocument()
})