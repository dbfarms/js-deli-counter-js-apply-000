var katzdeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === newName) {
      return `Welcome, ${newName}. You are number ${katzDeliLine[i]+1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentlyServing = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentlyServing}.`_
  }
}

function currentLine(katzDeliLine) {
  
}