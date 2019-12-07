import * as React from 'react'
import { BudgetItemObjInterface, BudegetListInterface } from '../interfaces'
import BudgetItem from './budget-item'

const BudgetList = (props: BudegetListInterface) => {
  return (
    <div className="budget-list">
      {props.budgetItems.map((item: BudgetItemObjInterface) => {
        return (
          <BudgetItem
            key={item.id}
            budgetCurrency={props.budgetCurrency}
            budgetItem={item}
            handleItemUpdate={props.handleItemUpdate}
            handleItemRemove={props.handleItemRemove}
          />
        )
      })}
    </div>
  )
}

export default BudgetList
