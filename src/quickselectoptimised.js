class MedianCalculator3 {

    constructor(windowSize)
    {
        this.windowSize = windowSize
        this.window = []
    }

    addDelay(d) {

        this.window.push(d) 

        if (this.window.length > this.windowSize) {
            this.window.shift()
        }

    }

    getMedian() {

        const n = this.window.length

        if (n === 0) { return 'empty array' }
        if (n === 1) { return -1 }

        let arr = [...this.window]

        if (n % 2 === 1) {
            return this.quickSelect(arr, 0, arr.length - 1, (arr.length + 1) / 2 - 1)
        } else {
            return 0.5 * (this.quickSelect(arr, 0, arr.length - 1, arr.length / 2 - 1) + 
                          this.quickSelect(arr, 0, arr.length - 1, arr.length / 2))
        }

    }

    swap(arr, from, to) {
        const temp = arr[from]
        arr[from] = arr[to]
        arr[to] = temp
    }
  
    partition(arr, start, end, pivotIndex) {

        const pivot = arr[pivotIndex]

        this.swap(arr, pivotIndex, end)

        let pIndex = start

        for (let i = start; i < end; i++) {
            if (arr[i] <= pivot) {
                this.swap(arr, i, pIndex)
                pIndex++
            }
        }

        this.swap(arr, pIndex, end)

        return pIndex
    }

    quickSelect(arr, start, end, k) {

        if (start === end) { return arr[start] }

        const pivotIndex = this.partition(arr, start, end, ~~((Math.random() * (end - start + 1)) + start))

        switch(true) {
            case k === pivotIndex:
                return arr[k];
            case k < pivotIndex:
                return this.quickSelect(arr, start, pivotIndex - 1, k)
            default:
                return this.quickSelect(arr, pivotIndex + 1, end, k)
        }
        
    }
}

export default function MainOptimised(windowSize, data) {

    const a = performance.now()
  
    //console.log(data)
    const calc = new MedianCalculator3(windowSize)
    let result = []

    for (let i = 0; i < data.length; i++) {
      calc.addDelay(data[i])
      result.push(calc.getMedian())
    }

    const b = performance.now()

    const time = b - a

    return {time, result}
}