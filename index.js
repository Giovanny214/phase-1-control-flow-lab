function scuberGreetingForFeet(feet){
  if (feet <= '400'){
    return "This one is on me!"
  } else if (feet <= '2001') {
    return 'I will gladly take your thirty bucks.'
  } else (feet <= '2501'); {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
    return city === 'NYC'?'Ok, sounds good.' :`No go.`
}

function switchOnCharmFromTip(_tip){
  switch(_tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return `Bye.`
  }
}