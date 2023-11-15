const DualPointer = () => {
  const array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  let leftIndex = 0
  let rightIndex = array.length - 1
  let valueOf = ''

  return (
    <div>
      <div>Array Given{array}</div>
      <div>{(
        () => {
          while (leftIndex < rightIndex) {
            console.log(leftIndex, rightIndex, array, valueOf)
            const sum = array[leftIndex] + array[rightIndex]
            console.log(sum, 'sum')
            if (sum === 0) {
              valueOf = 'FOUND'
              return(<span>{valueOf}</span>)
            }else if (sum < 0) {
              leftIndex ++
            } else if (sum > 0) {
              rightIndex --
            }
          }
        }
      )()}</div>
    </div>
  )
}

export default DualPointer