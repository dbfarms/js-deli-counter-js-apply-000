var katzdeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === newName) {
      return `Welcome, ${newName}. You are number ${katzDeliLine[i]+1} in line.`
    }
  }
}

function nowServing() {
  if (katzDeliLine === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine
  }
}