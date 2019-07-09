class MedianCalculator {
    constructor(windowSize) {
      this.windowSize = windowSize;
      this.window = [];
    }
  
    addDelay(d) {
      this.window.push(d);
  
      if (this.window.length > this.windowSize) {
        this.window.shift();
      }
    }
  
    getMedian() {
      const n = this.window.length;
  
      if (n === 0) {
        return "empty array";
      }
      if (n === 1) {
        return -1;
      }
  
      let arr = [...this.window];
         
      if (n % 2 === 1) {
        return this.quickSelect(arr, arr.length / 2);
      } else {
        return (
          0.5 *
          (this.quickSelect(arr, arr.length / 2 - 1) +
            this.quickSelect(arr, arr.length / 2))
        );
      }
    }
  
    quickSelect(arr, k) {
      if (arr.length === 0) {
        return arr[0];
      }
  
      const pivot = arr[~~(Math.random() * arr.length)];
  
      let lows = [],
        highs = [],
        pivots = [];
  
      arr.forEach(el => {
        if (el < pivot) {
          lows.push(el);
        } else if (el > pivot) {
          highs.push(el);
        } else {
          pivots.push(el);
        }
      });
  
      if (k < lows.length) {
        return this.quickSelect(lows, k);
      } else if (k < lows.length + pivots.length) {
        return pivots[0];
      } else {
        return this.quickSelect(highs, k - lows.length - pivots.length);
      }
    }
  }
  
  export default function MainNormal(windowSize, data) {
    const a = performance.now();
  
    //console.log(data)
    const calc = new MedianCalculator(windowSize);
    let result = []
  
    for (let i = 0; i < data.length; i++) {
      calc.addDelay(data[i]);
      result.push(calc.getMedian());
    }
    
    const b = performance.now();

    const time = b - a

    return {time, result};

  }
  