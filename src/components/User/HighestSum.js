const HighestSum = () => {
  const sample = [1, 2, 3, 4, 5, 6, 7, 8]
  const maxLength = 3

  return (
    <div> {(
      () => {
        if (sample && sample.length >=2) {
          let maxSum = -Infinity 
          console.log('here')
          for (let i = 0; i<=sample.length - maxLength; i++) {
            console.log(i)
            let sum = 0
            for (let j = i; j < i+maxLength; j++) {
              sum += sample[j]
            }
            if (sum > maxSum) {
              maxSum = sum
            }
          }
          return (<div><span>Sample: {sample} ======== </span>Sum: {maxSum}</div>)
        }
        return (<div>0</div>)
      })()}
    </div>
  )

  // Above example is having comlplexity of 0(n2)
}

export default HighestSum