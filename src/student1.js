import React, { Component } from 'react';
import DataGrid from "react-data-grid";

import * as $ from 'jquery';
import {bindActionCreators} from 'redux';
//import Chart1 from "react-apexcharts";
//import { Bar } from 'react-chartjs-2';

import * as objectAssignfrom from 'object-assign';
import {connect} from 'react-redux';

//import Slider from 'rc-slider';

//import 'rc-slider/assets/index.css';
import './bootstrap.min.css';

//import CanvasComponent  from './Bar';
import './example.css';
import './react-context-menu.css';
//import ListRender from './ListRender';
//import { Menu } from "react-data-grid-addons";
//import DoughnutChart from './chart';
import {selectUser, handleGridRowsUpdated1, getGithubDataAsyn} from './actions/index'
import * as update from 'immutability-helper';
import { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

var columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
];
var rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
];

class YearFormatter extends React.Component {
    render() {
      const year = this.props.value;
      return (
        <div style={{marginTop: '0px'}}>
          <div style = {{color: 'EB6C2C'}} >
            { year }
          </div>
        </div>);
    }
  }
  
export class Student extends React.Component {
    constructor(props) {
       
        super(props);
        // Set initial state
        var rows1;
        
        let items = [];
        const firstMonth = 'Sep';
        var self = this;
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
      
sum(rows,column){
    var amount = 0;
    rows.forEach(element => {
    amount =  amount + Number(element[column] == undefined ? 0: element[column]);
  });
  return amount== 0 ? "" : amount;
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
    render() {
     return(
         <div>
        <DataGrid
        ref={ node => this.grid = node }
        columns={this._monthlyCashColumns}
        rowGetter={this.rowGetterCashFlow.bind(this)}
        rowsCount={this.state.cashFlowRows.length}
        rowHeight={30}
        enableCellAutoFocus= {false}
        minHeight={90}/>  

        <DataGrid 
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
        </div>
     )
    }
}
