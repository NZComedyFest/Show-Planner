const list =
document.getElementById("showList");

shows.forEach(show => {

list.innerHTML += `
<label class="show-option">
<input type="checkbox" value="${show.id}">
${show.title}
<br>
${show.date} — ${show.time}
</label>
`;

});
