
// func - function to be called with delay
// delay - delay in milliseconds, can be set as default or change explicitly
export const debounce = (func, delay = 1000) =>{
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
}

export class DebounceTexbox{
  
    //elementid - textbox element id
    //delay - delay in milliseconds, can be set as default or change explicitly
    //func - function to be called with delay
    constructor(elementid,
        delay,
        func
        ){
      this.id = elementid;
      this.selector = `#${this.id}`;
      this.delay = delay;
      this.func = debounce(func,this.delay);
    }
  
    initialize(){
        $(this.selector).on('input',(event) => this.func() );
    }

    getValue(){
        return document.getElementById(this.id).value;
    }

    
    //sample implementation
    // let debounce = new DebounceTexbox(
    //     'txtsearch',
    //     1000,
    //     () => console.log('executing')
    // );
    // debounce.initialize();
  }


  $(() => { 

        let debounce = new DebounceTexbox(
            'txtsearch',
            1000,
            () => console.log('executing')
        );
        debounce.initialize();

  });