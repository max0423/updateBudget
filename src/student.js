//import * as ReactDataGrid from 'react-data-grid';

import  React, {Component} from 'react'; 
import * as $ from 'jquery';
import {bindActionCreators} from 'redux';
import Chart1 from "react-apexcharts";
//import { Bar } from 'react-chartjs-2';

import * as objectAssignfrom from 'object-assign';
import {connect} from 'react-redux';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './bootstrap.min.css';

import CanvasComponent  from './Bar';
import './example.css';
import './react-context-menu.css';
import ListRender from './ListRender';
//import { Menu } from "react-data-grid-addons";
import DoughnutChart from './chart';
import {selectUser, handleGridRowsUpdated1, getGithubDataAsyn} from './actions/index'
import * as update from 'immutability-helper';
import { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
const axios = require('axios');
//import update from 'react-dom';
const highLightColor = "#EB6C2C";
const marginTop = '0px';
const firstMonth = 'Sep';

const columns11 = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows11 = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

const labels =  [
  'Employment',
  'Saving',
      'Allowance',
      'Loan'
];

const labels1 =  [
  'Tuition',
  'Saving',
  'Allowance',
  'Loan',
  'Employment',
  'Saving',
  'Allowance',
  'Loan',
  'Books & Supplies'
];
const dataBar = {
  labels: ['Income', 'Expense'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      
      data: [65, 59]
    }
  ]
};

//const { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } = Menu;
//const { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } = Menu;
const defaultColumnProperties = {
  sortable: true,
  width: 120
};

const columns = [
  {
    key: "id",
    name: "ID",
    sortDescendingFirst: true
  },
  {
    key: "title",
    name: "Title"
  },
  {
    key: "firstName",
    name: "First Name"
  },
  {
    key: "lastName",
    name: "Last Name"
  },
  {
    key: "email",
    name: "Email"
  },
  {
    key: "street",
    name: "Street"
  },
  {
    key: "zipCode",
    name: "ZipCode"
  },
  {
    key: "date",
    name: "Date"
  },
  {
    key: "jobTitle",
    name: "Job Title"
  },
  {
    key: "catchPhrase",
    name: "Catch Phrase"
  },
  {
    key: "jobArea",
    name: "Job Area"
  },
  {
    key: "jobType",
    name: "Job Type"
  }
].map(c => ({ ...c, ...defaultColumnProperties }));

const ROW_COUNT = 50;

// function ExampleContextMenu({
//   idx,
//   id,
//   rowIdx,
//   onRowDelete,
//   onRowInsertAbove,
//   onRowInsertBelow
// }) {
//   return (
//     <ContextMenu id={id}>
//       <MenuItem data={{ rowIdx, idx }} onClick={onRowDelete}>
//         Delete Row
//       </MenuItem>
     
//         <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertAbove}>
//           Inserte Row
//         </MenuItem>
        
//     </ContextMenu>
//   );
// }

const deleteRow = rowIdx => rows => {
  const nextRows = [...rows];
  nextRows.splice(rowIdx, 1);
  return nextRows;
};

const insertRow = rowIdx => rows => {
   const nextRows = [...rows];
   return nextRows;
};

// function Example({ initialRows }) {
//   const [rows, setRows] = useState(initialRows);
//   return (
//     <ReactDataGrid
//       columns={columns}
//       rowGetter={i => rows[i]}
//       rowsCount={ROW_COUNT}
//       minHeight={500}
//       contextMenu={
//         <ExampleContextMenu
//           onRowDelete={(e, { rowIdx }) => (deleteRow(rowIdx))}
//           onRowInsertAbove={(e, { rowIdx }) => (insertRow(rowIdx))}
//           onRowInsertBelow={(e, { rowIdx }) => (insertRow(rowIdx + 1))}
//         />
//       }
//       RowsContainer={ContextMenuTrigger}
//     />
//   );
// }


// class MyContextMenu extends React.Component{
//    onRowDelete(e, data) {
//     if (typeof(this.props.onRowDelete) === 'function') {
//       this.props.onRowDelete(e, data);
//     }
//   }

//   onRowInsert(e, data) {
//     if (typeof(this.props.onRowInsert) === 'function') {
//       this.props.onRowInsert(e, data);
//     }
//   }

//   render() {
//     return (
//       <ContextMenu >
//         <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick ={this.onRowDelete}>Delete Row</MenuItem>
//         <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick ={this.onRowInsert}>Insert Row</MenuItem>
//       </ContextMenu>
//     );
//   }
// };


class YearFormatter extends React.Component {
  render() {
    const year = this.props.value;
    return (
      <div style={{marginTop: marginTop}}>
        <div style = {{color: highLightColor}} >
          { year }
        </div>
      </div>);
  }
}


class Student extends React.Component{
//  const [rows, setRows] = useState(initialRows);
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    var rows1;
    var self = this;
    let items = [];
    const firstMonth = 'Sep';
  
    let  currentMonth = firstMonth;
    let  headerName = this.creatHeader(
      { key: 'Jan', name: 'Jan', editable: true,width:65 },
      { key: 'Feb', name: 'Feb', editable: true, width:65 } ,
      { key: 'Mar', name: 'Mar', editable: true, width:65 },
      { key: 'Apr', name: 'Apr', editable: true, width:65 },
      { key: 'May', name: 'May', editable: true, width:65 },
      { key: 'June', name: 'June', editable: true, width:65},
      { key: 'July', name: 'July', editable: true, width:65},
      { key: 'Aug', name: 'Aug', editable: true, width:65 },
      { key: 'Sep', name: 'Sep', editable: true, width:65  },
      { key: 'Oct', name: 'Oct', editable: true, width:65 },
      { key: 'Nov', name: 'Nov', editable: true, width:65 },
      { key: 'Dec',name: 'Dec',editable: true, width:65 },
      {key: 'Year',name: 'Year',width:55,editable: false,formatter: YearFormatter }
  );

  
    let headerWithoutName = this.creatHeader(
      { key: 'Jan', name: '', editable: true, width:65 },
      { key: 'Feb', name: '', editable: true, width:65 },
      { key: 'Mar', name: '', editable: true, width:65 },
      { key: 'Apr', name: '', editable: true, width:65 },
      { key: 'May', name: '', editable: true, width:65 },
      { key: 'June', name: '', editable: true, width:65 },
      { key: 'July', name: '', editable: true, width:65 },
      { key: 'Aug', name: '', editable: true, width: 65 },
      { key: 'Sep', name: '', editable: true, width:65 },
      { key: 'Oct', name: '', editable: true, width:65 },
      { key: 'Nov', name: '', editable: true, width:65 },
      { key: 'Dec', name: '', editable: true, width:65 },
      { key: 'Year', name: '', width:55, editable: false, formatter: YearFormatter }
  );
    
      
    var MonthlyExpenseColumn = [{ key: 'MonthlyExpense', name: 'MONTHLY EXPENSE', width: 230, editable: true }];
    var HousingColumn = [{ key: 'Housing', name: '', width: 230, editable: true }];
    var HouseholdExpensesColumn = [{ key: 'HouseholdExpenses', name: '', width: 230, editable: true }];
    var InsuranceColumn = [{ key: 'Insurance', name: '', width: 230, editable: true }];
    var UtilitiesColumn = [{ key: 'Utilities', name: '', width: 230, editable: true }];
    var LoanPaymentColumn =  [{ key: 'LoanPayment', name: '', width: 230, editable: true }];
    var MonthlyCashColumn = [{ key: 'MonthlyCash', name: 'Monthly Cash After Expense', width: 230, editable: true }];
    var TuitionFeesColumn = [{ key: 'Tuition&Fees', name: '', width: 230, editable: true }];
    var TransportationColumn =  [{ key: 'Transportation', name: '', width: 230, editable: true }];
    var BooksSuppliesColumn = [{ key: 'BooksSupplies', name: '', width: 230, editable: true }];
    var MonthlyIncomeColumn = [{ key: 'MonthlyIncome', name: 'MONTHLY INCOME', width: 230, background: 'red', editable: true }];
    var DiscretionaryColumn = [{ key: 'Discretionary',name: '', width: 230, editable: true }];
    var OtherExpensesColumn = [{ key: 'OtherExpenses', name: '', width: 230, editable: true }];
    var TotalExpensesColumn = [{ key: 'TotalExpenses', name: '', width: 230, editable: false }];


    this._monthlyCashColumns =  MonthlyCashColumn.concat(headerName);
    this._monthlyIncomeColumns = MonthlyIncomeColumn.concat(headerName);
    this._housingColumns =  HousingColumn.concat(headerWithoutName);
    this._housingColumns1 =  HouseholdExpensesColumn.concat(headerWithoutName);
    this._monthlyExpenseColumns = MonthlyExpenseColumn.concat(headerName);
    this._insuranceColumns=  InsuranceColumn.concat(headerWithoutName);
    this._utilitiesColumns =  UtilitiesColumn.concat(headerWithoutName);
    this._loanPaymentColumns =  LoanPaymentColumn.concat(headerWithoutName);
    this._transportationColumns =  TransportationColumn.concat(headerWithoutName);
    this._booksSuppliesColumns =  BooksSuppliesColumn.concat(headerWithoutName);
    this._discretionaryColumns =  DiscretionaryColumn.concat(headerWithoutName);
    this._otherExpensesColumns =  OtherExpensesColumn.concat(headerWithoutName);
    this._totalExpensesColumns =  TotalExpensesColumn.concat(headerWithoutName);

