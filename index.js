document.getElementById('generateBtn').addEventListener('click', function() {
  const length = document.getElementById('length').value;
  const useUppercase = document.getElementById('uppercase').checked;

  const useLowercase = document.getElementById('lowercase').checked;


  const useNumbers = document.getElementById('numbers').checked;

  const useSpecial = document.getElementById('special').checked;

  let characters;
  let password;

  if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';

  if (useNumbers) characters += '0123456789';
  if (useSpecial) characters += '!@#$%^&*()_+{}[]|;:,.<>?';


  for (let i = 0; i < length; i++){

      password += characters.charAt(Math.floor(Math.random() * characters.length));

  }

     document.getElementById('result').innerText = 'Generated Password: ' + password;
});
