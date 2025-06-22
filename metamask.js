// MetaMask Login Script
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('metamask-login-btn');
  if (!window.ethereum) {
    alert('Please install MetaMask!');
    return;
  }

  loginBtn.addEventListener('click', async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert('Logged in with MetaMask: ' + accounts[0]);
    } catch (error) {
      console.error('MetaMask login failed', error);
    }
  });
});