    //this.avail =  this.state.income - this.state.expense;



    this.state = {rows: self.createSummaryRows(5), 
      monthlyExpenseRows: self.createTable("MonthlyExpense", ["Tuition & Fees","Tuition", "Ancillary fees"]),
      housingRows: self.createTable("Housing", ["Housing", "Rent or residence", "Mortgage", "Property taxes"]),
      householdExpensesRows: self.createTable("HouseholdExpenses", ["Household Expenses", "Groceries", "Household", "Personal/Hygiene", "Child care"]),
      insurancerows: self.createTable("Insurance", ["Insurance","Car", "Home", "Mortgage", "Other/Life"]),
      utilitiesRows: self.createTable("Utilities", ["Utilities","Cell phone", "Hydro", "Water", "Gas", "Cable", "Internet"]),
      loanPaymentRows: self.createTable("LoanPayment", ["Debt Payment","Line of credit", "Bank", "Car loan", "Credit card"]),
      transportationRows: self.createTable("Transportation", ["Transportation","Gas, maintenance","Bus", "Parking", "Taxis", "License and registration", "Transit fares","Travel at holidays"]),
      booksSuppliesRows: self.createTable("BooksSupplies", ["Books & Supplies","Textbooks", "School supplies", "Lab uniforms"]),
      discretionaryRows: self.createTable("Discretionary", ["Discretionary","Savings", "Donations", "Snacks, dining out", "Clothes","Entertainment"]),
      otherExpensesRows: self.createTable("OtherExpenses", ["OtherExpenses","Loan, credit card payment", "Other"]),
      totalExpensesRows: self.createTable("TotalExpenses", ["Total Expenses"]),
      cashFlowRows: self.createTable("MonthlyCash", ["Available funds", "Cumulative available funds"]),
      currentMonth: firstMonth,
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Income", "Expense", "Balance"]
        }
      },
        series: [
          {
            name: "series-1",
            data: [300, 400, 100]
          }
        ]
      }
    }


  sliderMove(value) {
    var step = Math.round(value/8.3);
    var months ={0: 'Sep', 1:'Oct', 2: 'Nov', 3: 'Dec', 4: 'Jan', 5: 'Feb', 6: 'Mar', 7: 'Apr', 8:'May', 9:'June', 10:'July', 11: 'Aug', 12:'Year'};
    var month = months[step];
    this.state.currentMonth = month;
    this.setState({currentMonth: month});
    this.getIncomeBalance();
    this.getExpenseBalance();
    this.createReportDataSet();
    this.createExpenseReportDataSet();
    var series =  [
      {
        name: "series-1",
        data: [this.state.income, this.state.expense, this.state.income- this.state.expense]
      }
    ]
    
    this.setState({ series: series });
    console.log(month);
  }
      
onCellSelected(rowIdx, idx){
  this.state.currentRowIdx = rowIdx.rowIdx;
  this.state.currentIdx = rowIdx.idx;
  var currentGrid = this.state.currentgrid;
 
  for(var i=1; i <= 12; i++ )
   {
      let grid = "grid" + i;
      let rowIdx = this[grid].state.selected;

        if ( rowIdx.rowIdx> 0 || rowIdx.idx > 0)
        {
              if( currentGrid != i){
                  this.state.currentgrid = i;
                  if (currentGrid != null)
                  {
                      grid = "grid" + currentGrid;
                  }
                  else{
                    this.state.currentgrid = i;
                  }
                
                this[grid].state.selected.rowIdx = 0;
                this[grid].state.selected.idx = 0;
                    
              }
          }
        }
}

      createTable(firstColumn, columns){
        let rows = [];
        var numberofrows = columns.length;
        for (let i = 0; i < numberofrows; i++) {
          rows.push({
            Jan: "",
            Feb: "",
            Mar: "",
            Apr: "",
            May: "",
            June: "",
            July: "",
            Aug: "",
            Sep: "",
            Oct: "",
            Nov: "",
            Dec: ""
          });
        }
        columns.forEach((element,index) => {
            rows[index][firstColumn] = element;
        });
          rows[0].Jan = this.sumByColomn(rows,'Jan');
          rows[0].Feb = this.sumByColomn(rows,'Feb');
          rows[0].Mar = this.sumByColomn(rows,'Mar');
          rows[0].Apr = this.sumByColomn(rows,'Apr');
          rows[0].May = this.sumByColomn(rows,'May');
          rows[0].June = this.sumByColomn(rows,'June');
          rows[0].July = this.sumByColomn(rows,'July');
          rows[0].Aug = this.sumByColomn(rows,'Aug');
          rows[0].Sep = this.sumByColomn(rows,'Sep');
          rows[0].Oct = this.sumByColomn(rows,'Oct');
          rows[0].Nov= this.sumByColomn(rows,'Nov');
          rows[0].Dec = this.sumByColomn(rows,'Dec');
          columns.forEach((element,index) => {
          rows[index]['Year'] = this.sumByRow(rows[index]);
          console.log(this.sumByRow(rows[index]), firstColumn );
        });
        return rows;
      }
     
      sumByColomn(rows,column){
        var temp = $.extend({}, rows);
        var amount = 0;
        delete temp[0];
        Object.keys(temp).forEach(function(key) {
            amount = amount +temp[key][column];
        });
        return amount == 0 ? "": amount;
      }
    
    
      sumByRow(row){
        var temp = $.extend({}, row);
        var amount = 0;
        var columns = ['MonthlyIncome', 'Year','MonthlyExpense', 'Housing', 'Insurance', 'Utilities', 'LoanPayment',
         'MonthlyCash', 'Transportation', 'BooksSupplies', 'Discretionary', 'OtherExpenses', 'TotalExpenses', 'HouseholdExpenses' ];
        for (var k in temp){ 
          if ( columns.indexOf(k) < 0)
          {
              amount = amount + Number(row[k]);
          }
        }
          return amount == 0 ? "" : amount;
      }

      
  sum(rows,column){
    var amount = 0;
    rows.forEach(element => {
    amount =  amount + Number(element[column] == undefined ? 0: element[column]);
  });
  return amount== 0 ? "" : amount;
}
      
  createSummaryRows(numberofrows) {
    let rows = [];
    for (let i = 1; i < numberofrows; i++) {
      rows.push({
      //  Sep: Math.min(2000, Math.round(Math.random() * 2000)),
        Sep: "",
        Jan: "",
        Feb: "",
        Mar:  "",
        Apr:  "",
        May: "",
        June: "",
        July: "",
        Aug: "",
        Oct: "",
        Nov: "",
        Dec: ""
      });
    }
      rows[0].MonthlyIncome = "Employment";
      rows[1].MonthlyIncome = "Saving";
      rows[2].MonthlyIncome = "Allowance";
      rows[3].MonthlyIncome = "Loan";
      rows[0].Year = this.sumByRow(rows[0]);
      rows[1].Year = this.sumByRow(rows[1]);
      rows[2].Year = this.sumByRow(rows[2]);
      rows[3].Year = this.sumByRow(rows[3]);
  
      rows.push(
      {
          MonthlyIncome:  "TOTAL INCOME",
          Jan:  this.sum(rows,'Jan'),
          Feb:  this.sum(rows,'Feb'),
          Mar: this.sum(rows,'Mar'),
          Apr: this.sum(rows,'Apr'),
          May: this.sum(rows,'May'),
          June: this.sum(rows,'June'),
          July: this.sum(rows,'July'),
          Aug: this.sum(rows,'Aug'),
          Sep: this.sum(rows,'Sep'),
          Oct: this.sum(rows,'Oct'),
          Nov: this.sum(rows,'Nov'),
          Dec: this.sum(rows,'Dec')
      });
          return rows;
  }
  
  
  sumByRow(row){
    var temp = $.extend({}, row);
    var amount = 0;
    var columns = ['MonthlyIncome', 'Year','MonthlyExpense', 'Housing', 'Insurance', 'Utilities', 'LoanPayment',
     'MonthlyCash', 'Transportation', 'BooksSupplies', 'Discretionary', 'OtherExpenses', 'TotalExpenses', 'HouseholdExpenses' ];
    for (var k in temp){ 
      if ( columns.indexOf(k) < 0)
      {
          amount = amount + Number(row[k]);
      }
    }
      return amount == 0 ? "" : amount;
  }

