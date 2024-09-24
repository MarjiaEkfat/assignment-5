function getInputValue(id) {
  const donatevalue = document.getElementById(id).value;
  const donatenumber = parseFloat(donatevalue);
  return donatenumber;
}

function getInnerText(id) {
  const balanceValue = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(balanceValue);
  return balanceNumber;
}

 function hiddenSection(id) {
            document.getElementById('donate-section').classList.add('hidden');
            document.getElementById('history-section').classList.add('hidden');
            
            document.getElementById(id).classList.remove('hidden');
}
        
