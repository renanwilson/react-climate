export function getDate() {
  const now = new Date();
  const days = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  return `${hours}:${minutes} - ${day}, ${date} ${month}`;
}