creatHeader(Jan, Feb, Mar, Apr, May, June, July, Aug, Sep, Oct, Nov, Dec, Year){
  var headerName = [
  {
    key: Sep.key,
    name: Sep.name,
    editable: Sep.editable,
    width: Sep.width
  },
  {
    key: Oct.key,
    name: Oct.name,
    editable: Oct.editable,
    width:Oct.width
  },

  {
    key: Nov.key,
    name: Nov.name,
    editable: Nov.editable,
    width: Nov.width
  },

  {
    key: Dec.key,
    name: Dec.name,
    editable: Dec.editable,
    width: Dec.width
  },

    {
    key: Jan.key,
    name: Jan.name,
    editable: Jan.editable,
    width:Jan.width
  },
    {
    key: Feb.key,
    name: Feb.name,
    editable: Feb.editable,
    width:Feb.width
  },
  {
    key: Mar.key,
    name: Mar.name,
    editable: Mar.editable,
    width: Mar.width
  },
  {
    key: Apr.key,
    name: Apr.name,
    editable: Apr.editable,
    width:Apr.width
  },
  {
    key: May.key,
    name: May.name,
    editable: May.editable,
    width:May.width
  },
  {
    key: June.key,
    name: June.name,
    editable: June.editable,
    width: June.width
  },
  {
    key: July.key,
    name: July.name,
    editable: July.editable,
    width: July.width
  },
  {
    key: Aug.key,
    name: Aug.name,
    editable: Aug.editable,
    width: Aug.width
  },
  {
    key: Year.key,
    name: Year.name,
    editable: Year.editable,
    width: Year.width,
    formatter: YearFormatter
  },
];
return headerName;
}
      
      createRows(numberofrows) {
        let rows = [];
        for (let i = 1; i < numberofrows; i++) {
          rows.push({
            Jan:  Math.min(100, Math.round(Math.random() * 110)),
            Feb: Math.min(100, Math.round(Math.random() * 110)),
            Mar:  Math.min(100, Math.round(Math.random() * 110)),
            Apr:  Math.min(100, Math.round(Math.random() * 110)),
            May: Math.min(100, Math.round(Math.random() * 110)),
            June: Math.min(100, Math.round(Math.random() * 110)),
            July: Math.min(100, Math.round(Math.random() * 110)),
            Aug: Math.min(100, Math.round(Math.random() * 110)),
            Sep: Math.min(100, Math.round(Math.random() * 110)),
            Oct: Math.min(100, Math.round(Math.random() * 110))
            // Nov: Math.min(100, Math.round(Math.random() * 110)),
            // Dec: Math.min(100, Math.round(Math.random() * 110))
          });
        }
      //  rows[Jan]
      console.log(rows);
      rows[0].Jan  = "MONTHLY INCOME";
       rows[1].Jan = "Employment";
        rows[2].Jan = "Saving and investments";
        rows[3].Jan = "allowance";
        rows[4].Jan = "TOTAL INCOME";
        return rows;
      }
    
      rowGetter(i) {
        return this.state.rows[i];
      //  var self = this;
     //   return self[i];
      }

      
  sumBySections(sections){
    var JanExpense = 0;
    var FebExpense = 0;
    var MarExpense = 0;
    var AprExpense = 0;
    var MayExpense = 0;
    var JuneExpense = 0;
    var JulyExpense = 0;
    var AugExpense = 0;
    var SepExpense = 0;
    var OctExpense = 0;
    var NovExpense = 0;
    var DecExpense = 0;
    var incomeSection = arguments[0];
    var JanIncome = this.sum(incomeSection, 'Jan');
    var FebIncome = this.sum(incomeSection, 'Feb');
    var MarIncome = this.sum(incomeSection, 'Mar');
    var AprIncome = this.sum(incomeSection, 'Apr');
    var MayIncome = this.sum(incomeSection, 'May');
    var JuneIncome = this.sum(incomeSection, 'June');
    var JulyIncome = this.sum(incomeSection, 'July');
    var AugIncome = this.sum(incomeSection, 'Aug');
    var SepIncome = this.sum(incomeSection, 'Sep');
    var OctIncome = this.sum(incomeSection, 'Oct');
    var NovIncome = this.sum(incomeSection, 'Nov');
    var DecIncome = this.sum(incomeSection, 'Dec');
    for (var i = 1; i < arguments.length; i++) {
      var rows = arguments[i];

      JanExpense = JanExpense + Number(rows[0].Jan);
      FebExpense = FebExpense + Number(rows[0].Feb);
      MarExpense = MarExpense + Number(rows[0].Mar);
      AprExpense = AprExpense + Number(rows[0].Apr);
      MayExpense = MayExpense + Number(rows[0].May);
      AugExpense = AugExpense + Number(rows[0].Aug);
      JuneExpense = JuneExpense + Number(rows[0].June);
      JulyExpense = JulyExpense + Number(rows[0].July);
      SepExpense = SepExpense + Number(rows[0].Sep);
      OctExpense = OctExpense + Number(rows[0].Oct);
      NovExpense = NovExpense + Number(rows[0].Nov);
      DecExpense = DecExpense + Number(rows[0].Dec);
  }
  return {
        Jan: JanExpense,
        Feb: FebExpense,
        Mar: MarExpense,
        Apr: AprExpense,
        May: MayExpense,
        June: JuneExpense,
        July: JulyExpense,
        Aug: AugExpense,
        Sep: SepExpense,
        Oct: OctExpense,
        Nov: NovExpense,
        Dec: DecExpense,
        TotalExpenses: "Total Expenses"
      };
  }


  rowGetterBooksSupplies(i) {
    return this.state.booksSuppliesRows[i];
  }

  rowGetterDiscretionary(i) {
    return this.state.discretionaryRows[i];
  }

  rowGetterOtherExpenses(i) {
    return this.state.otherExpensesRows[i];
  }

  rowGetterHousing(i) {
    return this.state.housingRows[i];
  }


  rowGetterHousing1(i) {
     return this.state.householdExpensesRows[i];
  }

  rowGetterInsurance(i) {
    return this.state.insurancerows[i];
  }

  
  rowGetterUtilities(i) {
    return this.state.utilitiesRows[i];
  }

  rowGetterLoanPayment(i) {
    return this.state.loanPaymentRows[i];
  }
  rowGetterTransportation(i) {
    return this.state.transportationRows[i];
  }

  rowGetterBooksSupplies(i) {
    return this.state.booksSuppliesRows[i];
  }

  rowGetterDiscretionary(i) {
    return this.state.discretionaryRows[i];
  }

  rowGetterOtherExpenses(i) {
    return this.state.otherExpensesRows[i];
  }

  
 rowGetterTotalExpenses(i) {
    var result = this.sumBySections(this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
    this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, this.state.otherExpensesRows);
    result.Year = result.Sep + result.Oct + result.Nov+ result.Dec+ result.Jan+ 
            result.Feb+ result.Mar+ result.Apr+ result.May+ result.June + result.July + result.Aug;
    return result;
  }


 
  rowGetterMonthlyExpense(i) {
    
     return this.state.monthlyExpenseRows[i];
  }

      
  checkCells(i, e){
    var row = i.rowIdx;
    var col = i.idx;
    var obj = {rowIdx: row, idx: col};
    var cells = [{rowIdx:0, idx:0}, {rowIdx:0, idx:1},  {rowIdx:0, idx:2},  {rowIdx:0, idx:3},  {rowIdx:0, idx:4},  {rowIdx:0, idx:5},  {rowIdx:0, idx:6},
              {rowIdx:0, idx:7},  {rowIdx:0, idx:8},  {rowIdx:0, idx:9},  {rowIdx:0, idx:10},  {rowIdx:0, idx:11},  {rowIdx:0, idx:12}
         ] 
       for (let i=0; i<cells.length; i++) { 
           if (JSON.stringify(cells[i]) === JSON.stringify(obj) ) {
                 return false;
             }
       }
   }

   handleGridRowsUpdatedMonthlyExpense({ fromRow, toRow, updated }) {
    var filled = false;
    let monthlyExpenseRows = this.state.monthlyExpenseRows.slice();
    let length = this.state.monthlyExpenseRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = monthlyExpenseRows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

       for(var key in updatedRow) {
         if (['MonthlyExpense','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
        
        }

      if(updatedRow.Oct == "" && filled == false)
      {
          updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }
      monthlyExpenseRows[i] = updatedRow;
    }
   
      var items = monthlyExpenseRows.slice(1,length);
      var jan = this.sum(items, 'Jan' );
      var mar = this.sum(items, 'Mar' );
      var feb = this.sum(items, 'Feb' );
      var mar = this.sum(items, 'Mar' );
      var apr = this.sum(items, 'Apr' );
      var may = this.sum(items, 'May' );
      var june = this.sum(items, 'June' );
      var july = this.sum(items, 'July' );
      var aug = this.sum(items, 'Aug' );
      var sep = this.sum(items, 'Sep' );
      var oct = this.sum(items, 'Oct' );
      var nov = this.sum(items, 'Nov' );
      var dec = this.sum(items, 'Dec' );

      const newRow = {
            MonthlyExpense:  "Tuition&Fees", Jan: jan, Feb: feb,Mar: mar, Apr: apr, May:  may, June: june, July: july,
            Aug: aug, Sep: sep, Oct: oct, Nov: nov, Dec: dec
      };

      monthlyExpenseRows[0] = newRow;
      this.sumByYear(monthlyExpenseRows);
      this.setState({ monthlyExpenseRows: monthlyExpenseRows });
      this.layoutSetting(this.grid2);
      this.onSave({ "monthlyExpenseRows" : monthlyExpenseRows})
      this.getIncomeBalance();
      this.getExpenseBalance();
  }

  componentDidMount(){

    var user = {};
    user.first = "max";

    console.log(this.props.selectUser(user));

    

   this.props.getGithubDataAsyn().then(res=>{
     console.log("Success!!");
     console.log(this.state.rows);

  })

    
    function getGithubData() {
     axios.get('https://node888.azurewebsites.net/api/items')
      //axios.get('http://localhost:5001/api/items')
        .then(res => {
          console.log(res.data);
          var result = res.data.json;
          var monthlyExpenseRows, booksSuppliesRows, insurancerows, transportationRows, otherExpensesRows;
          var rows, housingRows, utilitiesRows, loanPaymentRows, discretionaryRows, householdExpensesRows;
          //var result = JSON.parse(val);
          rows = result['rows']['rows'];
    if (rows == undefined)
    {
        rows = result['rows'];
    }
     
    monthlyExpenseRows = result['monthlyExpenseRows']['monthlyExpenseRows'];
    if (monthlyExpenseRows == undefined)
    {
        monthlyExpenseRows = result['monthlyExpenseRows'];
    }
         
    booksSuppliesRows = result['booksSuppliesRows']['booksSuppliesRows'];
    if (booksSuppliesRows == undefined)
    {
        booksSuppliesRows = result['booksSuppliesRows'];
    }

      housingRows = result['housingRows']['housingRows'];
    if (housingRows == undefined)
    {
        housingRows = result['housingRows'];
    }

    insurancerows = result['insuranceRows']['insuranceRows'];
    if (insurancerows == undefined)
    {
        insurancerows = result['insuranceRows'];
    }

    utilitiesRows = result['utilitiesRows']['utilitiesRows'];
    if (utilitiesRows == undefined)
    {
        utilitiesRows = result['utilitiesRows'];
    }

    loanPaymentRows = result['loanPaymentRows']['loanPaymentRows'];
    if (loanPaymentRows == undefined)
    {
        loanPaymentRows = result['loanPaymentRows'];
    }
  
    transportationRows = result['transportationRows']['transportationRows'];
    if (transportationRows == undefined)
    {
        transportationRows = result['transportationRows'];
    }
    
    discretionaryRows = result['discretionaryRows']['discretionaryRows'];
    if (discretionaryRows == undefined)
    {
        discretionaryRows = result['discretionaryRows'];
    }

    otherExpensesRows = result['otherExpensesRows']['otherExpensesRows'];
    if (otherExpensesRows == undefined)
    {
        otherExpensesRows = result['otherExpensesRows'];
    }

    householdExpensesRows = result['householdExpensesRows']['householdExpensesRows'];
    if (householdExpensesRows == undefined)
    {
        householdExpensesRows = result['householdExpensesRows'];
    }


    self.setState({rows: rows, monthlyExpenseRows: monthlyExpenseRows, booksSuppliesRows: booksSuppliesRows, housingRows: housingRows,
        insurancerows: insurancerows, utilitiesRows: utilitiesRows, loanPaymentRows: loanPaymentRows, transportationRows: transportationRows,
        discretionaryRows: discretionaryRows, otherExpensesRows: otherExpensesRows, householdExpensesRows: householdExpensesRows
      });

      var inc = self.getIncomeBalance();
      var exp = self.getExpenseBalance();
     
      var series =  [
        {
          name: "series-1",
          data: [inc, exp, inc- exp]
        }
      ]
      
          self.setState({ series: series });
          
        })
       
    }
    
    getGithubData();

    

    //debugger;
   // if(  $('div[class^="feedback_"]') != undefined){
      //  $('div[class^="feedback_"]')[0].outerHTML = "";  
   // }
   
  //  var loginName = this.props.context.pageContext.user.loginName;
    var self = this;

    var monthlyExpenseRows, booksSuppliesRows, insurancerows, transportationRows, otherExpensesRows;
    var rows, housingRows, utilitiesRows, loanPaymentRows, discretionaryRows, householdExpensesRows;
    //var result = JSON.parse(val);

   // var result = {};
  //  rows = result['rows']['rows'];
    
   // self.createSummaryRows(5)

     

  

   // self.setState({rows: rows});

    //  self.setState({rows: rows, monthlyExpenseRows: monthlyExpenseRows, booksSuppliesRows: booksSuppliesRows, housingRows: housingRows,
    //    insurancerows: insurancerows, utilitiesRows: utilitiesRows, loanPaymentRows: loanPaymentRows, transportationRows: transportationRows,
    //    discretionaryRows: discretionaryRows, otherExpensesRows: otherExpensesRows, householdExpensesRows: householdExpensesRows
    //  });

    

   for(var i= 2; i <= 12; i++ ){
      if ( i!= 11){
        let name = "grid" + i;
        var grid = this[name];
        this.layoutSetting(grid);
     }
  }
     
   let selected10 = objectAssignfrom({}, this.grid.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid.setState({selected: selected10});
   
  }


  

  handleGridRowsUpdatedHouseholdExpensesRows({ fromRow, toRow, updated }) {
      var filled = false;
      let householdExpensesRows = this.state.householdExpensesRows.slice();
      let length = this.state.householdExpensesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = householdExpensesRows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

       for(var key in updatedRow) {
         if (['HouseholdExpenses','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
          updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }

      householdExpensesRows[i] = updatedRow;
    }
   
      var items = householdExpensesRows.slice(1,length);
      var _row = this.createSummaryRow(items, "HouseholdExpenses");
      householdExpensesRows[0] = _row;
      this.sumByYear(householdExpensesRows);
      this.setState({ householdExpensesRows: householdExpensesRows});

      this.onSave({ "householdExpensesRows" : householdExpensesRows})
    
  }

  handleGridRowsUpdatedHousing({ fromRow, toRow, updated }) {
    var filled = false;
    let housingRows = this.state.housingRows.slice();
    let length = this.state.housingRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = housingRows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

        for(var key in updatedRow) {
         if (['Housing','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
           updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }


      housingRows[i] = updatedRow;
    }
   
      var items = housingRows.slice(1,length);
      var _row = this.createSummaryRow(items, "Housing");
      housingRows[0] = _row;
      this.sumByYear(housingRows);
      this.setState({ housingRows: housingRows});

       this.onSave({ "housingRows" : housingRows})

  }

  
  createSummaryRow(items,column){
    var jan = this.sum(items, 'Jan' );
    var mar = this.sum(items, 'Mar' );
    var feb = this.sum(items, 'Feb' );
    var mar = this.sum(items, 'Mar' );
    var apr = this.sum(items, 'Apr' );
    var may = this.sum(items, 'May' );
    var june = this.sum(items, 'June' );
    var july = this.sum(items, 'July' );
    var aug = this.sum(items, 'Aug' );
    var sep = this.sum(items, 'Sep' );
    var oct = this.sum(items, 'Oct' );
    var nov = this.sum(items, 'Nov' );
    var dec = this.sum(items, 'Dec' );
    const newRow = { Jan: jan, Feb: feb,Mar: mar, Apr: apr,May:  may, June: june, July: july, Aug: aug, Sep: sep, Oct: oct, Nov: nov, Dec: dec};
    newRow[column] = column;
    return newRow;
}
  createSummaryRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
      //  Sep: Math.min(2000, Math.round(Math.random() * 2000)),
        Sep: "",
        Jan: "",
        Feb: "",
        Mar:  "",
        Apr:  "",
        May: "",
        June: "",
        July: "",
        Aug: "",
        Oct: "",
        Nov: "",
        Dec: ""
      });
    }
      rows[0].MonthlyIncome = "Employment";
      rows[1].MonthlyIncome = "Saving";
      rows[2].MonthlyIncome = "Allowance";
      rows[3].MonthlyIncome = "Loan";
      rows[0].Year = this.sumByRow(rows[0]);
      rows[1].Year = this.sumByRow(rows[1]);
      rows[2].Year = this.sumByRow(rows[2]);
      rows[3].Year = this.sumByRow(rows[3]);
  
      rows.push(
      {
          MonthlyIncome:  "TOTAL INCOME",
          Jan:  this.sum(rows,'Jan'),
          Feb:  this.sum(rows,'Feb'),
          Mar: this.sum(rows,'Mar'),
          Apr: this.sum(rows,'Apr'),
          May: this.sum(rows,'May'),
          June: this.sum(rows,'June'),
          July: this.sum(rows,'July'),
          Aug: this.sum(rows,'Aug'),
          Sep: this.sum(rows,'Sep'),
          Oct: this.sum(rows,'Oct'),
          Nov: this.sum(rows,'Nov'),
          Dec: this.sum(rows,'Dec')
      });
          return rows;
  }
  


  handleGridRowsUpdatedInsurance({ fromRow, toRow, updated }) {
    var filled = false;
    let rows = this.state.insurancerows.slice();
    let length = this.state.insurancerows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

        for(var key in updatedRow) {
         if (['Insurance','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
           updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }

      rows[i] = updatedRow;
    }
    var items = rows.slice(1,length);
    var _row = this.createSummaryRow(items, "Insurance");
    rows[0] = _row;
    this.sumByYear(rows);
    this.setState({ insurancerows: rows});

        this.onSave({ "insuranceRows" : rows})

  }

  handleGridRowsUpdatedOtherExpenses({ fromRow, toRow, updated }) {
    var filled = false;
    let rows = this.state.otherExpensesRows.slice();
    let length = this.state.otherExpensesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

      
        for(var key in updatedRow) {
         if (['OtherExpenses','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
       if(updatedRow.Oct == "" && filled ==  false)
      { 
        updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }
      
      rows[i] = updatedRow;
    }
   
    var items = rows.slice(1,length);
   var _row = this.createSummaryRow(items, "OtherExpenses");
    rows[0] = _row;
  this.sumByYear(rows);
    this.setState({ otherExpensesRows: rows});

    this.onSave({ "otherExpensesRows" : rows})

    // this.getIncomeBalance();
 // this.getExpenseBalance();
}
  
  handleGridRowsUpdatedUtilities({ fromRow, toRow, updated }) {
    var filled = false;
    let rows = this.state.utilitiesRows.slice();
    let length = this.state.utilitiesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      
        for(var key in updatedRow) {
         if (['Utilities','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
          updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }

      rows[i] = updatedRow;
    }
    var items = rows.slice(1,length);
    var _row = this.createSummaryRow(items, "Utilities");
    rows[0] = _row;
    this.sumByYear(rows);
    this.setState({ utilitiesRows: rows});

       this.onSave({ "utilitiesRows" : rows})

  }

  componentDidUpdate()
  {

    var grid;
   for(var i= 2; i <= 12; i++ ){
      if ( i!= 11){
      let name = "grid" + i;
      var grid1 = this[name];
      // this.layoutSetting(grid1);
    }
   }
  var currentgrid = this.state.currentgrid;
 
   if (currentgrid != undefined)
   {
       grid = "grid" + currentgrid;
   }
   else
   {
     grid = "grid";
   }
  


   let selected10 = objectAssignfrom({}, this.grid10.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid10.setState({selected: selected10});
   

    let selected9 = objectAssignfrom({}, this.grid9.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid9.setState({selected: selected9});
   


    let selected8 = objectAssignfrom({}, this.grid8.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid8.setState({selected: selected8});
   

   
    let selected1 = objectAssignfrom({}, this.grid1.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid1.setState({selected: selected1});
   
   
  
   
   let selected2 = objectAssignfrom({}, this.grid2.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid2.setState({selected: selected2});

   
   
 
    let selected3 = objectAssignfrom({}, this.grid3.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid3.setState({selected: selected3});

   
    let selected4 = objectAssignfrom({}, this.grid4.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid4.setState({selected: selected4});

    let selected5 = objectAssignfrom({}, this.grid5.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid5.setState({selected: selected5});
  
    let selected6 = objectAssignfrom({}, this.grid6.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid6.setState({selected: selected6});
  
    let selected7 = objectAssignfrom({}, this.grid7.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid7.setState({selected: selected7});
   

   
    let selected11 = objectAssignfrom({}, this.grid11.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid11.setState({selected: selected11});

   
    let selected12 = objectAssignfrom({}, this.grid12.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid12.setState({selected: selected12});

   
    let selected00 = objectAssignfrom({}, this.grid.state.selected, {idx: -1, rowIdx: -1, active: false});
   this.grid.setState({selected: selected00});

    
   
}


  handleGridRowsUpdatedLoanPayment({ fromRow, toRow, updated }) {

    var filled = false;
    let rows = this.state.loanPaymentRows.slice();
    let length = this.state.loanPaymentRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

      for(var key in updatedRow) {
         if (['LoanPayment','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
           updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }
      rows[i] = updatedRow;
    }
   
     var items = rows.slice(1,length);
     var _row = this.createSummaryRow(items, "LoanPayment");
   
      rows[0] = _row;
      this.sumByYear(rows);
      this.setState({ loanPaymentRows: rows});
      this.onSave({ "LoanPayment" : rows})
      this.getIncomeBalance();
      this.getExpenseBalance();
  }

  handleGridRowsUpdatedTransportation({ fromRow, toRow, updated }) {
    var filled = false;
    let rows = this.state.transportationRows.slice();
    let length = this.state.transportationRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
    
      for(var key in updatedRow) {
         if (['Transportation','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }
      
      if(updatedRow.Oct == "" && filled == false)
      {
           updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }
      rows[i] = updatedRow;
    }
   
      var items = rows.slice(1,length);
      var _row = this.createSummaryRow(items, "Transportation");
      rows[0] = _row;
      this.sumByYear(rows);
      this.setState({ transportationRows: rows});
      this.onSave({ "transportationRows" : rows})

       this.getIncomeBalance();
      this.getExpenseBalance();

  }
  
  handleGridRowsUpdatedbooksSupplies({ fromRow, toRow, updated }) {
    debugger;
    var filled = false;
    let rows = this.state.booksSuppliesRows.slice();
    let length = this.state.booksSuppliesRows.length;

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});

       for(var key in updatedRow) {
         if (['BooksSupplies','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
        
        }
      if((updatedRow.Oct == "" )&& filled == false)
      {
          updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
      }
      
      rows[i] = updatedRow;
    }
    var items = rows.slice(1,length);
   var _row = this.createSummaryRow(items, "BooksSupplies");
   rows[0] = _row;
   this.sumByYear(rows);
    this.layoutSetting(this.grid7);
    this.setState({ booksSuppliesRows: rows});

     this.onSave({ "booksSuppliesRows" : rows})

  }

  layoutSetting(grid)
  {
    var cell  = grid._gridNode.querySelector('.react-grid-Cell__value');
    cell.style.color = "#EB6C2C";
    cell.style.fontWeight = "bold";

    var nodes = grid._gridNode.querySelectorAll('.react-grid-Row');
    nodes.forEach(function(element, index){

    if (index !=0) {
          var cell = element.querySelector('.react-grid-Cell__value');
          cell.style.paddingLeft = "20px";
       }
    });
  }

  createReportDataSet(){
    
        var month = this.state.currentMonth;
        let items = [];
    
        let dataSet = [];
        let rows = this.state.rows.slice();
        rows.splice(4,1);
    
          this.initColor(["green", "yellow","black", "red", "blue"]);
          rows.forEach((element,index) => {
            var cell = {};
            var color ;
            var column = element['MonthlyIncome'];

          switch(column)
          {
            case "Employment":
              color = "green";
              break;
            case "Saving":
                color = "yellow";
                break;
            case "Loan":
                    color = "black";
                  break;
            case "Allowance":
                  color = "red";
            break;
          }

          cell[column] = element[month];
          var temp = Object.keys(cell)[0];
          var value = cell[temp];
          items.push( {color: color, value: column});
          dataSet.push( {color: color, value: value, label: temp});

        });
    
        
        this.state.reports = items;
        this.state.reports1 = dataSet;
        return items;
      }
      createReportData(){
         return this.state.reports1;
      }

      initColor(myArray){
        this.state.colors =  myArray;
    }

    generateColor(){
      var self =  this.state.colors.slice();
      var i = Math.floor(Math.random() * self.length);
      var rand = self[i];
      self.splice(i,1);
      this.state.colors = self;
      return rand;
  }

  createExpenseReportDataSet(){
    
    var month = this.state.currentMonth;
    var dataSet = [];
    var TuitionFees = Number(this.state.monthlyExpenseRows[0][month]);
    var housingRows = Number(this.state.housingRows[0][month]);
    let otherExpenses = Number(this.state.otherExpensesRows[0][month]);
    let discretionary = Number(this.state.discretionaryRows[0][month]);
    let transportation = Number(this.state.transportationRows[0][month]);
    let loanPayment = Number(this.state.loanPaymentRows[0][month]);
    let utilities = Number(this.state.utilitiesRows[0][month]);
    let insurance = Number(this.state.insurancerows[0][month]);
    let booksSupplies =Number(this.state.booksSuppliesRows[0][month]);

  dataSet.push( {color: "#898B8E", value: TuitionFees, label: "TuitionFees"});
  dataSet.push( {color: "#5FD2E0", value: housingRows, label: "Housing"});
  dataSet.push( {color: "#84E112", value: insurance, label: "Insurance"});
  dataSet.push( {color: "#E4B806", value: utilities, label: "Utilities"});
  dataSet.push( {color: "#A012E1", value: loanPayment, label: "Loan Payment"});
  dataSet.push( {color: "red", value: transportation, label: "Transportation"});
  dataSet.push( {color: "#f47442", value: discretionary, label: "Discretionary"});
  dataSet.push( {color: "black", value: otherExpenses, label: "otherExpenses"});
  dataSet.push( {color: "blue", value: booksSupplies, label: "Books Supplies"});

  return dataSet;

}
handleAddRowBooksSupplies() {
  const newRow = { Jan: '', Feb: '', Mar: '', Apr: '', May: '', June: '', July: '', Aug: '', Sep: '', Oct: '', Nov: '', Dec: ''};
  var rows = this.state.booksSuppliesRows.slice();
  rows = update(rows, {$push: [newRow]});
  this.grid7.openCellEditor(rows.length -1, 0);
  this.state.booksSuppliesRows = rows;
  this.setState({ "booksSuppliesRows": rows });
}

handleGridRowsUpdated({ fromRow, toRow, updated }) {
  var filled = false;
  let rows = this.state.rows.slice();
  let length = this.state.rows.length;
  for (let i = fromRow; i <= toRow; i++) {
    let rowToUpdate = rows[i];
    let updatedRow = update(rowToUpdate, {$merge: updated});

    for(var key in updatedRow) {
       if (['MonthlyIncome','Sep'].indexOf(key) == -1){

          var value = updatedRow[key];
          if (value != undefined && value != "")
          {
              filled = true;
              break;
          }
       }
      
      }

    if(filled == false && (updatedRow.Oct == "" || updatedRow.Oct == undefined)&& (updatedRow.Sep != "" || updatedRow.Sep != undefined))
    {
        updatedRow.Feb = updatedRow.Sep;
        updatedRow.Mar = updatedRow.Sep;
        updatedRow.Apr = updatedRow.Sep;
        updatedRow.May = updatedRow.Sep;
        updatedRow.June = updatedRow.Sep;
        updatedRow.July = updatedRow.Sep;
        updatedRow.Aug = updatedRow.Sep;
        updatedRow.Jan = updatedRow.Sep;
        updatedRow.Oct = updatedRow.Sep;
        updatedRow.Nov = updatedRow.Sep;
        updatedRow.Dec = updatedRow.Sep;
    }
     rows[i] = updatedRow;
  }

 
  var result = this.sumBySections(this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
  this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, this.state.otherExpensesRows);
  rows = rows.slice();
  length = rows.length;

  var _rows = this.state.cashFlowRows.slice();
  var length1 = this.state.cashFlowRows.length;
  var items = rows.slice(0,length-1);
  this.sum(items, 'Sep' );

  _rows[0].Jan  =   this.sum(items, 'Sep' ) -result.Sep;
  _rows[0].Feb  =   this.sum(items, 'Oct' ) -result.Oct;
  _rows[0].Mar  =   this.sum(items, 'Nov' ) -result.Nov;
  _rows[0].Apr  = this.sum(items, 'Dev' ) -result.Dev;
  _rows[0].May  = this.sum(items, 'May' ) -result.May;
  _rows[0].June  = this.sum(items, 'June' ) -result.June;
  _rows[0].July  = this.sum(items, 'July' ) -result.July;
  _rows[0].Aug  =   this.sum(items, 'Aug' ) -result.Aug;
  _rows[0].Sep  = this.sum(items, 'Sep' ) -result.Sep;
  _rows[0].Oct  =  this.sum(items, 'Oct' ) -result.Oct;
  _rows[0].Nov  = this.sum(items, 'Nov' ) -result.Nov;
  _rows[0].Dec  = this.sum(items, 'Dec' ) -result.Dec;
  var Jan = _rows[0].Jan;
  var Feb = _rows[0].Feb + _rows[1].Jan;
  var Mar =  _rows[0].Mar + _rows[1].Feb;

  var newRow = {
          MonthlyCash:  "Cumulative cash flow", Jan: 0, Feb: 0, Mar: 0, Apr: 0, May:  0, June: 0,
          July: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
    };

_rows[1] = newRow;
var items = rows.slice(0,length-1);
    var jan = this.sum(items, 'Jan' );
    var mar = this.sum(items, 'Mar' );
    var feb = this.sum(items, 'Feb' );
    var mar = this.sum(items, 'Mar' );
    var apr = this.sum(items, 'Apr' );
    var may = this.sum(items, 'May' );
    var june = this.sum(items, 'June' );
    var july = this.sum(items, 'July' );
    var aug = this.sum(items, 'Aug' );
    var sep = this.sum(items, 'Sep' );
    var oct = this.sum(items, 'Oct' );
    var nov = this.sum(items, 'Nov' );
    var dec = this.sum(items, 'Dec' );

    var  _row = {
          MonthlyIncome:  "TOTAL INCOME", Jan: jan, Feb: feb, Mar: mar,
          Apr: apr, May:  may,  June: june, July: july, Aug: aug,Sep: sep,
          Oct: oct, Nov: nov, Dec: dec
    };

  rows[length -1] = _row;
  this.sumByYear(rows);

  this.state.rows = rows;
  //this.setState({ rows: rows });

  //this.props.handleGridRowsUpdated1(rows);

 

  
  //this.setState({ cashFlowRows: _rows});

 

 this.onSave({"rows" : rows});
 
this.getIncomeBalance();
this.getExpenseBalance();
var series =  [
  {
    name: "series-2",
    data: [this.state.income, this.state.expense, this.state.income- this.state.expense]
  }
]

this.setState({ cashFlowRows: _rows, series: series });



}


getIncomeBalance(){
  var month = this.state.currentMonth;
  var length = this.state.rows.length;
  var income = this.sumByYear(this.state.rows)[length-1][month];
  this.state.income = income;
  //this.setState({income: income});
  return income;
}

getExpenseBalance(){
  var month = this.state.currentMonth;
  var loanPaymentRows =  Number(this.state.loanPaymentRows[0][month]);
  var discretionaryRows =  Number(this.state.discretionaryRows[0][month]);
  var monthlyExpenseRows = Number(this.state.monthlyExpenseRows[0][month]);
  var housingRows = Number(this.state.housingRows[0][month]);
  var insurancerows = Number(this.state.insurancerows[0][month]);
  var utilitiesRows = Number(this.state.utilitiesRows[0][month]); 
  var transportationRows = Number(this.state.transportationRows[0][month]);
  var booksSuppliesRows = Number(this.state.booksSuppliesRows[0][month]); 
  var otherExpensesRows = Number(this.state.otherExpensesRows[0][month]);
  var balance  = monthlyExpenseRows + housingRows + insurancerows + utilitiesRows + transportationRows + 
  booksSuppliesRows + otherExpensesRows + loanPaymentRows + discretionaryRows;
  this.state.expense = balance;
  this.setState({expense: balance});
  return balance;
}


onSave(rows){
  
 
       var self = this;
       var key = Object.keys(rows)[0];
       var items = {
           "rows": self.state.rows, "monthlyExpenseRows": self.state.monthlyExpenseRows,
           "housingRows": self.state.housingRows, "insuranceRows": self.state.insurancerows,
           "utilitiesRows": self.state.utilitiesRows, "loanPaymentRows": self.state.loanPaymentRows,
           "transportationRows": self.state.transportationRows, "booksSuppliesRows": self.state.booksSuppliesRows,
           "discretionaryRows": self.state.discretionaryRows, "otherExpensesRows": self.state.otherExpensesRows,
           "householdExpensesRows": self.state.householdExpensesRows
         };

       items[key] = rows[key];


         var result = JSON.stringify(items);
         this.updateItem(items);
}


sumByYear(rows){
  rows.forEach((element,index) => {
  rows[index]['Year'] = this.sumByRow(rows[index]);
});
return rows;
}


updateItem(json) {
  
  console.log(json);

  //axios.post('https://node888.azurewebsites.net/api/items', json)
  axios.post('http://localhost:5000/api/add', json)
  .then(res => {
   console.log("success");})
   .catch(function (error) {
    // handle error
    console.log(error);
    })
  }

    
  rowGetterCashFlow(i) {
      var rows = this.state.rows.slice();
        var result = this.sumBySections(
          this.state.rows,this.state.monthlyExpenseRows, this.state.housingRows, 
          this.state.insurancerows,this.state.utilitiesRows, this.state.loanPaymentRows,
          this.state.transportationRows,this.state.booksSuppliesRows, this.state.discretionaryRows, 
          this.state.otherExpensesRows
        );
  
        var length = rows.length;
        var _rows = this.state.cashFlowRows.slice();
        var length1 = this.state.cashFlowRows.length;
        var items = rows.slice(0,length-1);
    
        _rows[0].Sep   =  Number(this.sum(items, 'Sep' ) -result.Sep);
        _rows[0].Oct   =  Number(this.sum(items, 'Oct' ) -result.Oct);
        _rows[0].Nov   =  Number(this.sum(items, 'Nov' ) -result.Nov);
        _rows[0].Dec   =  Number(this.sum(items, 'Dec' ) -result.Dec);
        _rows[0].Jan   =  Number(this.sum(items, 'Jan' ) -result.Jan);
        _rows[0].Feb   =  Number(this.sum(items, 'Feb' ) -result.Feb);
        _rows[0].Mar   =  Number(this.sum(items, 'Mar' ) -result.Mar);
        _rows[0].Apr   =  Number(this.sum(items, 'Apr' ) -result.Apr);
        _rows[0].May   =  Number(this.sum(items, 'May' ) -result.May);
        _rows[0].June  =  Number(this.sum(items, 'June' ) -result.June);
        _rows[0].July  =  Number(this.sum(items, 'July' ) -result.July);
        _rows[0].Aug   =  Number(this.sum(items, 'Aug' ) -result.Aug);
        
    
        var Sep   =  Number(_rows[0].Sep);
        var Oct   =  Number(_rows[0].Oct + Sep);
        var Nov   =  Number(_rows[0].Nov + Oct);
        var Dec   =   Number(_rows[0].Dec + Nov);
        var Jan   =   Number(_rows[0].Jan + Dec);
        var Feb   =   Number(_rows[0].Feb + _rows[1].Jan);
        var Mar   =   Number(_rows[0].Mar + _rows[1].Feb);
        var Apr   =   Number(_rows[0].Apr + _rows[1].Mar);
        var May   =   Number(_rows[0].May + _rows[1].Apr);
        var June  =   Number(_rows[0].June + May);
        var July  =   Number(_rows[0].July + June);
        var Aug   =   Number(_rows[0].Aug + July);
    
        _rows[0].Year   =  Aug;
        const firstRow = {
                MonthlyCash:  "Available funds", Jan: Jan, Feb:  Feb, Mar: Mar, Apr:  Apr, May:  May, June: June, July: July,
                Aug: Aug, Sep: Sep, Oct: Oct, Nov: Nov, Dec: Dec
          };
        const newRow = {
                MonthlyCash:  "Cumulative available funds", Jan: Jan, Feb:  Feb, Mar: Mar, Apr:  Apr, May:  May, June: June, July: July,
                Aug: Aug, Sep: Sep, Oct: Oct, Nov: Nov, Dec: Dec
          };
        this.state.cashFlowRows[0] = firstRow;
        this.state.cashFlowRows[1] = newRow;
        return this.state.cashFlowRows[i];
  }        

      
  handleAddRowMonthlyIncome() {
    const newRow = { Jan: '', Feb: '', Mar: '', Apr: '', May: '', June: '', July: '', Aug: '', Sep: '', Oct: '', Nov: '', Dec: ''};
   var  rows = this.state.rows.slice();
    rows = update(rows, {$push: [newRow]});
    rows[rows.length-1] = rows[rows.length-2];
    this.grid1.openCellEditor(rows.length -2, 0);
    rows[rows.length-2] =  {};
    this.setState({ rows });

}

  
handleGridRowsUpdatedDiscretionary({ fromRow, toRow, updated }) {
  var filled = false;
  let rows = this.state.discretionaryRows.slice();
  let length = this.state.discretionaryRows.length;

  for (let i = fromRow; i <= toRow; i++) {
    let rowToUpdate = rows[i];
    let updatedRow = update(rowToUpdate, {$merge: updated});

   
      for(var key in updatedRow) {
         if (['Discretionary','Sep'].indexOf(key) == -1){

            var value = updatedRow[key];
            if (value != undefined && value != "")
            {
                filled = true;
                break;
            }
         }
      }

    if(updatedRow.Oct == "" && filled == false)
    {
         updatedRow.Feb = updatedRow.Sep;
          updatedRow.Mar = updatedRow.Sep;
          updatedRow.Apr = updatedRow.Sep;
          updatedRow.May = updatedRow.Sep;
          updatedRow.June = updatedRow.Sep;
          updatedRow.July = updatedRow.Sep;
          updatedRow.Aug = updatedRow.Sep;
          updatedRow.Jan = updatedRow.Sep;
          updatedRow.Oct = updatedRow.Sep;
          updatedRow.Nov = updatedRow.Sep;
          updatedRow.Dec = updatedRow.Sep;
    }
    
    rows[i] = updatedRow;
  }
    var items = rows.slice(1,length);
    var _row = this.createSummaryRow(items, "Discretionary");
    rows[0] = _row;
    this.sumByYear(rows);
    this.setState({ discretionaryRows: rows});

    this.onSave({ "discretionaryRows" : rows})
}


convertArrayOfObjectsToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;
  result = '';
  Object.keys(args).forEach(function(key) {
      data = args[key];

      if (data == null || !data.length) {
                return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
      });
        return result;
    }
downloadCSV(args) {
  var data, filename, link;
  var self = this;
  var csv = this.convertArrayOfObjectsToCSV(
      {data1:this.state.rows, data2: this.state.monthlyExpenseRows, data3: this.state.insurancerows,
       data4: this.state.utilitiesRows, data5: this.state.loanPaymentRows, data6:this.state.transportationRows,
       data7: this.state.booksSuppliesRows, data8: this.state.discretionaryRows, data9: this.state.otherExpensesRows
       
    }
  );
  if (csv == null) return;
  filename = 'export.csv';
  if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  data = encodeURI(csv);
  link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename);
  link.click();
  self.setState({data: data,fileName: 'export.csv'});
}
handleAddRowMonthlyExpense() {
  const newRow = { Jan: '', Feb: '', Mar: '', Apr: '', May: '', June: '', July: '', Aug: '', Sep: '', Oct: '', Nov: '', Dec: ''};
  var rows = this.state.monthlyExpenseRows.slice();
  rows = update(rows, {$push: [newRow]});
  this.grid2.openCellEditor(rows.length -1, 0);
  this.state.monthlyExpenseRows = rows;
//  this.layoutSetting(this.grid2);
  this.setState({ "monthlyExpenseRows": rows });

}
  
      render() {
     
        console.log("cccc", this.props.rows1);
        
        function onSelectEvent(event){
          var self = this;
          self.downloadCSV();
        }
        return  (
         // { this.props.row1.monthlyExpenseRows.length > 0 &&
          <div className="ms-fontColor-themeDarker">
            <div >
            <span ref ="mybudget"> </span>
            {this.state.status}
            {JSON.stringify(this.state.items)}
        </div>
        <div>
              <button name="Edit" className="ms-CommandBarItem-link itemLink_ceb80f25" onClick={onSelectEvent.bind(this)} style={{float:"left", fontSize:"small"}}>
                <i className="ms-Icon ms-CommandBarItem-icon  ms-CommandBarItem-iconColor"></i>
                <span className="ms-CommandBarItem-commandText itemCommandText_ceb80f25">Download</span>
              </button>
        </div>
        <div className="container" style = {{ clear: "both"}} >
          <div className="row">
              <div className="col" style ={{width: "350px"}}>
                  <div style={{width:"150px",  height:"200px", float:"left"}}>
                      <div style={{fontSize: "15px"}}>{this.state.currentMonth} income:</div>
                      <div style={{display: "block", fontSize: "22px"}}>${this.state.income}</div>
                       <ListRender list= {this.createReportDataSet()}/> 
                  </div>
                  <div style ={{ float:"right", marginTop:"-200px"}}>
                      <DoughnutChart JSON={ this.createReportData()} Labels = { labels }/>  
                   </div>          
              </div>

                <div className="col" style ={{width: "350px"}}>

                  <div style={{width:"150px",  height:"200px", float:"left"}}>
                      <span>{this.state.currentMonth} expense:</span>
                      <span style={{display: "block", fontSize: "20px"}}>${this.state.expense}</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#898B8E", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Tuition & Fees </span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#5FD2E0", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Housing</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#84E112", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Insurance</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#E4B806", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Utilities</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#A012E1", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Loan Payments</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"red", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Transportation</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"#f47442", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Discretionary</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"black", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Other Expenses</span>
                      <span style={{display: "block",  fontSize:"13px"}}><button style={{background:"blue", padding:"4px", border: "none", verticalAlign:"middle"}}></button>Books & Supplies</span>
                  </div>
                  <div style ={{ float:"right", marginTop:"-200px"}}>
                      <DoughnutChart JSON={ this.createExpenseReportDataSet()} Labels = { labels1 }/>  
                   </div>   
              </div>
                  <div className="col" style ={{width: "150px"}} >
                    <span>{this.state.currentMonth} available funds:</span>
                    <span style={{display: "block", fontSize: "20px"}}>${this.state.income - this.state.expense}</span>
                   {/* <CanvasComponent /> */}
 
                    <Chart1
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width="300"
                   />
                  
                  </div>
              </div>
          </div>
        
            <div style={{clear: "both"}}>
                <div style={{float:"left" , width: "190px", textAlign: "right", paddingRight: "23px"}}>Available funds</div>
                <div style={{float:"left"}}>  
            <div >
            <div style={{width:"650px", marginBottom: "20px", marginLeft: "0px"}}>
                <Slider step={8.3}  onAfterChange={this.sliderMove.bind(this)} style={{ width:"95%" }} handleStyle={{  backgroundColor: 'green' }}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col sep" >Sep</div>
                    <div className="col oct" >Oct</div>
                    <div className="col nov" >Nov</div>
                    <div className="col dev" >Dec</div>
                    <div className="col jan" >Jan</div>
                    <div className="col feb" >Feb</div>
                    <div className="col mar" >Mar</div>
                    <div className="col apr" >Apr</div>
                    <div className="col may" >May</div>
                    <div className="col june" >June</div>
                    <div className="col july" >July</div>
                    <div className="col aug" >Aug</div>
                    <div className="col year" >Year</div>
                </div>
            </div>
          </div>
        </div>
        </div>
        <div>
            <span style ={{clear: "both", color: "green", display:"block", width:"68%", paddingBottom: "20px", paddingTop:"20px"}} > 
                {this.state.isOnBudget}
          </span>
        </div>
            
      
            <ReactDataGrid
              ref={ node => this.grid = node }
              columns={this._monthlyCashColumns}
              rowGetter={this.rowGetterCashFlow.bind(this)}
              rowsCount={this.state.cashFlowRows.length}
              rowHeight={30}
              enableCellAutoFocus= {false}
              minHeight={90}/>  


              
            <ReactDataGrid 
            ref={ node => this.grid1 = node }
            enableCellSelect={true}
            columns={this._monthlyIncomeColumns}
            rowGetter={this.rowGetter.bind(this)}
            rowsCount={this.state.rows.length}
            rowHeight={30}
            enableCellAutoFocus= {false}
            minHeight={ (this.state.rows.length +1) * 30}
            rows = {this.state.rows}
           // onRowSelect = {this.onRowSelect}
           // onCellSelected={this.onCellSelected}
            onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)}
          //  onCheckCellIsEditable = {this.checkMonthlyIncomeCells}
            />


     
          <ReactDataGrid
            ref={ node => this.grid2 = node }
            enableCellSelect={true}
            columns={this._monthlyExpenseColumns}
            rowGetter={this.rowGetterMonthlyExpense.bind(this)}
            rowsCount={this.state.monthlyExpenseRows.length}
            rowHeight={30}
            minHeight={ (this.state.monthlyExpenseRows.length + 1 ) * 30}
            //contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
         
          //  onCellSelected={this.onCellSelected}
             toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowMonthlyIncome.bind(this)}>+</button></div>}
             onGridRowsUpdated={this.handleGridRowsUpdatedMonthlyExpense.bind(this)}
              //onCheckCellIsEditable = {this.checkCells}
              enableCellAutoFocus= {false}
             // RowsContainer={ContextMenuTrigger}
           />
              } 

          

           <ReactDataGrid
              ref={ node => this.grid7 = node }
              enableCellSelect={true}
              columns={ this._booksSuppliesColumns }
              enableCellAutoFocus= {false}
              rowGetter={this.rowGetterBooksSupplies.bind(this)}
              rowsCount={this.state.booksSuppliesRows.length}
            //  contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              rowHeight={30}
              enableCellAutoFocus= {false}
              minHeight={ (this.state.booksSuppliesRows.length +1) * 30}
             // onCellSelected={this.onCellSelected}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowMonthlyExpense.bind(this)}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedbooksSupplies.bind(this)} 
             //  onCheckCellIsEditable = {this.checkCells}
            />

            <ReactDataGrid
              ref={ node => this.grid3 = node }
              enableCellSelect={true}
              columns={this._housingColumns}
              rowGetter={this.rowGetterHousing.bind(this)}
              rowsCount={this.state.housingRows.length}
              rowHeight={30}
              minHeight={ (this.state.housingRows.length +1) * 30}
           //   onCellSelected={this.onCellSelected}
            //  contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowBooksSupplies.bind(this)}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedHousing.bind(this)} 
              enableCellAutoFocus= {false}
              //onCheckCellIsEditable = {this.checkCells}
            />
            
           <ReactDataGrid
              ref={ node => this.grid12 = node }
              enableCellSelect={true}
              columns={this._housingColumns1}
              rowGetter={this.rowGetterHousing1.bind(this)}
              rowsCount={this.state.householdExpensesRows.length}
              rowHeight={30}
              minHeight={ (this.state.householdExpensesRows.length +1) * 30}
           //  onCellSelected={this.onCellSelected.bind(this)}
            //  contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowHousing}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedHouseholdExpensesRows.bind(this)} 
              enableCellAutoFocus= {false}
            //  onCheckCellIsEditable = {this.checkCells}
            />
           
        
            <ReactDataGrid
              ref={ node => this.grid4 = node }
              enableCellSelect={true}
              columns={this._insuranceColumns}
              rowGetter={this.rowGetterInsurance.bind(this)}
              rowsCount={this.state.insurancerows.length}
             // contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              rowHeight={30}
              minHeight={ (this.state.insurancerows.length +1) * 30}
           //   onCellSelected={this.onCellSelected.bind(this)}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowHouseholdExpense}>+</button></div>}
               onGridRowsUpdated={this.handleGridRowsUpdatedInsurance.bind(this)} 
               enableCellAutoFocus= {false}
            //  onCheckCellIsEditable = {this.checkCells}
            />
            
            <ReactDataGrid
              ref={ node => this.grid5 = node }
              enableCellSelect={true}
              columns={this._utilitiesColumns}
              rowGetter={this.rowGetterUtilities.bind(this)}
              rowsCount={this.state.utilitiesRows.length}
           //   contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              rowHeight={30}
              minHeight={ (this.state.utilitiesRows.length +1) * 30}
            //  onCellSelected={this.onCellSelected.bind(this)}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowInsurance}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedUtilities.bind(this)} 
              enableCellAutoFocus= {false}
            //  onCheckCellIsEditable = {this.checkCells}
            />

            <ReactDataGrid
              ref={ node => this.grid6 = node }
              enableCellSelect={true}
              columns={ this._loanPaymentColumns }
              rowGetter={this.rowGetterLoanPayment.bind(this)}
              rowsCount={this.state.loanPaymentRows.length}
              rowHeight={30}
              minHeight={ (this.state.loanPaymentRows.length +1) * 30}
            //  onCellSelected={this.onCellSelected.bind(this)}
           //   contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowUtilities}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedLoanPayment.bind(this)} 
              enableCellAutoFocus= {false}
           //   onCheckCellIsEditable = {this.checkCells}
           />
                
            <ReactDataGrid
              ref={ node => this.grid8 = node }
              enableCellSelect={true}
              columns={ this._transportationColumns  }
              rowGetter={this.rowGetterTransportation.bind(this)}
              rowsCount={this.state.transportationRows.length}
             // contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              rowHeight={30}
              minHeight={ (this.state.transportationRows.length +1) * 30}
             // onCellSelected={this.onCellSelected.bind(this)}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowLoanPayment}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedTransportation.bind(this)} 
              enableCellAutoFocus= {false}
           //  onCheckCellIsEditable = {this.checkCells}
           />

            
            <ReactDataGrid
              ref={ node => this.grid9 = node }
              enableCellSelect={true}
              columns={ this._discretionaryColumns }
              rowGetter={this.rowGetterDiscretionary.bind(this)}
              rowsCount={this.state.discretionaryRows.length}
              rowHeight={30}
              minHeight={ (this.state.discretionaryRows.length +1) * 30}
            //  onCellSelected={this.onCellSelected.bind(this)}
           //   contextMenu={ <MyContextMenu   onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowTransportation}>+</button></div>}
              onGridRowsUpdated={this.handleGridRowsUpdatedDiscretionary.bind(this)} 
              enableCellAutoFocus= {false}
           //   onCheckCellIsEditable = {this.checkCells}
           />
            
            <ReactDataGrid
              ref={ node => this.grid10 = node }
              enableCellSelect={true}
              columns={ this._otherExpensesColumns }
              rowGetter={this.rowGetterOtherExpenses.bind(this)}
              rowsCount={this.state.otherExpensesRows.length}
              rowHeight={30}
              minHeight={ (this.state.otherExpensesRows.length +1) * 30}
            //  onCellSelected={this.onCellSelected}
            //  contextMenu={ <MyContextMenu  onRowDelete = {this.deleteRow}  onRowInsert = {this.handleAddRow}/>}
              toolbar={<div><button  style={{marginLeft:"850px"}} onClick={this.handleAddRowDiscretionary}>+</button></div>}
           onGridRowsUpdated={this.handleGridRowsUpdatedOtherExpenses.bind(this)} 
           enableCellAutoFocus= {false}
           //  onCheckCellIsEditable = {this.checkCells.bind(this)}
             />

           
            <ReactDataGrid
              ref={ node => this.grid11 = node }
              enableCellSelect={false}
              columns={this._totalExpensesColumns}
              rowGetter={this.rowGetterTotalExpenses.bind(this)}
              rowsCount={this.state.totalExpensesRows.length}
              minHeight={150}
              enableCellAutoFocus= {false} />



         
          
            </div>
      

            
        )
      }
    }


function mapStateToProps(state) {
  return {
      users: state.users,
      rows1: state.rows1
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser, handleGridRowsUpdated1: handleGridRowsUpdated1, getGithubDataAsyn: getGithubDataAsyn}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Student);
