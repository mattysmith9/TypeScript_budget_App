import * as React from 'react'
import { Link } from 'react-router-dom'
import BudgetTotal from './../components/budget-total'
import BudgetList from '../components/budget-list'
import BudgetItemAdd from './../components/budget-item-add'
import IconSettings from './../components/icon-settings'
import { BudgetItemObjInterface, HomePageInterface } from './../interfaces'

const HomePage = (props: HomePageInterface) => {
  const [budgetPaid, setBudgetPaid] = React.useState(0)
  const [showAddItem, setShowAddItem] = React.useState(false)

  React.useEffect(() => {
    let costs = 0

    props.budgetItems.forEach((item: BudgetItemObjInterface) => {
      if (item.isPaid) {
        costs += item.price
      }
    })

    setBudgetPaid(costs)
  }, [props.budgetItems])

  function handleStorage(task: 'get' | 'update', newState: BudgetItemObjInterface[]) {
    if (props.storageMethod === 'local') {
      if (task === 'update') {

        window.localStorage.setItem('budget-app', JSON.stringify(newState))
      } else {

        if (window && window.localStorage && window.localStorage.getItem('budget-app')) {
          const recoveredLocalData = window.localStorage.getItem('budget-app')

          if (recoveredLocalData) {
            props.setBudgetItems(JSON.parse(recoveredLocalData))
          }
        }
      }
    } else if (props.storageMethod === 'session') {
      if (task === 'update') {
        window.sessionStorage.setItem('budget-app', JSON.stringify(newState))
      } else {
        if (window && window.sessionStorage && window.sessionStorage.getItem('budget-app')) {
          const recoveredSessionData = window.sessionStorage.getItem('budget-app')
          if (recoveredSessionData) {
            props.setBudgetItems(JSON.parse(recoveredSessionData))
          }
        }
      }
    }
  }

  function handleItemUpdate(value: string, id: string, itemProperty: string) {
    const newBudgetItemsState: BudgetItemObjInterface[] = [...props.budgetItems]

    switch (itemProperty) {
      case 'isPaid':
        newBudgetItemsState.find((item: BudgetItemObjInterface) => item.id === id)!.isPaid = !newBudgetItemsState.find((item: BudgetItemObjInterface) => item.id === id)!.isPaid
        break
      case 'price':
        newBudgetItemsState.find((item: BudgetItemObjInterface) => item.id === id)!.price = parseInt(value, 10)
        break
      case 'title':
        newBudgetItemsState.find((item: BudgetItemObjInterface) => item.id === id)!.title = value
        break
    }

    props.setBudgetItems(newBudgetItemsState)

    handleStorage('update', newBudgetItemsState)
  }

  function handleAddItem(payload: BudgetItemObjInterface) {
    const newBudgetItemsState = [...props.budgetItems]

    newBudgetItemsState.push({
      date: payload.date,
      isPaid: payload.isPaid,
      price: payload.price,
      title: payload.title,
      id: payload.id
    })

    props.setBudgetItems(newBudgetItemsState)

    handleStorage('update', newBudgetItemsState)
  }

  function handleItemRemove(id: string) {
    let newBudgetItemsState = props.budgetItems.filter((item: BudgetItemObjInterface) => item.id !== id)

    props.setBudgetItems(newBudgetItemsState)

    handleStorage('update', newBudgetItemsState)
  }

  return (
    <div>
      <header>
        <BudgetTotal
          budgetPeriod={props.budgetPeriod}
          budgetCurrency={props.budgetCurrency}
          budgetAmount={props.budgetAmount}
          budgetPaid={budgetPaid}
        />

        <Link className="btn btn-settings" to="/settings"><IconSettings /></Link>
      </header>

      <BudgetList
        budgetCurrency={props.budgetCurrency}
        budgetItems={props.budgetItems}
        handleItemUpdate={handleItemUpdate}
        handleItemRemove={handleItemRemove}
      />

      {showAddItem && (
        <BudgetItemAdd
          showAddItem={showAddItem}
          handleShowAddItem={setShowAddItem}
          handleAddItem={handleAddItem}
        />
      )}

      <button
        className="btn btn-add"
        onClick={() => setShowAddItem(!showAddItem)}
      >+ <span className="btn-label">Add item</span></button>
    </div>
  )
}

export default HomePage
