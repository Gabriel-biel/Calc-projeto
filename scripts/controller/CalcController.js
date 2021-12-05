class CalcController {
  constructor() {
    // this._displayCalc = '0';
    this._toLocale = 'pt-BR'
    this._currentDate;
    // this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data')
    this._timeEl =  document.querySelector('#hora')

    this.initialize();
    this.initButtonEvents();
  }

  initialize(){
    this.setDisplayDateTime();

    setInterval(() => {
      this.displayDate = this.currentDate.toLocaleDateString(this._toLocale, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
      this.displayTime = this.currentDate.toLocaleTimeString(this._toLocale)
    }, 1000)
  }

  addEventListenerAll(element, events, fn) {
    events.split(' ').forEach(event => {

      element.addEventListener(event, fn, false);
    });
  }

  execBtn(value) {
    switch (value) {
      case 'ac': {
        
      }
      break; 
    }
  }

  initButtonEvents() {
    let buttons = document.querySelectorAll('#buttons > g, #parts > g');

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, 'click drag', e => {

        let textBtn = btn.className.baseVal.replace('btn-', '');
        this.execBtn(textBtn);
      }),

      this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
        btn.style.cursor = 'pointer'
      })
    })
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._toLocale)
      this.displayTime = this.currentDate.toLocaleTimeString(this._toLocale)
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayDate(){
    return this._dateEl.innerHTML;
  }

  set displayDate(value){
    this._dateEl.innerHTML = value;
  }
  
  get displayCalc(){
    return this._displayCalcEl.innerHTML
  }

  set displayCalc(value){
    this._displayCalcEl.innerHTML = value
  }

  get currentDate() {
    return new Date()
  }

  set currentDate(value){
    this._currentDate = value
  }
}