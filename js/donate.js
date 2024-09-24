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
    document.getElementById('my_modal_5').showModal();
    document.getElementById('noakhali-bdt').innerText = newAmount;
  document.getElementById('main-balance').innerText = newbalance;
  }

  const currentDate = new Date();
 const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2','p-5','rounded-lg');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for famine-2024 at Noakhali, Bangladesh </h4>
            <p>Date : ${currentDate}</p>
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
    document.getElementById('my_modal_5').showModal();
    document.getElementById('feni-bdt').innerText = newAmount;
    document.getElementById('main-balance').innerText = newbalance;
  }
  const currentDate = new Date();
  const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for Flood Relief in Feni,Bangladesh, Bangladesh </h4>
            <p>Date : ${currentDate}</p>

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
    document.getElementById('my_modal_5').showModal();
    document.getElementById('quota-bdt').innerText = newAmount;
    document.getElementById('main-balance').innerText = newbalance;
  }
  const currentDate = new Date();
  const div = document.createElement('div');
            div.classList.add('border-2', 'border-solid', 'p-2', 'mt-2');
            div.innerHTML = `
            <h4 class="font-bold text-xl"> ${donate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h4>
            <p>Date : ${currentDate}</p>
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
        