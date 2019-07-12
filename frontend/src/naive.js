class MedianCalculator2 {
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
  
      let arr = [...this.window].sort((a,b) => a-b);
  
      if (n % 2 === 1) {
        return arr[(arr.length + 1) / 2 - 1];
      } else {
        return 0.5 * (arr[arr.length / 2 - 1] + arr[arr.length / 2]);
      }
    }
  }
  
  export default function MainNaive(windowSize, data) {
    const a = performance.now();
  
    //console.log(data)
    const calc = new MedianCalculator2(windowSize);
    let result = []

    for (let i = 0; i < data.length; i++) {
      calc.addDelay(data[i])
      result.push(calc.getMedian())
    }
  
    const b = performance.now();

    const time = b - a
  
    return {time, result};
  }
  