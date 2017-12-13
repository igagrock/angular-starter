/**
 * Calculator app module
 */

var CalculatorModule = angular.module("CalculatorModule",[]);
CalculatorModule.controller("OperationController", operationController);

function operationController(){
   console.log("operationController is called ...");
   var _this = this;
   _this.selectedOperation = '+';
   _this.resultValue = 0;
   _this.onBtnClicked= function(operation){        
       console.log("onPlusClicked is called...");
       _this.selectedOperation = operation;
       _this.computeResult();
   };
   _this.computeResult = function(){
       console.log("compute result called...");
       var operand1 = parseFloat(_this.op1);
       var operand2 = parseFloat(_this.op2);

       switch (_this.selectedOperation) {
           case '+':  _this.resultValue = operand1 + operand2; break;
           case '-':  _this.resultValue = operand1 - operand2; break;
           case '*':  _this.resultValue = operand1 * operand2; break;
           case '/':  _this.resultValue = operand1 / operand2; break;
       
           default:
               break;
       }
   }

}

export {CalculatorModule};