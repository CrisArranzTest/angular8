import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'Angular';
  transactionBefore: string = '';
  transactionBoolean: boolean = false;
  numberString: string = '';
  numberInt: number;
  numberResult: number = 0;

  classtoSet: string = 'positive';

  arrayOperacion: string [] = ['suma','resta','multi','divi'];

  onCounterChange(typeButton: string){
    if(this.arrayOperacion.includes(typeButton) === false && typeButton !== 'result') {
      if(this.transactionBoolean === true){
        this.numberString = '';
        this.transactionBoolean = false;
      }        
      this.numberString = this.numberString + typeButton;
    }
    if(this.arrayOperacion.includes(typeButton) === true){
      if(this.transactionBoolean === false){
        this.transactionBefore = typeButton;
        this.numberInt = +this.numberString;
        this.transactionBoolean = true;
      }
      this.numberResult = this.operations(this.numberResult, this.numberInt, this.transactionBefore);
      this.numberString = this.numberResult.toString();
    } 
    if(typeButton === 'result' && this.transactionBefore !== ''){
      if(this.transactionBoolean === false){
        this.numberInt = +this.numberString;
        this.transactionBoolean = true;
      }
      this.numberResult = this.operations(this.numberResult, this.numberInt, this.transactionBefore);
      this.numberString = this.numberResult.toString();
    } 
    
    //this.classtoSet = this.numberResult > 0 ? 'positive' : 'negative';
  }
  operations(result: number, number2: number, type: string): number{
    switch(type){
      case 'suma':
        result += number2;
        break;
      case 'resta':
        result -= number2;
        break;
      case 'multi':
        result *= number2;
        break;
      case 'divi':
        result /= number2;
        break;
      default:
        break;
    }
    return result;

  }
}
