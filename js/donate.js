document.getElementById('noakhali-btn').addEventListener('click', function (event) {
  event.preventDefault();
  

  const donate = getInputValue('noakhali-input');
  const amount = getInnerText('noakhali-bdt');
  const balance = getInnerText('main-balance');
  const newAmount = amount + donate;
  const newbalance = balance - donate;
  if (isNaN(donate) || donate > balance) {
    alert('Failed to Donate')
    return;
  }
  else {
    alert('Congratulation! "You have Donated for Humankind" ')
    document.getElementById('noakhali-bdt').innerText = newAmount;
  document.getElementById('main-balance').innerText = newbalance;
  }


 const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for famine-2024 at Noakhali, Bangladesh </h4>
            <p id="dateTime"></p>
            `;
            document.getElementById('history-container').appendChild(div);


})



document.getElementById('feni-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const donate = getInputValue('feni-input');
  const amount = getInnerText('feni-bdt');
  const balance = getInnerText('main-balance');
  const newAmount = amount + donate;
  const newbalance = balance - donate;
  if (isNaN(donate) || donate > balance) {
    alert('Failed to Donate')
    return;
  }
  else {
    alert('Congratulation! "You have Donated for Humankind" ')
    document.getElementById('feni-bdt').innerText = newAmount;
    document.getElementById('main-balance').innerText = newbalance;
  }

  const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for Flood Relief in Feni,Bangladesh, Bangladesh </h4>
            <p id="dateTime"></p>

            `;

            document.getElementById('history-container').appendChild(div);
})

document.getElementById('quota-btn').addEventListener('click',function(event){
  event.preventDefault();

  const donate = getInputValue('quota-input');
  const amount = getInnerText('quota-bdt');
  const balance = getInnerText('main-balance');
  const newAmount = amount + donate;
  const newbalance = balance - donate;
  if (isNaN(donate) || donate > balance) {
    alert('Failed to Donate')
    return;
  }
  else {
    alert('Congratulation! "You have Donated for Humankind" ')
    document.getElementById('quota-bdt').innerText = newAmount;
    document.getElementById('main-balance').innerText = newbalance;
  }

  const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h4>
            `;
            document.getElementById('history-container').appendChild(div);
})

document.getElementById('donation-btn').addEventListener('click', function () {
            hiddenSection('donate-section');
        });

document.getElementById('histiry-btn').addEventListener('click', function () {
            hiddenSection('history-section');
});
document.getElementById('blog-btn').addEventListener('click', function (event) {
  event.preventDefault();

  window.location.href = '/blog.html';
})
        