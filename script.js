setInterval(() => {
  let c = document.querySelector(".jam");
  let d = document.querySelector(".tanggal");

  let waktu = new Date();
  let hh = waktu.getHours();
  let mm = waktu.getMinutes();
  let ss = waktu.getSeconds();
  let tanggal = waktu.toDateString();

  c.innerText = `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
  d.innerText = tanggal;
}, 1000);

function padding(n) {
  return n.toString().padStart(2, "0");
}
