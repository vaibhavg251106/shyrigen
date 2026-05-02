
const shayariList = [
  'Unse hai mohbbat iss qadar chhupta mein firta hun,Haqeeqat na sahi khwabon m toh shab-o-roz milta hun',

  'Hai ye khwab ya sach ho tum, Meri baahon mein kya khoob lagte ho tum',

  'Na hum keh paayenge iss dar se bichhad Jane ke, Hasrat toh yun reh jayegi na mil ske na Imkaan tha aane ka ',

  'Seher hone tak jaaga soch kar ke wo pukaarega,Shayad ek dafa ruk kar mere dar par sila-e-Wafa chukaayega',

  'Rasta badal deta hun kahin aankhen na mil jaye, Isliye tujhse na batlata hun kahin fir pyaar iss dil mein na khil jaye',

  'Tum mehtaab ho ya gul-e-shadaab ho, Kis kadar batlate tumhe kitne tum la-jwab ho'
];

let index = 0;

function showShayari() {
  const box = document.getElementById('shayari');
  const count = document.getElementById('count');
  box.style.opacity = '0';
  box.style.transform = 'translateY(8px)';
  setTimeout(() => {
    box.innerText = shayariList[index];
    count.innerText = (index + 1) + ' / ' + shayariList.length;
    box.style.opacity = '1';
    box.style.transform = 'translateY(0)';
  }, 220);
}

function nextShayari() {
  index = (index + 1) % shayariList.length;
  showShayari();
}

function prevShayari() {
  index = (index - 1 + shayariList.length) % shayariList.length;
  showShayari();
}

function copyText() {
  navigator.clipboard.writeText(shayariList[index]);
}

window.onload = showShayari;